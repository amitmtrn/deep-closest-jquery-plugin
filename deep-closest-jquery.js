/*globals jQuery */

(function ($) {

  'use strict';

  /*
   * allow you to get the nearest item (any relative)
   *
   * @method deepClosest
   *
   * @param {string} selector the selector that we want to find
   * @param {integer} depth the farest parent we want to search in
   *
   * @return {jQuery Object} Returns the closest object within the depth or empty jQuery object
   */

  $.fn.deepClosest = function (selector, depth) {
    var currentParent,
      currentItem,
      currentChildren;

    currentItem = this;
    while (depth !== 0) {
      currentParent = currentItem.parent();
      if (currentParent.hasClass(selector)) {
        return currentParent;
      }

      currentChildren = currentParent.find(selector);
      if (currentChildren.length) {
        return currentChildren.first();
      }

      depth = depth - 1;
      currentItem = currentParent;
    }
    return $();
  };

}(jQuery));
