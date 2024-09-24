sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
],
function (Controller, MessageToast, MessageBox, JSONModel) {
    "use strict";

    return Controller.extend("com.xtendhr.demo.controller.Home", {
        onInit: function () {

            //crear JSON MODEL
            var oModel = new JSONModel();
            oModel.loadData("/localdata/data.json")
            this.getView().setModel(oModel, "Information");
        },
        onClick:function(oEvent){
            MessageToast.show("Click")
            MessageBox.show("Click on Message ")
        },
        onView: function(oEvent){
            var source = oEvent.getSource();
        }
    });
});
