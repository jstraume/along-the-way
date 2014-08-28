// Backbone initialize models/views files
var $ = require('jquery');
var MapModel = require('./models/map-model');
var MapView = require('./views/map-view');
var FormView = require('./views/form-view');

var mapModel = new MapModel();
var formView = new FormView({model: mapModel});
var mapView = new MapView({model: mapModel});

$('#form-bar').html(formView.$el);
$('#map-canvas').html(mapView.$el);