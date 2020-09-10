
var ue = UE.getEditor('editor');
var blog = {
    title: "",
    content: "",
    contentTxt: "",
    category: "",
    author: "",
    createdate: ""
};


function insertHtml() {
    var value = prompt('<input type="file">');
    ue.execCommand('insertHtml', value)
}

function getContent() {
    blog.content = ue.getContent();
    blog.title = $('.title').val();
    blog.createdate = new Date().toLocaleDateString();
    blog.contentTxt = ue.getContentTxt();
    var obj = $('.classify input');
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            blog.category = obj[i].value
        }
    }

    console.log(blog);
}
$(function () {
    $("#add").bind("click", function () {
        getContent();
        if ($('.title') != '' && ue.getContentTxt() != '') {
            $.ajax({
                type: "post",
                data: blog,
                url: "https://wd7869756315ozmdzd.wilddogio.com/posts.json",
                dataType: "json",
                contentType: 'application/json',
                success: (res) => {
                    console.log(res)
                    $.MsgBox.Alert("消息", "哈哈，您的博客文章已发布成功！！！");
                },
                error: (error) => {
                    console.log(error);
                }
            })
        } else {
            $.MsgBox.Alert("消息", "发布失败，请填写标题和文章呦！！！");

        }
    });
})

