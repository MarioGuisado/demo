sap.ui.define(
    [
        "com/xtendhr/demo/controller/BaseController",
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.New", {
        onInit: function() {
        },
        onAccept: function(){
          location.reload()
        }
      });
    }
  );
  