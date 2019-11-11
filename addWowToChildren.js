  /**
   * Adds wow to the (direct) children of a given selector.
   * Default is slideInUp, but can be overriden by passing in the jQuery call
   */
  var _addWowToChildren = function($input, classname){
    classname = classname || 'slideInUp';
    $input.each(function(){
      var incrementer = 0;
      $('> *',$(this)).each(function(){
        $(this).addClass('wow').addClass(classname).attr('data-wow-delay', incrementer*100+'ms');
        incrementer++;
      });
    });
  };
  jQuery.fn.addWowToChildren = function(classname) {
    _addWowToChildren(this, classname);
    return this;
  };
