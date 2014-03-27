/*
 * Parses an XML string. Throws an error if the XML is incorrect.
 * @constructor
   *
 * @param {String} text The text to parse.
 */
function XML(text) {
  /*
   * Controls whether XML comments should be parsed (false) or ignored (true).
   * @type {Boolean}
   */
  this.ignoreComments = undefined;
  
  /*
   * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
   * @type {Boolean}
   */
  this.ignoreProcessingInstructions = undefined;
  
  /*
   * Controls whether whitespace should be parsed (false) or ignored (true).
   * @type {Boolean}
   */
  this.ignoreWhitespace = undefined;
  
  /*
   * When true, XML is pretty-printed when converting to a string.
   * @type {Boolean}
   */
  this.prettyPrinting = undefined;
  
  /*
   * The number of spaces used to indent pretty-printed XML.
   * @type {Number}
   */
  this.prettyIndent = undefined;
  
  /*
   * Returns an object containing the current parsing and print settings for XML.
   * @returns {Object}
   */
  this.settings = function() {
    return new Object();
  }
  
  /*
   * undefined
   *
   * @param {Object} obj The object containing the settings to set.
   */
  this.setSettings = function(obj) {
  }
  
  /*
   * Returns an object containing the default parsing and print settings for XML.
   * @returns {Object}
   */
  this.defaultSettings = function() {
    return new Object();
  }
  
  /*
   * Adds a namespace declaration to the node. Returns the XML object itself.
   *
   * @param {Namespace} namespace The namespace to add.
   * @returns {XML}
   */
  this.addNamespace = function(namespace) {
    return new XML();
  }
  
  /*
   * Appends the given XML to this XML as a child. Returns the XML object itself.
   *
   * @param {XML} child The child XML to add.
   * @returns {XML}
   */
  this.appendChild = function(child) {
    return new XML();
  }
  
  /*
   * Returns a list containing all attribute elements matching the given name.
   *
   * @param {String} name The attribute name to look for.
   * @returns {XML}
   */
  this.attribute = function(name) {
    return new XML();
  }
  
  /*
   * Returns a list containing all attribute elements.
   * @returns {XML}
   */
  this.attributes = function() {
    return new XML();
  }
  
  /*
   * Returns a list containing all children of this XML matching the given element name.
   *
   * @param {String} name The name or the index of the child element.
   * @returns {XML}
   */
  this.child = function(name) {
    return new XML();
  }
  
  /*
   * Returns a number representing the ordinal position of this XML object within the context of its parent.
   * @returns {Number}
   */
  this.childIndex = function() {
    return new Number();
  }
  
  /*
   * Returns an XML object containing all the properties of this XML object in order.
   * @returns {XML}
   */
  this.children = function() {
    return new XML();
  }
  
  /*
   * Returns an XML object containing the properties of this XML object that represent XML comments.
   * @returns {XML}
   */
  this.comments = function() {
    return new XML();
  }
  
  /*
   * Checks if this XML object contains the given XML object.
   *
   * @param {XML} xml The XML to search for.
   * @returns {Boolean}
   */
  this.contains = function(xml) {
    return new Boolean();
  }
  
  /*
   * Creates a copy of this XML object.
   * @returns {XML}
   */
  this.copy = function() {
    return new XML();
  }
  
  /*
   * Returns all the XML-valued descendants of this XML object with the given name.
   *
   * @param {String} [name] The name of the descendant to find.
   * @returns {XML}
   */
  this.descendants = function(name) {
    return new XML();
  }
  
  /*
   * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
   *
   * @param {String} [name] The element name. If not supplied, gets all children that are XML elements.
   * @returns {XML}
   */
  this.elements = function(name) {
    return new XML();
  }
  
  /*
   * Reports whether this XML object contains complex content.
   * @returns {Boolean}
   */
  this.hasComplexContent = function() {
    return new Boolean();
  }
  
  /*
   * Reports whether this XML object contains simple content.
   * @returns {Boolean}
   */
  this.hasSimpleContent = function() {
    return new Boolean();
  }
  
  /*
   * undefined
   * @returns {Array}
   */
  this.inScopeNamespaces = function() {
    return new Array();
  }
  
  /*
   * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
   *
   * @param {XML} child1 The child to insert the other child after.
   * @param {XML} child2 The XML to insert.
   */
  this.insertChildAfter = function(child1, child2) {
  }
  
  /*
   * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
   *
   * @param {XML} child1 The child to search for.
   * @param {XML} child2 The XML to insert.
   */
  this.insertChildBefore = function(child1, child2) {
  }
  
  /*
   * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
   * @returns {Number}
   */
  this.length = function() {
    return new Number();
  }
  
  /*
   * Returns the local name of this XML object.
   * @returns {String}
   */
  this.localName = function() {
    return new String();
  }
  
  /*
   * Returns a QName object containing the URI and the local name of the element.
   * @returns {QName}
   */
  this.name = function() {
    return new QName();
  }
  
  /*
   * Returns a Namespace object containing the namespace URI of the current element.
   * @returns {Namespace}
   */
  this.namespace = function() {
    return new Namespace();
  }
  
  /*
   * Returns an array containing all namespace declarations of this XML object.
   * @returns {Array}
   */
  this.namespaceDeclarations = function() {
    return new Array();
  }
  
  /*
   * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
   * @returns {String}
   */
  this.nodeKind = function() {
    return new String();
  }
  
  /*
   * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
   * @returns {XML}
   */
  this.normalize = function() {
    return new XML();
  }
  
  /*
   * Returns the parent object of this XML object.
   * @returns {XML}
   */
  this.parent = function() {
    return new XML();
  }
  
  /*
   * Returns a list of preprocessing instructions.
   *
   * @param {String} [name] The name of the preprocessing instruction to return.
   * @returns {XML}
   */
  this.processingInstructions = function(name) {
    return new XML();
  }
  
  /*
   * Inserts a given child into this object before its existing XML properties, and returns this XML object.
   *
   * @param {XML} child The XML to insert.
   * @returns {XML}
   */
  this.prependChild = function(child) {
    return new XML();
  }
  
  /*
   * Removes the given namespace from this XML, and returns this XML.
   *
   * @param {Namespace} namespace The namespace to remove.
   * @returns {XML}
   */
  this.removeNamespace = function(namespace) {
    return new XML();
  }
  
  /*
   * Replaces the value of specified XML properties of this XML object returns this XML object.
   *
   * @param {String} name The property name.
   * @param {XML} value The XML with which to replace the value of the matching property.
   * @returns {XML}
   */
  this.replace = function(name, value) {
    return new XML();
  }
  
  /*
   * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
   *
   * @param {XML} value The new value, which can be a single XML object or an XML list.
   * @returns {XML}
   */
  this.setChildren = function(value) {
    return new XML();
  }
  
  /*
   * Replaces the local name of this XML object  with a string constructed from the given name
   *
   * @param {String} name The name to set.
   */
  this.setLocalName = function(name) {
  }
  
  /*
   * Replaces the name of this XML object with the given QName object.
   *
   * @param {QName} name The fully qualified name.
   */
  this.setName = function(name) {
  }
  
  /*
   * Sets the namespace for this XML element.
   *
   * @param {Namespace} namespace The namespace to set.
   */
  this.setNamespace = function(namespace) {
  }
  
  /*
   * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
   * @returns {XML}
   */
  this.text = function() {
    return new XML();
  }
  
  /*
   * Returns the string representation of this object.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
  /*
   * Returns an XML-encoded string representation of this XML object.
   * @returns {String}
   */
  this.toXMLString = function() {
    return new String();
  }
  
  /*
   * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
   *
   * @param {String} expr The XPath expression to use.
   * @returns {XML}
   */
  this.xpath = function(expr) {
    return new XML();
  }
  
}
