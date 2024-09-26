sap.ui.define(
    [
        "com/xtendhr/demo/controller/BaseController",
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Edit", {
        onInit: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("ProductsEdit").attachPatternMatched(this._onRouteMatched, this);
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
  