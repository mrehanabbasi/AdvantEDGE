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
    instance = new MeepControllerRestApi.PodStatus();
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

  describe('PodStatus', function() {
    it('should create an instance of PodStatus', function() {
      // uncomment below and update the code to test PodStatus
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be.a(MeepControllerRestApi.PodStatus);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property namespace (base name: "namespace")', function() {
      // uncomment below and update the code to test the property namespace
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property meepApp (base name: "meepApp")', function() {
      // uncomment below and update the code to test the property meepApp
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property meepOrigin (base name: "meepOrigin")', function() {
      // uncomment below and update the code to test the property meepOrigin
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property meepScenario (base name: "meepScenario")', function() {
      // uncomment below and update the code to test the property meepScenario
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property phase (base name: "phase")', function() {
      // uncomment below and update the code to test the property phase
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podInitialized (base name: "podInitialized")', function() {
      // uncomment below and update the code to test the property podInitialized
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podReady (base name: "podReady")', function() {
      // uncomment below and update the code to test the property podReady
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podScheduled (base name: "podScheduled")', function() {
      // uncomment below and update the code to test the property podScheduled
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podUnschedulable (base name: "podUnschedulable")', function() {
      // uncomment below and update the code to test the property podUnschedulable
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podConditionError (base name: "podConditionError")', function() {
      // uncomment below and update the code to test the property podConditionError
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property containerStatusesMsg (base name: "containerStatusesMsg")', function() {
      // uncomment below and update the code to test the property containerStatusesMsg
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property nbOkContainers (base name: "nbOkContainers")', function() {
      // uncomment below and update the code to test the property nbOkContainers
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property nbTotalContainers (base name: "nbTotalContainers")', function() {
      // uncomment below and update the code to test the property nbTotalContainers
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property nbPodRestart (base name: "nbPodRestart")', function() {
      // uncomment below and update the code to test the property nbPodRestart
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property logicalState (base name: "logicalState")', function() {
      // uncomment below and update the code to test the property logicalState
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new MeepControllerRestApi.PodStatus();
      //expect(instance).to.be();
    });

  });

}));
