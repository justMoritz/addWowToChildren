  /**
   * Adds wow to the (direct) children of a given selector.
   * Default is slideInUp, but can be overriden by passing in the jQuery call
   */
  var _addWowToChildren = function($input, classname){
    classname = classname || 'slideInUp';
    var incrementer = 0;
    $('> *',$input).each(function(){
      $(this).addClass('wow').addClass(classname).attr('data-wow-delay', incrementer*100+'ms');
      incrementer++;
    });
  };
  jQuery.fn.addWowToChildren = function(classname) {
    _addWowToChildren(this, classname);
    return this;
  };
