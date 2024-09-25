sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.BaseController", {
        onInit: function() {
        },
        getRouter: function(){
            return this.getOwnerComponent().getRouter();
            
        },
        onNavBack: function(){
            this.getRouter().navTo("RouteHome");
        }
      });
    }
  );
  