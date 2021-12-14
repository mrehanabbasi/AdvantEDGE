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
 * MEC Demo 3 API
 * Demo 3 is an edge application that can be used with AdvantEDGE or ETSI MEC Sandbox to demonstrate MEC011 and MEC021 usage
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApplicationInstanceDiscoveredServices', 'model/ApplicationInstanceOfferedService', 'model/ApplicationInstanceSubscriptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApplicationInstanceDiscoveredServices'), require('./ApplicationInstanceOfferedService'), require('./ApplicationInstanceSubscriptions'));
  } else {
    // Browser globals (root is window)
    if (!root.MecDemo3Api) {
      root.MecDemo3Api = {};
    }
    root.MecDemo3Api.ApplicationInstance = factory(root.MecDemo3Api.ApiClient, root.MecDemo3Api.ApplicationInstanceDiscoveredServices, root.MecDemo3Api.ApplicationInstanceOfferedService, root.MecDemo3Api.ApplicationInstanceSubscriptions);
  }
}(this, function(ApiClient, ApplicationInstanceDiscoveredServices, ApplicationInstanceOfferedService, ApplicationInstanceSubscriptions) {
  'use strict';

  /**
   * The ApplicationInstance model module.
   * @module model/ApplicationInstance
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ApplicationInstance</code>.
   * This type represent information to display on frontend app instance text field
   * @alias module:model/ApplicationInstance
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApplicationInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationInstance} obj Optional instance to populate.
   * @return {module:model/ApplicationInstance} The populated <code>ApplicationInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('config'))
        obj.config = ApiClient.convertToType(data['config'], 'String');
      if (data.hasOwnProperty('ip'))
        obj.ip = ApiClient.convertToType(data['ip'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('mecReady'))
        obj.mecReady = ApiClient.convertToType(data['mecReady'], 'Boolean');
      if (data.hasOwnProperty('mecTerminated'))
        obj.mecTerminated = ApiClient.convertToType(data['mecTerminated'], 'Boolean');
      if (data.hasOwnProperty('amsResource'))
        obj.amsResource = ApiClient.convertToType(data['amsResource'], 'Boolean');
      if (data.hasOwnProperty('subscriptions'))
        obj.subscriptions = ApplicationInstanceSubscriptions.constructFromObject(data['subscriptions']);
      if (data.hasOwnProperty('offeredService'))
        obj.offeredService = ApplicationInstanceOfferedService.constructFromObject(data['offeredService']);
      if (data.hasOwnProperty('discoveredServices'))
        obj.discoveredServices = ApiClient.convertToType(data['discoveredServices'], [ApplicationInstanceDiscoveredServices]);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {String} config
   */
  exports.prototype.config = undefined;

  /**
   * @member {String} ip
   */
  exports.prototype.ip = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Confirm if app instance is ready
   * @member {Boolean} mecReady
   */
  exports.prototype.mecReady = undefined;

  /**
   * Confirm the application level termination of application instance
   * @member {Boolean} mecTerminated
   */
  exports.prototype.mecTerminated = undefined;

  /**
   * Confirm if app instance has an ams service resource
   * @member {Boolean} amsResource
   */
  exports.prototype.amsResource = undefined;

  /**
   * @member {module:model/ApplicationInstanceSubscriptions} subscriptions
   */
  exports.prototype.subscriptions = undefined;

  /**
   * @member {module:model/ApplicationInstanceOfferedService} offeredService
   */
  exports.prototype.offeredService = undefined;

  /**
   * @member {Array.<module:model/ApplicationInstanceDiscoveredServices>} discoveredServices
   */
  exports.prototype.discoveredServices = undefined;

  return exports;

}));
