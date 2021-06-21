// Démarrer le MockServer (Simulation d'un backend)
jQuery.sap.require("sap.ui.core.util.MockServer");
var oMockServer = new sap.ui.core.util.MockServer({ rootUri: "/destinations/demo/odata/SAMPLE/" });

oMockServer.simulate("localService/metadata.xml", { sMockdataBaseUrl: "mockdata", bGenerateMissingMockData: true });
oMockServer.start();
