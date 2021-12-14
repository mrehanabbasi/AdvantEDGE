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
    define(['ApiClient', 'model/AssociateId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssociateId'));
  } else {
    // Browser globals (root is window)
    if (!root.MecDemo3Api) {
      root.MecDemo3Api = {};
    }
    root.MecDemo3Api.ApplicationInstanceAmsLinkListSubscription = factory(root.MecDemo3Api.ApiClient, root.MecDemo3Api.AssociateId);
  }
}(this, function(ApiClient, AssociateId) {
  'use strict';

  /**
   * The ApplicationInstanceAmsLinkListSubscription model module.
   * @module model/ApplicationInstanceAmsLinkListSubscription
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ApplicationInstanceAmsLinkListSubscription</code>.
   * This type represents the information that the MEC platform notifies the subscribed application instance about app mobility support
   * @alias module:model/ApplicationInstanceAmsLinkListSubscription
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApplicationInstanceAmsLinkListSubscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationInstanceAmsLinkListSubscription} obj Optional instance to populate.
   * @return {module:model/ApplicationInstanceAmsLinkListSubscription} The populated <code>ApplicationInstanceAmsLinkListSubscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subId'))
        obj.subId = ApiClient.convertToType(data['subId'], 'String');
      if (data.hasOwnProperty('associateId'))
        obj.associateId = ApiClient.convertToType(data['associateId'], [AssociateId]);
    }
    return obj;
  }

  /**
   * @member {String} subId
   */
  exports.prototype.subId = undefined;

  /**
   * 0 to N identifiers to associate the information for specific UE(s) and flow(s).
   * @member {Array.<module:model/AssociateId>} associateId
   */
  exports.prototype.associateId = undefined;

  return exports;

}));
