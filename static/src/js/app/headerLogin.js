define(["jquery","paths","layer"],function($,path,layer){
     var dialog;
     layer.config({
          path: path.static + "js/lib/layer/"
     });
     $("#loginBt").click(function () {
          dialog = layer.open({
               type: 1,
               title: null,
               closeBtn:null,
               content: $('#dialogLogin'),
               area: ["443px", "453px"],
               btn: null,
               success:function (index) {
                    $("#closeBt").click(function () {
                         layer.close(dialog);

                    })
               }
          })
     });












   return  "head";
});
