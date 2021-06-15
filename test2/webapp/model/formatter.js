sap.ui.define([], function () {
  "use strict";

  return {
    price: function (iPrice) {
      var oResourceBundle = this.getView().getModel("i18n").getResourceBundle(),
        sResult = "";

      if (iPrice < 500) {
        sResult = oResourceBundle.getText("formatterPriceLow");
      }
      else if (iPrice < 1000) {
        sResult = oResourceBundle.getText("formatterPriceMedium");
      }
      else {
        sResult = oResourceBundle.getText("formatterPriceHigh");
      }

      return sResult;
    }
  };
});
