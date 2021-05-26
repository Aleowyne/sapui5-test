sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("AppTest.controller.Vendor", {
    onInit: function () {
      // Récupération du routeur
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("vendor").attachMatched(this._onVendorMatched, this);
    },

    _onVendorMatched: function (oEvent) {
      var sSelectedArguments = oEvent.getParameter("arguments");
      var sSelectedVendor = JSON.parse(sSelectedArguments.selectedVendor);

      var oDataVendor = {
        "vendor": sSelectedVendor
      };

      var oModel = new JSONModel();
      oModel.setData(oDataVendor);

      this.getView().setModel(oModel, "vendorModel");
    },

    onNavPress: function () {
      // Retour à la page précédente
      window.history.go(-1);
    }
  });
});