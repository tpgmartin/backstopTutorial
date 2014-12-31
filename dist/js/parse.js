var Elements = document.getElementsByTagName('*');
var selectorNames = {};
for (var elem = 0, max = Elements.length; elem < max; elem++) {
  var selector = Elements[elem];
  // Check for classes
  if (selector.className) {
    var classes = selector.className.split(" ");
    for (var cn = 0; cn < classes.length; cn++){
      var cName = classes[cn];
      if (!selectorNames[cName]) {
        selectorNames[cName] = true;
      }
    }
  }   
  // Check for ids
  if (selector.id) {
    if (!selectorNames[selector.id]) {
      selectorNames[selector.id] = true;
    }
  }
  // Check for tag names
  if (selector.tagName) {
    var tagName = selector.tagName.toLowerCase();
    if (!selectorNames[tagName]) {
      selectorNames[tagName] = true;
    }
  }
}
var selectorList = [];
for (var name in selectorNames) selectorList.push(name);
