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

##Samples
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

##Generate the documentation

##Tests

###Run the tests

###Write tests


##IDE
