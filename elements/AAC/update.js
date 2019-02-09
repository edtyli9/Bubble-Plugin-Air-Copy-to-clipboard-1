function(instance, properties, context) {

  var div;
  div = instance.data.div;
  var classid = instance.data.id;
  if (properties.use_id) {
      $('.' + classid).attr('data-clipboard-action', properties.action_type);
      $('.' + classid).attr('data-clipboard-target', '#' + properties.target_id);
  } else {
      $('.' + classid).attr('data-clipboard-text', properties.source);
  }
  
  var content = (properties.action_type == 'copy') ? 'Copied!' : 'Cut!';
  
  $(document).ready(function(){
    var tooltips = $('.' + classid).qtip({
      content: {
          text: content
      },
      show: {
          event: 'click'
      },
      hide: {
          event: 'mouseleave'
      },
      style: {
          classes: 'qtip-tipsy'
      },
      position: {
           my: 'top center',
           at : 'bottom center'
	 }
  });


  var clipboard = new ClipboardJS('.' + classid);
  
    
  })
  
}