(function ($) {
  $.fn.cloneEmber = function () {
    var clone = $(this).clone();

    // remove content bindings
    clone.find('script[id^=metamorph]').remove();

    // remove attr bindings
    clone.find('*').andSelf().each(function () {
      var $this = $(this);
      $.each($this[0].attributes, function (index, attr) {
        if (attr.name.indexOf('data-bindattr') === -1) { return; }
        return $this.removeAttr(attr.name);
      });
    });

    // remove ember IDs
    clone.find('[id^=ember]').andSelf().removeAttr('id');

    // remove ember-view class
    clone.find('[class~=ember-view]').andSelf().removeClass('ember-view');

    return clone;
  };
})(jQuery);
