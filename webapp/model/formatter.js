sap.ui.define([], function () {
  "use strict";

  return {
    delivery: function (iCapacity) {
      var oResourceBundle = this.getView().getModel("i18n").getResourceBundle(),
        sResult = "";

      if (iCapacity < 500) {
        sResult = oResourceBundle.getText("formatterCapacityLow");
      }
      else if (iCapacity < 1000) {
        sResult = oResourceBundle.getText("formatterCapacityMedium");
      }
      else {
        sResult = oResourceBundle.getText("formatterCapacityHigh");
      }

      return sResult;
    }
  };
});
