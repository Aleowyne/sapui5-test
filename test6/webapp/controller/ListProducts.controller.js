sap.ui.define([
  "test6/controller/BaseController",
  "sap/ui/model/Filter",
  "sap/ui/model/json/JSONModel",
], function (BaseController, Filter, JSONModel) {
  "use strict";

  return BaseController.extend("test6.controller.ListProducts", {

    _mFilters: {
      cheap: [new Filter("Price", "LT", 500)],
      moderate: [new Filter("Price", "BT", 500, 1000)],
      expensive: [new Filter("Price", "GT", 1000)]
    },

    /* =========================================================== */
    /* Lifecycle methods                                           */
    /* =========================================================== */

    /**
     * Called when the worklist controller is instantiated.
     * @public
     */
    onInit: function () {
      this._oTable = this.byId("table");

      var oViewModel = new JSONModel({
        cheap: 0,
        moderate: 0,
        expensive: 0
      });

      this.setModel(oViewModel, "listProductsView");
    },

    /* =========================================================== */
    /* Event handlers                                              */
    /* =========================================================== */

    /**
     * Event handler when a filter tab gets pressed
     * @param {sap.ui.base.Event} oEvent the filter tab event
     * @public
     */
    onQuickFilter: function (oEvent) {
      var sKey = oEvent.getParameter("key"),
        oFilter = this._mFilters[sKey],
        oBinding = this._oTable.getBinding("items");

      if (oFilter) {
        oBinding.filter(oFilter);
      }
      else {
        oBinding.filter([]);
      }
    },

    /**
     * Triggered by the table's 'updateFinished' event: after new table
     * data is available, this handler method updates the table counter.
     * This should only happen if the update was successful, which is
     * why this handler is attached to 'updateFinished' and not to the
     * table's list binding's 'dataReceived' method.
     * @param {sap.ui.base.Event} oEvent the update finished event
     * @public
     */
    onUpdateFinished: function (oEvent) {
      var oTable = oEvent.getSource(),
        oModel = this.getModel("vendorsOData"),
        oViewModel = this.getModel("listProductsView"),
        iTotalItems = oEvent.getParameter("total");

      // Mettre à jour les données si la table n'est pas vide
      if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {

        jQuery.each(this._mFilters, function (sKey, oFilter) {
          oModel.read("/ProductSet/$count", {
            filters: oFilter,
            success: function (oData) {
              var sPath = "/" + sKey;
              oViewModel.setProperty(sPath, oData);
            }
          });
        });
      }
    }
  });
});