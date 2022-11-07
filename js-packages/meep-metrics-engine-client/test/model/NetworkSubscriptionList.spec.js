/*
 * Copyright (c) 2022  The AdvantEDGE Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE Metrics Service REST API
 * Metrics Service provides metrics about the active scenario <p>**Micro-service**<br>[meep-metrics-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-metrics-engine) <p>**Type & Usage**<br>Platform Service used by control/monitoring software and possibly by edge applications that require metrics <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    factory(root.expect, root.AdvantEdgeMetricsServiceRestApi);
  }
}(this, function(expect, AdvantEdgeMetricsServiceRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('NetworkSubscriptionList', function() {
      beforeEach(function() {
        instance = new AdvantEdgeMetricsServiceRestApi.NetworkSubscriptionList();
      });

      it('should create an instance of NetworkSubscriptionList', function() {
        // TODO: update the code to test NetworkSubscriptionList
        expect(instance).to.be.a(AdvantEdgeMetricsServiceRestApi.NetworkSubscriptionList);
      });

      it('should have the property networkSubscription (base name: "networkSubscription")', function() {
        // TODO: update the code to test the property networkSubscription
        expect(instance).to.have.property('networkSubscription');
        // expect(instance.networkSubscription).to.be(expectedValueLiteral);
      });

      it('should have the property resourceURL (base name: "resourceURL")', function() {
        // TODO: update the code to test the property resourceURL
        expect(instance).to.have.property('resourceURL');
        // expect(instance.resourceURL).to.be(expectedValueLiteral);
      });

    });
  });

}));
