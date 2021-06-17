sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("test3.controller.ListVendors", {

    /**
     * Affichage des détails d'un fournisseur provenant d'une source OData
     * @param {sap.ui.base.Event} oEvent 
     */
    onPressVendorOData: function (oEvent) {
      var oSelectedItem = oEvent.getSource();
      var oContext = oSelectedItem.getBindingContext("vendorsOData");
      var sPath = oContext.getPath();
      var oVendorDetailPanel = this.byId("vendorDetailsPanel");

      oVendorDetailPanel.bindElement({ path: sPath, model: "vendorsOData" });
      this.byId("vendorDetailsPanel").setVisible(true);

    }
  });
});