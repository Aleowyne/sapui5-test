sap.ui.define([
  "sap/ui/core/UIComponent",
  "test3/model/models"
], function (UIComponent, models) {
  "use strict";

  return UIComponent.extend("test3.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      this.setModel(models.createDeviceModel(), "device");

      // Initialisation du routeur
      this.getRouter().initialize();
    },
  });
});