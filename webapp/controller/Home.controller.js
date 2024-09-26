sap.ui.define(
    [   
        "com/xtendhr/demo/controller/BaseController",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, MessageToast, JSONModel) {
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
  