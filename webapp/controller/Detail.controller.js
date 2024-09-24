sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Detail", {
            onInit: function() {
            },
            onView: function(oEvent){
                var source = oEvent.getSource();
            }
        });
    }
  );
  