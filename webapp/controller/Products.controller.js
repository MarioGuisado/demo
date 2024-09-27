sap.ui.define(
    [   
        "com/xtendhr/demo/controller/BaseController",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    function(BaseController, Filter, FilterOperator) {
      "use strict";
  
      return BaseController.extend("com.xtendhr.demo.controller.Products", {
            
            onInit: function() {
                this.oFilters = {
                    ProductName: null,
                    ProductID: null,
                    UnitsInStock: null
                };
            
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
            },
            onFilterProductName: function (oEvent) {
                var sQuery = oEvent.getParameter("query");
                
                if (sQuery) {
                    this.oFilters.ProductName = new Filter("ProductName", FilterOperator.Contains, sQuery);
                } else {
                    this.oFilters.ProductName = null; 
                }
                
                this._applyCombinedFilters();
            },
            
            onFilterProductID: function (oEvent) {
                var sQuery = oEvent.getParameter("query");
                
                if (sQuery) {
                    this.oFilters.ProductID = new Filter("ProductID", FilterOperator.EQ, sQuery);
                } else {
                    this.oFilters.ProductID = null; 
                }
                
                this._applyCombinedFilters();
            },
            
            onFilterUnitsInStock: function (oEvent) {
                var sQuery = oEvent.getParameter("query");
                
                if (sQuery) {
                    this.oFilters.UnitsInStock = new Filter("UnitsInStock", FilterOperator.EQ, sQuery);
                } else {
                    this.oFilters.UnitsInStock = null; 
                }
                
                this._applyCombinedFilters();
            },
            _applyCombinedFilters: function () {
                var aFilter = [];
            
                if (this.oFilters.ProductName) {
                    aFilter.push(this.oFilters.ProductName);
                }
                if (this.oFilters.ProductID) {
                    aFilter.push(this.oFilters.ProductID);
                }
                if (this.oFilters.UnitsInStock) {
                    aFilter.push(this.oFilters.UnitsInStock);
                }
            
                var oTable = this.byId("idProductsTable");
                var oBinding = oTable.getBinding("items");
            
                oBinding.filter(aFilter, "Application");
            }
            
            
            
            
            
            
            
            
        });
    }
  );
  