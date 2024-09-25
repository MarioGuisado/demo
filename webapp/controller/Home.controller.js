sap.ui.define(
    [   
        "com/xtendhr/demo/controller/BaseController",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, MessageToast, JSONModel) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Detail", {
            onInit: function() {
                var oModel = new JSONModel();
                oModel.loadData("/localdata/employees.json");
                this.getView().setModel(oModel, "Information");
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteHome").attachPatternMatched(this._onRouteMatched, this);
            },
            _onRouteMatched:function(){

            },
            onNavBack: function(){
                this.getRouter().navTo("RouteHome", {}, true);
            },

            onView: function(oEvent){
                var source = oEvent.getSource();
                var index = source.getBindingContext("odata").getProperty("ProductID");
                this.getRouter().navTo("Detail", {
                    objectId: index
                });
            },
            onEdit: function(oEvent){
                var source = oEvent.getSource();
                var index = source.getBindingContext("odata").getProperty("ProductID");
                this.getRouter().navTo("Edit", {
                    objectId: index
                });
            },
            onCreate: function(oEvent){
                var source = oEvent.getSource();
            }
            
        });
    }
  );
  