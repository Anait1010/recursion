// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsContainingClass = [];

  var findElementsContainingClass = function(element) {
    // If the element contains the class className
    if (element.classList && element.classList.contains(className)) {
      // Add it to our result
      elementsContainingClass.push(element);
    }

    // If the element contains child nodes
    if (element.childNodes) {
      // Loop through each child node
      _.each(element.childNodes, function(item) {
        // Recursively call findElementsContainingClass until we've looped through all child nodes
        findElementsContainingClass(item);
      });
    }
  }

  // Start our recursive function
  findElementsContainingClass(document.body);

  return elementsContainingClass;
}
