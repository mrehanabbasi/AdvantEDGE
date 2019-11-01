/**
 * MEEP Controller REST API
 * Copyright (c) 2019  InterDigital Communications, Inc Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at      http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. 
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
    define(['ApiClient', 'model/Event', 'model/NodeServiceMaps', 'model/Scenario'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'), require('../model/NodeServiceMaps'), require('../model/Scenario'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepControllerRestApi) {
      root.MeepControllerRestApi = {};
    }
    root.MeepControllerRestApi.ScenarioExecutionApi = factory(root.MeepControllerRestApi.ApiClient, root.MeepControllerRestApi.Event, root.MeepControllerRestApi.NodeServiceMaps, root.MeepControllerRestApi.Scenario);
  }
}(this, function(ApiClient, Event, NodeServiceMaps, Scenario) {
  'use strict';

  /**
   * ScenarioExecution service.
   * @module api/ScenarioExecutionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ScenarioExecutionApi. 
   * @alias module:api/ScenarioExecutionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activateScenario operation.
     * @callback module:api/ScenarioExecutionApi~activateScenarioCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate (deploy) scenario
     * 
     * @param {String} name Scenario name
     * @param {module:api/ScenarioExecutionApi~activateScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.activateScenario = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling activateScenario");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/active/{name}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getActiveNodeServiceMaps operation.
     * @callback module:api/ScenarioExecutionApi~getActiveNodeServiceMapsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NodeServiceMaps>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of active external node service mappings
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.node Unique node identifier
     * @param {String} opts.type Exposed service type (ingress or egress)
     * @param {String} opts.service Exposed service name
     * @param {module:api/ScenarioExecutionApi~getActiveNodeServiceMapsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NodeServiceMaps>}
     */
    this.getActiveNodeServiceMaps = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'node': opts['node'],
        'type': opts['type'],
        'service': opts['service'],
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
      var returnType = [NodeServiceMaps];

      return this.apiClient.callApi(
        '/active/serviceMaps', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getActiveScenario operation.
     * @callback module:api/ScenarioExecutionApi~getActiveScenarioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scenario} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve active (deployed) scenario
     * 
     * @param {module:api/ScenarioExecutionApi~getActiveScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scenario}
     */
    this.getActiveScenario = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = Scenario;

      return this.apiClient.callApi(
        '/active', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendEvent operation.
     * @callback module:api/ScenarioExecutionApi~sendEventCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send event to active (deployed) scenario
     * 
     * @param {String} type Event type
     * @param {module:model/Event} event Event to send to active scenario
     * @param {module:api/ScenarioExecutionApi~sendEventCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendEvent = function(type, event, callback) {
      var postBody = event;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling sendEvent");
      }

      // verify the required parameter 'event' is set
      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling sendEvent");
      }


      var pathParams = {
        'type': type
      };
      var queryParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/events/{type}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the terminateScenario operation.
     * @callback module:api/ScenarioExecutionApi~terminateScenarioCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Terminate active (deployed) scenario
     * 
     * @param {module:api/ScenarioExecutionApi~terminateScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.terminateScenario = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/active', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
