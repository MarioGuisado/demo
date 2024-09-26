sap.ui.define(
    [   
        "com/xtendhr/demo/controller/BaseController",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.People", {
            onInit: function() {
                var oModel = new JSONModel(sap.ui.require.toUrl("com/xtendhr/demo/localdata/employees.json"));
                this.getView().setModel(oModel);
            },

            formatDate: function(value) {
                if (value) {
                    var date = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
                    return date.toLocaleDateString();
                }
                return value;
            },

            formatImage: function(value) {
                var sTrimmed;
                if (typeof value === "string") {
                    sTrimmed = value.substring(104);
                    return "data:image/bmp;base64," + sTrimmed;
                }
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
  