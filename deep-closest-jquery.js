/*globals jQuery */

(function ($) {

  'use strict';

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
