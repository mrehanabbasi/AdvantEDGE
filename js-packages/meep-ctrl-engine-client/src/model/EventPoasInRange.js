/**
 * MEEP Controller REST API
 * MEEP Controller REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    if (!root.MeepControllerRestApi) {
      root.MeepControllerRestApi = {};
    }
    root.MeepControllerRestApi.EventPoasInRange = factory(root.MeepControllerRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EventPoasInRange model module.
   * @module model/EventPoasInRange
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EventPoasInRange</code>.
   * POAs In Range Event object
   * @alias module:model/EventPoasInRange
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EventPoasInRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventPoasInRange} obj Optional instance to populate.
   * @return {module:model/EventPoasInRange} The populated <code>EventPoasInRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ue')) {
        obj['ue'] = ApiClient.convertToType(data['ue'], 'String');
      }
      if (data.hasOwnProperty('poasInRange')) {
        obj['poasInRange'] = ApiClient.convertToType(data['poasInRange'], ['String']);
      }
    }
    return obj;
  }

  /**
   * UE identifier
   * @member {String} ue
   */
  exports.prototype['ue'] = undefined;
  /**
   * @member {Array.<String>} poasInRange
   */
  exports.prototype['poasInRange'] = undefined;



  return exports;
}));


