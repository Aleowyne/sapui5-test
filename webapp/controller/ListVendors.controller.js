sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "AppTest/model/formatter"
], function (Controller, formatter) {
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
    }
  });
});