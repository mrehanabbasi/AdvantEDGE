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
 * MEEP Demo App API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
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
    define(['ApiClient', 'model/TimeStamp', 'model/UserEventType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimeStamp'), require('./UserEventType'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepDemoAppApi) {
      root.MeepDemoAppApi = {};
    }
    root.MeepDemoAppApi.TrackingNotification = factory(root.MeepDemoAppApi.ApiClient, root.MeepDemoAppApi.TimeStamp, root.MeepDemoAppApi.UserEventType);
  }
}(this, function(ApiClient, TimeStamp, UserEventType) {
  'use strict';

  /**
   * The TrackingNotification model module.
   * @module model/TrackingNotification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TrackingNotification</code>.
   * Zonal or User tracking notification - callback generated toward an ME app with a zonal or user tracking subscription
   * @alias module:model/TrackingNotification
   * @class
   * @param callbackData {String} CallBackData if passed by the application during the associated Subscription (Zone or User Tracking) operation
   */
  var exports = function(callbackData) {
    this.callbackData = callbackData;
  };

  /**
   * Constructs a <code>TrackingNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackingNotification} obj Optional instance to populate.
   * @return {module:model/TrackingNotification} The populated <code>TrackingNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('callbackData'))
        obj.callbackData = ApiClient.convertToType(data['callbackData'], 'String');
      if (data.hasOwnProperty('zoneId'))
        obj.zoneId = ApiClient.convertToType(data['zoneId'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ApiClient.convertToType(data['address'], 'String');
      if (data.hasOwnProperty('interestRealm'))
        obj.interestRealm = ApiClient.convertToType(data['interestRealm'], 'String');
      if (data.hasOwnProperty('userEventType'))
        obj.userEventType = UserEventType.constructFromObject(data['userEventType']);
      if (data.hasOwnProperty('currentAccessPointId'))
        obj.currentAccessPointId = ApiClient.convertToType(data['currentAccessPointId'], 'String');
      if (data.hasOwnProperty('previousAccessPointId'))
        obj.previousAccessPointId = ApiClient.convertToType(data['previousAccessPointId'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = TimeStamp.constructFromObject(data['timestamp']);
    }
    return obj;
  }

  /**
   * CallBackData if passed by the application during the associated Subscription (Zone or User Tracking) operation
   * @member {String} callbackData
   */
  exports.prototype.callbackData = undefined;

  /**
   * Unique Identifier of a Location Zone
   * @member {String} zoneId
   */
  exports.prototype.zoneId = undefined;

  /**
   * Address of the user or device based on the connected access point - address = acr:<UE IP address>
   * @member {String} address
   */
  exports.prototype.address = undefined;

  /**
   * Details about the access point, geographical position, industry, etc.
   * @member {String} interestRealm
   */
  exports.prototype.interestRealm = undefined;

  /**
   * @member {module:model/UserEventType} userEventType
   */
  exports.prototype.userEventType = undefined;

  /**
   * Unique identifier of a point of access
   * @member {String} currentAccessPointId
   */
  exports.prototype.currentAccessPointId = undefined;

  /**
   * Unique identifier of a point of access
   * @member {String} previousAccessPointId
   */
  exports.prototype.previousAccessPointId = undefined;

  /**
   * @member {module:model/TimeStamp} timestamp
   */
  exports.prototype.timestamp = undefined;

  return exports;

}));
