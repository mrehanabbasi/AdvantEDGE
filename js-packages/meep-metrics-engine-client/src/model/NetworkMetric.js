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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeMetricsServiceRestApi) {
      root.AdvantEdgeMetricsServiceRestApi = {};
    }
    root.AdvantEdgeMetricsServiceRestApi.NetworkMetric = factory(root.AdvantEdgeMetricsServiceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworkMetric model module.
   * @module model/NetworkMetric
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NetworkMetric</code>.
   * Value of a single network metric
   * @alias module:model/NetworkMetric
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworkMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkMetric} obj Optional instance to populate.
   * @return {module:model/NetworkMetric} The populated <code>NetworkMetric</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'String');
      if (data.hasOwnProperty('lat'))
        obj.lat = ApiClient.convertToType(data['lat'], 'Number');
      if (data.hasOwnProperty('ul'))
        obj.ul = ApiClient.convertToType(data['ul'], 'Number');
      if (data.hasOwnProperty('dl'))
        obj.dl = ApiClient.convertToType(data['dl'], 'Number');
      if (data.hasOwnProperty('ulos'))
        obj.ulos = ApiClient.convertToType(data['ulos'], 'Number');
      if (data.hasOwnProperty('dlos'))
        obj.dlos = ApiClient.convertToType(data['dlos'], 'Number');
    }
    return obj;
  }

  /**
   * Time of network metrics
   * @member {String} time
   */
  exports.prototype.time = undefined;

  /**
   * Round-trip latency (ms)
   * @member {Number} lat
   */
  exports.prototype.lat = undefined;

  /**
   * Uplink throughput from src to dest (Mbps)
   * @member {Number} ul
   */
  exports.prototype.ul = undefined;

  /**
   * Downlink throughput from dest to src (Mbps)
   * @member {Number} dl
   */
  exports.prototype.dl = undefined;

  /**
   * Uplink packet loss from src to dest (%)
   * @member {Number} ulos
   */
  exports.prototype.ulos = undefined;

  /**
   * Uplink packet loss from dest to src (%)
   * @member {Number} dlos
   */
  exports.prototype.dlos = undefined;

  return exports;

}));
