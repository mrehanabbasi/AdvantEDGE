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
 * AdvantEDGE Monitoring Engine REST API
 * This API provides AdvantEDGE microservice & scenario deployment status information collected in the Monitoring Engine. <p>**Micro-service**<br>[meep-mon-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-mon-engine) <p>**Type & Usage**<br>Platform interface to retrieve AdvantEDGE microservice & scenario deployment status information <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PodStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PodStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeMonitoringEngineRestApi) {
      root.AdvantEdgeMonitoringEngineRestApi = {};
    }
    root.AdvantEdgeMonitoringEngineRestApi.PodsStatus = factory(root.AdvantEdgeMonitoringEngineRestApi.ApiClient, root.AdvantEdgeMonitoringEngineRestApi.PodStatus);
  }
}(this, function(ApiClient, PodStatus) {
  'use strict';

  /**
   * The PodsStatus model module.
   * @module model/PodsStatus
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PodsStatus</code>.
   * List of all pods status
   * @alias module:model/PodsStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PodsStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PodsStatus} obj Optional instance to populate.
   * @return {module:model/PodsStatus} The populated <code>PodsStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('podStatus'))
        obj.podStatus = ApiClient.convertToType(data['podStatus'], [PodStatus]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PodStatus>} podStatus
   */
  exports.prototype.podStatus = undefined;

  return exports;

}));
