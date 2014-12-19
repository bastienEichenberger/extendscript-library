##Architecture:
###Namespace
  * H (modules with functionality that could be use in other apps)
  * IN (modules for indesign including the common packages)
  * PS (modules for photoshop including the common packages)

##Use the library
###Include the library
```
//if you use photoshop lib -> add the target photoshop
//you can use the @include syntax to use extendscript in an other IDE without error

//@target "photoshop"
//@include "../../../../../../lib/photoshop/photoshop-lib.jsx"

// For common modules use the namespace H
// For photoshop modules use the namespace PS
// For indesign modules use the namespace IN

// init the logger
H.Log.init(log_folder, 0);

// create a new document
PS.Application.create_doc(100, 100, 72, 'document_to_test', NewDocumentMode.RGB);

```

#Contribute


##Install node js
  * install node js (http://nodejs.org/download/)
  * install node modules:
  ```
  cd your_extendscript-library.org_directory
  sudo npm install

  cd your_extendscript-library.org_directory/tests
  sudo npm install

  ```


##Generate the documentation
Use jsdoc3 to generate the documentation

```
cd your_extendscript-library.org_directory
./node_modules/.bin/jsdoc lib/* -c conf.json readme.md
```


##Tests
Use grunt to run the unit tests. Make sure that you have the Creative Suite CC installed.
Otherwise you can change the version to test in the grunt.js file:
```
extendscript: {
            test_document: {
                options: {
                    app: 'Adobe Photoshop CC 2014', // Adobe Photoshop CS6
                    args: [path.resolve('test/results/tests.xml'), path.resolve('test/results'), path.resolve('test/log')]
                },
                src: 'test/fixtures/photoshop/document/test_document.jsx'
            }
        }
```

###Run the tests
```
cd your_extendscript-library.org_directory/tests
grunt --verbose
```

###Write tests
In the directory test/fixtures create a jsx file like the example fixtures/photoshop/document/test_document.jsx.
The tests work by this way:
  * run all extendscript tests -> put the result in the results folder <br>
    (if it's a file store the file in the results folder, if it's a value write it in the tests.xml file)

  * check the results with node-unit <br>
    (you can write tests in the test_photoshop-lib.js file)

##IDE
If you don't like to use the ExtendScript Toolkit to write your scripts, you can use the excellent WebStorm IDE.
If you will participate in this project you can write to me an email to receive the free open-source licence.

