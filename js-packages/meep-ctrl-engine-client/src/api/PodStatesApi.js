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
    define(['ApiClient', 'model/PodsStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PodsStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepControllerRestApi) {
      root.MeepControllerRestApi = {};
    }
    root.MeepControllerRestApi.PodStatesApi = factory(root.MeepControllerRestApi.ApiClient, root.MeepControllerRestApi.PodsStatus);
  }
}(this, function(ApiClient, PodsStatus) {
  'use strict';

  /**
   * PodStates service.
   * @module api/PodStatesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PodStatesApi. 
   * @alias module:api/PodStatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getStates operation.
     * @callback module:api/PodStatesApi~getStatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PodsStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This operation returns status information for pods
     * Returns pod status info for a list of pods
     * @param {Object} opts Optional parameters
     * @param {String} opts._long Enables detailed stats if true
     * @param {String} opts.type Pod type
     * @param {module:api/PodStatesApi~getStatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PodsStatus}
     */
    this.getStates = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'long': opts['_long'],
        'type': opts['type'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PodsStatus;

      return this.apiClient.callApi(
        '/states', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
