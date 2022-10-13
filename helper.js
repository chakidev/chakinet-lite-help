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
        // 現在のドキュメントパスに一致するノードを選択状態にする
        const path = new URL(document.location).pathname.replace('/', '');
        const nid = document.querySelector(`[href="${path}"]`).parentElement.id;
        $(this).jstree('select_node', nid);
    });
});
