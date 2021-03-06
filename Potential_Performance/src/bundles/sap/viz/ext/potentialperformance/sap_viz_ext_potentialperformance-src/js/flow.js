define("sap_viz_ext_potentialperformance-src/js/flow", ["sap_viz_ext_potentialperformance-src/js/module"], function(moduleFunc) {
	var flowRegisterFunc = function() {
		var flow = sap.viz.extapi.Flow.createFlow({
			id: "sap.viz.ext.potentialperformance",
			name: "Potential Performance",
			dataModel: "sap.viz.api.data.CrosstableDataset",
			type: "DIV"
		});

		var element = sap.viz.extapi.Flow.createElement({
			id: "sap.viz.ext.potentialperformance.PlotModule",
			name: "Potential Performance Module"
		});
		element.implement("sap.viz.elements.common.BaseGraphic", moduleFunc);

		/*Feeds Definition*/
		var ds1 = {
			"id": "sap.viz.ext.potentialperformance.PlotModule.DS1",
			"name": "Employee,Potential,Performance",
			"type": "Dimension",
			"min": 3, //minimum number of data container
			"max": 3, //maximum number of data container
			"aaIndex": 1
		};
		element.addFeed(ds1);

		var ms1 = {
			"id": "sap.viz.ext.potentialperformance.PlotModule.MS1",
			"name": "ID",
			"type": "Measure",
			"min": 1, //minimum number of measures
			"max": 1, //maximum number of measures
			"mgIndex": 1
		};
		element.addFeed(ms1);

		element.addProperty({
			name: "colorPalette",
			type: "StringArray",
			supportedValues: "",
			defaultValue: d3.scale.category20().range().concat(d3.scale.category20b().range()).concat(d3.scale.category20c().range())
		});

		flow.addElement({
			"element": element,
			"propertyCategory": "plotArea"
		});
		sap.viz.extapi.Flow.registerFlow(flow);
	};
	flowRegisterFunc.id = "sap.viz.ext.potentialperformance";
	return {
		id: flowRegisterFunc.id,
		init: flowRegisterFunc
	};
});