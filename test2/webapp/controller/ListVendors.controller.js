sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "test2/model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, formatter, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("test2.controller.ListVendors", {
    formatter: formatter,
    onInit: function () {
    },

    /**
     * Filtre sur le nom d'un fournisseur
     * @param {sap.ui.base.Event} oEvent 
     */
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