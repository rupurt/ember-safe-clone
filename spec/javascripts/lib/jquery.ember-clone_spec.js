describe("$.fn.cloneEmber", function() {
  var $elm, $clonedElm;

  describe("metamorph", function() {
    beforeEach(function() {
      var $nestedElm, metaScript, nestedMetaScript, script;

      metaScript = document.createElement('script');
      nestedMetaScript = document.createElement('script');
      script = document.createElement('script');
      $nestedElm = $('<div>');
      $elm = $('<div>');

      metaScript.id = 'metamorph-123';
      nestedMetaScript.id = 'metamorph-nested';
      script.id = 'not-metamorph';
      $elm.append($nestedElm);
      $elm.get(0).appendChild(metaScript);
      $elm.get(0).appendChild(script);
      $nestedElm.get(0).appendChild(nestedMetaScript);

      $clonedElm = $elm.cloneEmber();
    });

    it("removes metamorph script tags", function() {
      var $scripts = $clonedElm.find("script");

      expect($scripts.length).toBe(1);
      expect($scripts.attr('id')).toBe('not-metamorph');
    });
  });

  describe("attribute bindings", function() {
    beforeEach(function() {
      var $nestedElm;

      $elm = $('<div>');
      $nestedElm = $('<div>');

      $elm.attr('data-bindattr', 'foo');
      $nestedElm.attr('data-bindattr', 'bar');
      $elm.append($nestedElm);

      $clonedElm = $elm.cloneEmber();
    });

    it("removes the data-bindattr from elements", function() {
      var $divs = $clonedElm.find('div').andSelf();

      expect($divs.length).toBe(2);
      expect($divs.eq(0).attr('data-bindattr')).toBeUndefined();
      expect($divs.eq(1).attr('data-bindattr')).toBeUndefined();
    });
  });

  describe("ember ids", function() {
    beforeEach(function() {
      var $nestedElm, $nestedEmberElm;

      $elm = $('<div>');
      $nestedEmberElm = $('<div>');
      $nestedElm = $('<div>');

      $elm.attr('id', 'ember-foo');
      $nestedEmberElm.attr('id', 'ember-nested');
      $nestedElm.attr('id', 'end-ember');
      $elm.append($nestedEmberElm);
      $elm.append($nestedElm);

      $clonedElm = $elm.cloneEmber();
    });

    it("removes the id from the element if it starts with ember", function() {
      var $divs = $clonedElm.find('div').andSelf();

      expect($divs.length).toBe(3);
      expect($divs.eq(0).attr('id')).toBeUndefined();
      expect($divs.eq(1).attr('id')).toEqual('end-ember');
      expect($divs.eq(2).attr('id')).toBeUndefined();
    });
  });

  describe("ember classes", function() {
    beforeEach(function() {
      var $nestedElm, $nestedEmberElm;

      $elm = $('<div>');
      $nestedEmberElm = $('<div>');
      $nestedElm = $('<div>');

      $elm.addClass('ember-view');
      $nestedEmberElm.addClass('ember-view');
      $nestedElm.addClass('end-ember-view');
      $elm.append($nestedEmberElm);
      $elm.append($nestedElm);

      $clonedElm = $elm.cloneEmber();
    });

    it("removes the ember-view class from the element", function() {
      var $divs = $clonedElm.find('div').andSelf();

      expect($divs.length).toBe(3);
      expect($divs.eq(0).hasClass('ember-view')).toBe(false);
      expect($divs.eq(1).hasClass('end-ember-view')).toBe(true);
      expect($divs.eq(2).hasClass('ember-view')).toBe(false);
    });
  });
});
