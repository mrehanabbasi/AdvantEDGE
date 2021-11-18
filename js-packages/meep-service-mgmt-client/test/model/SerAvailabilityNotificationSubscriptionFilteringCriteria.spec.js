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
 * AdvantEDGE MEC Service Management API
 * MEC Service Management Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC011 Application Enablement API](https://www.etsi.org/deliver/etsi_gs/MEC/001_099/011/02.01.01_60/gs_MEC011v020101p.pdf) <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-app-enablement](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-app-enablement/server/service-mgmt) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about services in the network <p>**Note**<br>AdvantEDGE supports all of Service Management API endpoints (see below).
 *
 * OpenAPI spec version: 2.1.1
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.22
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
    factory(root.expect, root.AdvantEdgeMecServiceManagementApi);
  }
}(this, function(expect, AdvantEdgeMecServiceManagementApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SerAvailabilityNotificationSubscriptionFilteringCriteria', function() {
      beforeEach(function() {
        instance = new AdvantEdgeMecServiceManagementApi.SerAvailabilityNotificationSubscriptionFilteringCriteria();
      });

      it('should create an instance of SerAvailabilityNotificationSubscriptionFilteringCriteria', function() {
        // TODO: update the code to test SerAvailabilityNotificationSubscriptionFilteringCriteria
        expect(instance).to.be.a(AdvantEdgeMecServiceManagementApi.SerAvailabilityNotificationSubscriptionFilteringCriteria);
      });

      it('should have the property serInstanceIds (base name: "serInstanceIds")', function() {
        // TODO: update the code to test the property serInstanceIds
        expect(instance).to.have.property('serInstanceIds');
        // expect(instance.serInstanceIds).to.be(expectedValueLiteral);
      });

      it('should have the property serNames (base name: "serNames")', function() {
        // TODO: update the code to test the property serNames
        expect(instance).to.have.property('serNames');
        // expect(instance.serNames).to.be(expectedValueLiteral);
      });

      it('should have the property serCategories (base name: "serCategories")', function() {
        // TODO: update the code to test the property serCategories
        expect(instance).to.have.property('serCategories');
        // expect(instance.serCategories).to.be(expectedValueLiteral);
      });

      it('should have the property states (base name: "states")', function() {
        // TODO: update the code to test the property states
        expect(instance).to.have.property('states');
        // expect(instance.states).to.be(expectedValueLiteral);
      });

      it('should have the property isLocal (base name: "isLocal")', function() {
        // TODO: update the code to test the property isLocal
        expect(instance).to.have.property('isLocal');
        // expect(instance.isLocal).to.be(expectedValueLiteral);
      });

    });
  });

}));
