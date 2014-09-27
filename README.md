#extendscript-library.org

This library is under active development.

For more information go to our website:
www.extendscript-library.org

##Architecture:
###packages
1. lib
  * common (modules with functionality that could be use in other apps)
  * indesign (modules for indesign including the common packages)
  * photoshop (modules for photoshop including the common packages)

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
Use jsdoc-toolkit to generate the documentation

```
cd your_extendscript-library.org_directory
./node_modules/.bin/jsdoc --recurse ./lib/*
```


##Tests
Use grunt to run the unit tests.


###Run the tests
```
cd your_extendscript-library.org_directory/tests
grunt --verbose
```

###Write tests


##IDE
If you don't like to use the ExtendScript Toolkit to write your scripts, you can use the excellent WebStorm IDE.
If you will participe in this project you can write to me an email to receive the free open-source licence.

