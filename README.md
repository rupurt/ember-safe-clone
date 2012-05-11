Ember Safe Clone: A jQuery plugin to clone ember views
======================================================

EmberSafeClone is a plugin that allows the dom strucuture of an ember view to be safely cloned.
It works by removing all traces of ember id's and metamorph script tags in the view node and
it's subtree.

This plugin is a javascript port of the [coffeescript solution](http://codebrief.com/2012/03/eight-ember-dot-js-gotchas-with-workarounds/) posted by Gordon Hempton

Usage
-----
First load jQuery and the plugin
```
<script src="jquery.min.js" type="text/javascript"></script>
<script src="jquery.ember-clone.js" type="text/javascript"></script>
```

Now when you need to clone your view
```
var view = Ember.View.create();
var clone = view.$().cloneEmber();
```

Author
------
[Alex Kwiatkowski](https://github.com/rupurt) ([@rupurt](https://twitter.com/#!/rupurt))

License
-------
[MIT License](http://www.opensource.org/licenses/mit-license.php)
