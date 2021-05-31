sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "AppTest/model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, formatter, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("AppTest.controller.ListVendors", {
    formatter: formatter,
    onInit: function () {
    },

    onPressVendorJson: function (oEvent) {
      // Récupération de la ligne sélectionnée
      var sPath = oEvent.getSource().getBindingContext("vendorsJSON").getPath();
      var sSelectedPath = JSON.stringify(oEvent.getSource().getBindingContext("vendorsJSON").getProperty(sPath));
      var oRouter = this.getOwnerComponent().getRouter();

      // Navigation vers la page "Vendor"
      oRouter.navTo("vendor", {
        "selectedVendor": sSelectedPath
      });

    },

    onPressVendorOData: function (oEvent) {
    },

    onFilterVendor: function (oEvent) {
      var aFilter = [];
      var sQuery = oEvent.getParameter("query");
      var oList = this.getView().byId("priceVendorList");
      var oBinding = oList.getBinding("items");

      if (sQuery) {
        aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
      }

      oBinding.filter(aFilter);
    }
  });
});