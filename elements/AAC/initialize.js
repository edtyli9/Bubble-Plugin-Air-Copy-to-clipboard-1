function(instance, context) {
  var classid = "clip"+(Math.random() * Math.pow(2, 54)).toString(18);
  var div;
  div = $('<div class="'+classid+'" data-clipboard-action="copy" display="table-cell"></div>');
  div.css("width", "100%");
  div.css("height", "100%");
  div.css("cursor", "pointer");
  instance.canvas.append(div);
  //storing the div on the instance to use it in update
  instance.data.div = div;
  instance.data.id = classid;

}