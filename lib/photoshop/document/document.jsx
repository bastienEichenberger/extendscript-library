/**
 * Module with Photoshop functions to resize and crop documents</br>
 * These functions can be used from InDesign with the {@link H.Utils.Gateway} module
 * @namespace Document
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Document = (function (my) {

    /**
     * Function to save the active document as PSD
     * @function save_to_PSD
     * @memberOf PS.Document
     * @param {string} file_path the new document path
     * @param {Photoshop Document} [document] the document to save
     */
    my.save_to_PSD = function (file_path, document) {
        if (document === undefined) {
            var document = app.activeDocument;
        }
        psdSaveOption = new PhotoshopSaveOptions();
        psdSaveOption.embedColorProfile = true;
        document.saveAs(new File(file_path), psdSaveOption, true, Extension.LOWERCASE);
    }

    /**
     * Function to save the active document TIFF
     * @function save_to_TIFF
     * @memberOf PS.Document
     * @param {string} file_path the new document path
     * @param {Photoshop Document} [document] the document to save
     */
    my.save_to_TIFF = function (file_path, document) {
        if (document === undefined) {
            var document = app.activeDocument;
        }
        tiffSaveOption = new TiffSaveOptions();
        tiffSaveOption.embedColorProfile = true;
        document.saveAs(new File(file_path), tiffSaveOption, true, Extension.LOWERCASE);
    }

    /**
     * Function to save a document as JPG for WEB
     * Every documents are converted to s'RGB.
     * The color profile is by default embedded
     * @param {string} file_path the document path
     * @param {number} quality the quality of the JPG between 0-100
     * @param {boolean} [is_color_profile_embedded] false to not include ICC profile, by default true
     * @param {Photoshop Document} [document] the document to save, by default the activeDocument is used
     */
    my.save_for_web_JPG= function (file_path, quality, is_color_profile_embedded, document) {
        if (quality < 0 || quality > 100) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The argument quality has do be from 0-100',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }
        if (is_color_profile_embedded === undefined) {
            var is_color_profile_embedded = true;
        }
        if (document === undefined) {
            var document = app.activeDocument;
        }
        // we have to convert the file in s'RGB before because other color mode than RGB do not embedded the ICC profile
        if (document.mode !== DocumentMode.RGB ) {
            document.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC);
        }

        var save_for_web_options = new ExportOptionsSaveForWeb();
        save_for_web_options.format = SaveDocumentType.JPEG;
        save_for_web_options.includeProfile = is_color_profile_embedded;
        save_for_web_options.interlaced = 0;
        save_for_web_options.optimized = true;
        save_for_web_options.quality = quality;
        document.exportDocument(new File(file_path), ExportType.SAVEFORWEB, save_for_web_options);
    }


    /**
     * Function to close the active photoshop document
     * @function close
     * @memberOf PS.Document
     * @param {SaveOptions} save_options SAVECHANGES, DONOTSAVECHANGES, PROMPTTOSAVECHANGES
     * @param {Photoshop Document} [document] the document to save
     */
    my.close = function (save_options, document) {
        if (document === undefined) {
            var document = app.activeDocument;
        }
        if (save_options !== SaveOptions.SAVECHANGES
            && save_options !== SaveOptions.DONOTSAVECHANGES
            && save_options !== SaveOptions.PROMPTTOSAVECHANGES) {
            throw {
                name: 'InvalidArgumentError',
                message: 'you must enter a valid value for the param save_option [SAVECHANGES, DONOTSAVECHANGES, PROMPTTOSAVECHANGES]',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }
        document.close(save_options);
    }

    /**
     * Function to get the resolution of the active Photoshop document
     * @function get_resolution
     * @memberOf PS.Document
     * @param {Photoshop Document} [document] the document to save
     * @returns {Number} the resolution of the document
     */
    my.get_resolution = function (document) {
        if (document === undefined) {
            var document = app.activeDocument;
        }
        var resolution = document.resolution;
        return resolution;
    }

    /**
     * Function to create a new photoshop document
     * @function create
     * @memberOf PS.Application
     * @param {Number} width
     * @param {Number} height
     * @param {Number} resolution
     * @param {String} name
     * @param {NewDocumentMode} mode
     */
    my.create = function (width, height, resolution, name, mode) {
        var doc = app.documents.add(width, height, resolution, name, mode);
    }

    /**
     * Function to open a file with Photoshop
     * @function open
     * @memberOf PS.Application
     * @param {String} file_path the file_path of the file
     */
    my.open = function (file_path) {
        var img_file = new File(file_path);
        var ps_doc = app.open(img_file);
        return ps_doc;
    }

    return my;
})(PS.Document || {});