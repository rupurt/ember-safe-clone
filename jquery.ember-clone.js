(function ($) {
  $.fn.cloneEmber = function () {
    var clone = $(this).clone();

    // remove content bindings
    clone.find('script[id^=metamorph]').remove();

    // remove attr bindings
    clone.find('*').each(function () {
      var $this = $(this);
      $.each($this[0].attributes, function (index, attr) {
        if (attr.name.indexOf('data-bindattr') === -1) { return; }
        return $this.removeAttr(attr.name);
      }
    });

    // remove ember IDs
    if (clone.attr('id') && clone.attr('id').indexOf('ember') != -1) {
      clone.removeAttr('id');
    }
    clone.find('[id^=ember]').removeAttr('id');
    return clone;
  };
})(jQuery);
