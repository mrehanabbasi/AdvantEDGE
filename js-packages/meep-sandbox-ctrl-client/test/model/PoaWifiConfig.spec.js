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
    describe('PoaWifiConfig', function() {
      beforeEach(function() {
        instance = new AdvantEdgeSandboxControllerRestApi.PoaWifiConfig();
      });

      it('should create an instance of PoaWifiConfig', function() {
        // TODO: update the code to test PoaWifiConfig
        expect(instance).to.be.a(AdvantEdgeSandboxControllerRestApi.PoaWifiConfig);
      });

      it('should have the property macId (base name: "macId")', function() {
        // TODO: update the code to test the property macId
        expect(instance).to.have.property('macId');
        // expect(instance.macId).to.be(expectedValueLiteral);
      });

    });
  });

}));
