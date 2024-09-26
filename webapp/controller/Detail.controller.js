sap.ui.define(
    [
        "com/xtendhr/demo/controller/BaseController",
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Detail", {
        onInit: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("ProductsDetail").attachPatternMatched(this._onRouteMatched, this);
            console.log("init");
        },
        _onRouteMatched: function(oEvent){
            var objId = oEvent.getParameter("arguments").objectId;
            var oView = this.getView();
            oView.bindElement({
                path: "/Products(" + objId + ")",
                model: "odata"
            });
        }

      });
    }
  );
  