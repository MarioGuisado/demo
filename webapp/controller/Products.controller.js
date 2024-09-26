sap.ui.define(
    [   
        "com/xtendhr/demo/controller/BaseController",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, MessageToast, JSONModel) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Products", {
            onInit: function() {
            },
            onView: function(oEvent){
                var source = oEvent.getSource();
                var index = source.getBindingContext("odata").getProperty("ProductID");
                this.getRouter().navTo("ProductsDetail", {
                    objectId: index
                });
            },
            onEdit: function(oEvent){
                var source = oEvent.getSource();
                var index = source.getBindingContext("odata").getProperty("ProductID");
                this.getRouter().navTo("ProductsEdit", {
                    objectId: index
                });
            },
            onCreate: function(){
                this.getRouter().navTo("ProductsNew", {}, true);
            }
            
        });
    }
  );
  