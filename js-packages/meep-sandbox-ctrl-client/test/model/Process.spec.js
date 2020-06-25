/*
 * Copyright (c) 2020  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE Sandbox Controller REST API
 * This API is the main Sandbox Controller API for scenario deployment & event injection <p>**Micro-service**<br>[meep-sandbox-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-sandbox-ctrl) <p>**Type & Usage**<br>Platform runtime interface to manage active scenarios and inject events in AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * OpenAPI spec version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
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
    factory(root.expect, root.AdvantEdgeSandboxControllerRestApi);
  }
}(this, function(expect, AdvantEdgeSandboxControllerRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Process', function() {
      beforeEach(function() {
        instance = new AdvantEdgeSandboxControllerRestApi.Process();
      });

      it('should create an instance of Process', function() {
        // TODO: update the code to test Process
        expect(instance).to.be.a(AdvantEdgeSandboxControllerRestApi.Process);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property isExternal (base name: "isExternal")', function() {
        // TODO: update the code to test the property isExternal
        expect(instance).to.have.property('isExternal');
        // expect(instance.isExternal).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property environment (base name: "environment")', function() {
        // TODO: update the code to test the property environment
        expect(instance).to.have.property('environment');
        // expect(instance.environment).to.be(expectedValueLiteral);
      });

      it('should have the property commandArguments (base name: "commandArguments")', function() {
        // TODO: update the code to test the property commandArguments
        expect(instance).to.have.property('commandArguments');
        // expect(instance.commandArguments).to.be(expectedValueLiteral);
      });

      it('should have the property commandExe (base name: "commandExe")', function() {
        // TODO: update the code to test the property commandExe
        expect(instance).to.have.property('commandExe');
        // expect(instance.commandExe).to.be(expectedValueLiteral);
      });

      it('should have the property serviceConfig (base name: "serviceConfig")', function() {
        // TODO: update the code to test the property serviceConfig
        expect(instance).to.have.property('serviceConfig');
        // expect(instance.serviceConfig).to.be(expectedValueLiteral);
      });

      it('should have the property gpuConfig (base name: "gpuConfig")', function() {
        // TODO: update the code to test the property gpuConfig
        expect(instance).to.have.property('gpuConfig');
        // expect(instance.gpuConfig).to.be(expectedValueLiteral);
      });

      it('should have the property externalConfig (base name: "externalConfig")', function() {
        // TODO: update the code to test the property externalConfig
        expect(instance).to.have.property('externalConfig');
        // expect(instance.externalConfig).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property userChartLocation (base name: "userChartLocation")', function() {
        // TODO: update the code to test the property userChartLocation
        expect(instance).to.have.property('userChartLocation');
        // expect(instance.userChartLocation).to.be(expectedValueLiteral);
      });

      it('should have the property userChartAlternateValues (base name: "userChartAlternateValues")', function() {
        // TODO: update the code to test the property userChartAlternateValues
        expect(instance).to.have.property('userChartAlternateValues');
        // expect(instance.userChartAlternateValues).to.be(expectedValueLiteral);
      });

      it('should have the property userChartGroup (base name: "userChartGroup")', function() {
        // TODO: update the code to test the property userChartGroup
        expect(instance).to.have.property('userChartGroup');
        // expect(instance.userChartGroup).to.be(expectedValueLiteral);
      });

      it('should have the property meta (base name: "meta")', function() {
        // TODO: update the code to test the property meta
        expect(instance).to.have.property('meta');
        // expect(instance.meta).to.be(expectedValueLiteral);
      });

      it('should have the property userMeta (base name: "userMeta")', function() {
        // TODO: update the code to test the property userMeta
        expect(instance).to.have.property('userMeta');
        // expect(instance.userMeta).to.be(expectedValueLiteral);
      });

      it('should have the property netChar (base name: "netChar")', function() {
        // TODO: update the code to test the property netChar
        expect(instance).to.have.property('netChar');
        // expect(instance.netChar).to.be(expectedValueLiteral);
      });

      it('should have the property appLatency (base name: "appLatency")', function() {
        // TODO: update the code to test the property appLatency
        expect(instance).to.have.property('appLatency');
        // expect(instance.appLatency).to.be(expectedValueLiteral);
      });

      it('should have the property appLatencyVariation (base name: "appLatencyVariation")', function() {
        // TODO: update the code to test the property appLatencyVariation
        expect(instance).to.have.property('appLatencyVariation');
        // expect(instance.appLatencyVariation).to.be(expectedValueLiteral);
      });

      it('should have the property appThroughput (base name: "appThroughput")', function() {
        // TODO: update the code to test the property appThroughput
        expect(instance).to.have.property('appThroughput');
        // expect(instance.appThroughput).to.be(expectedValueLiteral);
      });

      it('should have the property appPacketLoss (base name: "appPacketLoss")', function() {
        // TODO: update the code to test the property appPacketLoss
        expect(instance).to.have.property('appPacketLoss');
        // expect(instance.appPacketLoss).to.be(expectedValueLiteral);
      });

      it('should have the property placementId (base name: "placementId")', function() {
        // TODO: update the code to test the property placementId
        expect(instance).to.have.property('placementId');
        // expect(instance.placementId).to.be(expectedValueLiteral);
      });

    });
  });

}));
