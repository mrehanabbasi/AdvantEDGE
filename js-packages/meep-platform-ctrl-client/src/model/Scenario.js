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
 * AdvantEDGE Platform Controller REST API
 * This API is the main Platform Controller API for scenario configuration & sandbox management <p>**Micro-service**<br>[meep-pfm-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-platform-ctrl) <p>**Type & Usage**<br>Platform main interface used by controller software to configure scenarios and manage sandboxes in the AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    define(['ApiClient', 'model/Deployment', 'model/ScenarioConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Deployment'), require('./ScenarioConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgePlatformControllerRestApi) {
      root.AdvantEdgePlatformControllerRestApi = {};
    }
    root.AdvantEdgePlatformControllerRestApi.Scenario = factory(root.AdvantEdgePlatformControllerRestApi.ApiClient, root.AdvantEdgePlatformControllerRestApi.Deployment, root.AdvantEdgePlatformControllerRestApi.ScenarioConfig);
  }
}(this, function(ApiClient, Deployment, ScenarioConfig) {
  'use strict';

  /**
   * The Scenario model module.
   * @module model/Scenario
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Scenario</code>.
   * Scenario object
   * @alias module:model/Scenario
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Scenario</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Scenario} obj Optional instance to populate.
   * @return {module:model/Scenario} The populated <code>Scenario</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('config'))
        obj.config = ScenarioConfig.constructFromObject(data['config']);
      if (data.hasOwnProperty('deployment'))
        obj.deployment = Deployment.constructFromObject(data['deployment']);
    }
    return obj;
  }

  /**
   * Scenario version
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * Unique scenario ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Unique scenario name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * User description of the scenario.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/ScenarioConfig} config
   */
  exports.prototype.config = undefined;

  /**
   * @member {module:model/Deployment} deployment
   */
  exports.prototype.deployment = undefined;

  return exports;

}));
