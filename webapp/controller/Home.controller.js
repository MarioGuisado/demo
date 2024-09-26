sap.ui.define(
    [   
        "com/xtendhr/demo/controller/BaseController",
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Home", {
            onInit: function() {
            },
            onProducts: function(){
                this.getRouter().navTo("Products", {}, true);
            },
            onPeople: function(){
                this.getRouter().navTo("People", {}, true);
            }
        });
    }
  );
  