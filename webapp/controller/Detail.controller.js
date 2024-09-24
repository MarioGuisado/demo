sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Detail", {
            onInit: function() {
            },
            onNavBack: function(){
                this.getRouter().navTo("RouteHome", {}, true);
            },

            getRouter: function(){
                return this.getOwnerComponent().getRouter();
            }
        });
    }
  );
  