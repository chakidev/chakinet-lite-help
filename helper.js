$(function() {
    $('#toc').jstree({
      'core' : {
        'data' : {
          'url' : 'toc.html',
          'data' : function (node) { return { 'id' : node.id }; }
        }
      }
    })
    .on("click", "a", function() {

    document.location.href = this;
    })
    .bind("loaded.jstree", function(event, data) {
        $(this).jstree("open_all");
    });
});
