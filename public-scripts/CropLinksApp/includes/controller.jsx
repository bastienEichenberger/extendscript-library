/**
 * Function to generate the controller
 * @param {Object} view the view
 * @return {Object} the controller
 * @requires {@link IN}
 */
var controller = function (view) {

    /***********************************************
     * Public
     ***********************************************/

    var that = {};

    that.view = view;

    /**
     * Function to make a package of the document and close the original
     * @param {Document} doc
     * @param {Folder} folder, the output folder
     */
    that.copy_and_close = function (folder, doc) {
        var new_doc_path = IN.Document.package(folder, doc);
        var new_doc = app.open(new File(new_doc_path));

        doc.close(SaveOptions.NO);

        return new_doc;
    }

    /**
     * Function to crop all links of an InDesign document
     * @param {Folder} script_folder the where the script is stored
     * @param {Document} doc the current indesign document
     */
    that.crop_links = function (script_folder, doc) {

        var links = doc.links;

        for (var i = 0; i < links.length; i++) {

            var current_link = links[i];

            if (is_link_valid(current_link, doc)) {

                // link is [EPS, Image, ImportedPage | PDF | PICT | WMF]
                // graphic.parent = PageItem
                // link.parent = graphic
                var page_item = current_link.parent.parent;
                var graphic = current_link.parent;

                // get the resolution
                var resolution = graphic.effectivePpi[0];

                // The bounds of the Graphic excluding the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
                var top_left_corner = {};
                top_left_corner.x = page_item.geometricBounds[1] - graphic.geometricBounds[1];
                top_left_corner.y = page_item.geometricBounds[0] - graphic.geometricBounds[0];

                // The bounds of the Graphic excluding the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
                var bottom_right_corner = {};
                bottom_right_corner.x = top_left_corner.x + (page_item.geometricBounds[3] - page_item.geometricBounds[1]);
                bottom_right_corner.y = top_left_corner.y + (page_item.geometricBounds[2] - page_item.geometricBounds[0]);

                // crop this link
                H.Gateway.call_app(
                    'photoshop',
                    crop_in_photoshop,
                    [
                        script_folder,
                        current_link.filePath,
                        [
                            top_left_corner.x,
                            top_left_corner.y,
                            bottom_right_corner.x,
                            bottom_right_corner.y
                        ],
                        graphic.absoluteHorizontalScale,
                        graphic.absoluteVerticalScale,
                        resolution,
                        'ResampleMethod.NONE'
                    ],
                    100
                );

                set_proportional_link_to_100(current_link);
                H.Log.info('the link ' + current_link.name + 'was correctly cropped');
            }
            // update progress bar
            update_pbar(i + 1);
        }
    }

    /***********************************************
     * PRIVATE
     ***********************************************/

    /**
     * Function to update the progress bar
     * @param value
     */
    function update_pbar (value) {
        that.view.ui.pbar.value = value;
    }

    /**
     * Function to check if a link is valid, only [TIFF, JPEG, PNG, PSD] are edited
     * @param {Link} link_item
     * @param {Document} doc
     * @returns {boolean} true if the link is valid
     * @throws {Error} if a link is used more than 1 times
     * @throws {Error} if a link is not proportional
     */
    function is_link_valid (link_item, doc) {

        // check if a link is used more than 1 times
        if (IN.Link.count(link_item, doc) > 1) {
            throw {
                name: 'Error',
                message: 'A link cannot been used more than 1 times',
                fileName: $.fileName,
                line: $.line
            };
        }

        // check if a link is not proportional
        if (!IN.Link.is_proportional(link_item)) {
            throw {
                name: 'Error',
                message: 'A link is not proportional',
                fileName: $.fileName,
                line: $.line
            };
        }
        // only TIFF, JPEG, PNG AND PSD are cropped
        if (link_item.linkType === 'TIFF' || link_item.linkType === 'JPEG'
            || link_item.linkType === 'Portable Network Graphics (PNG)' || link_item.linkType === 'Photoshop') {
            return true;
        }

        return false;
    }

    /**
     * Function to crop an image in Photoshop
     * @param script_folder
     * @param file_path
     * @param top_left_corner
     * @param bottom_right_corner
     * @param horizontal_scale
     * @param vertical_scale
     * @param resolution
     * @param resample_method
     * @requires {@link PS}
     * @todo the gateway module do not support if the function content comments
     */
    function crop_in_photoshop (script_folder, file_path, bounds,
                                horizontal_scale, vertical_scale, resolution, resample_method) {

        $.evalFile(script_folder + '/../../lib/photoshop/photoshop-lib.jsx');

        try {

            PS.Config.init();
            PS.Document.open(file_path);
            var ps_doc = app.activeDocument;

            PS.Document.Resize.resampling(
                ps_doc,
                file_path,
                horizontal_scale,
                vertical_scale,
                resolution,
                resample_method
            );

            ps_doc.crop(bounds);
            ps_doc.save();
            ps_doc.close();
        }
        catch (ex) {
            alert(ex.message);
        }
        finally {
            PS.Application.restore();
        }
    }

    /**
     * Function to set a link to 100% in indesign and put the x y coordinates to 0,0
     * @param link_item
     */
    function set_proportional_link_to_100 (link_item) {

        var status = link_item.status;

        if (status === LinkStatus.LINK_OUT_OF_DATE) {
            link_item.update();
        }

        if (link_item.status != LinkStatus.NORMAL) {
            throw {
                name: 'Error',
                message: 'The link ' + link_item.name + ' as an wrong status',
                fileName: $.fileName,
                line: $.line
            };
        }

        var graphic = link_item.parent;
        var page_item = link_item.parent.parent;
        // [y1, x1, y2, x2], get the x,y coordinate of the block then put the graphic to 0,0
        var x = page_item.geometricBounds[1];
        var y = page_item.geometricBounds[0];
        graphic.move([x, y]);

        // set to 100%
        graphic.absoluteHorizontalScale = 100;
        graphic.absoluteVerticalScale = 100;

    }

    return that;

};

