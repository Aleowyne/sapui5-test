sap.ui.define([
  "sap/ui/core/UIComponent",
  "test4/model/models"
], function (UIComponent, models) {
  "use strict";

  return UIComponent.extend("test4.Component", {
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