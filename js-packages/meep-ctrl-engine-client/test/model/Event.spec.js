/**
 * MEEP Controller REST API
 * MEEP Controller REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MeepControllerRestApi);
  }
}(this, function(expect, MeepControllerRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MeepControllerRestApi.Event();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Event', function() {
    it('should create an instance of Event', function() {
      // uncomment below and update the code to test Event
      //var instane = new MeepControllerRestApi.Event();
      //expect(instance).to.be.a(MeepControllerRestApi.Event);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MeepControllerRestApi.Event();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new MeepControllerRestApi.Event();
      //expect(instance).to.be();
    });

    it('should have the property eventNetworkCharacteristicsUpdate (base name: "eventNetworkCharacteristicsUpdate")', function() {
      // uncomment below and update the code to test the property eventNetworkCharacteristicsUpdate
      //var instane = new MeepControllerRestApi.Event();
      //expect(instance).to.be();
    });

    it('should have the property eventUeMobility (base name: "eventUeMobility")', function() {
      // uncomment below and update the code to test the property eventUeMobility
      //var instane = new MeepControllerRestApi.Event();
      //expect(instance).to.be();
    });

    it('should have the property eventPoasInRange (base name: "eventPoasInRange")', function() {
      // uncomment below and update the code to test the property eventPoasInRange
      //var instane = new MeepControllerRestApi.Event();
      //expect(instance).to.be();
    });

    it('should have the property eventOther (base name: "eventOther")', function() {
      // uncomment below and update the code to test the property eventOther
      //var instane = new MeepControllerRestApi.Event();
      //expect(instance).to.be();
    });

  });

}));
