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
 * AdvantEDGE GIS Engine REST API
 * This API allows to control geo-spatial behavior and simulation. <p>**Micro-service**<br>[meep-gis-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-gis-engine) <p>**Type & Usage**<br>Platform runtime interface to control geo-spatial behavior and simulation <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    define(['ApiClient', 'model/AutomationState', 'model/AutomationStateList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AutomationState'), require('../model/AutomationStateList'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeGisEngineRestApi) {
      root.AdvantEdgeGisEngineRestApi = {};
    }
    root.AdvantEdgeGisEngineRestApi.AutomationApi = factory(root.AdvantEdgeGisEngineRestApi.ApiClient, root.AdvantEdgeGisEngineRestApi.AutomationState, root.AdvantEdgeGisEngineRestApi.AutomationStateList);
  }
}(this, function(ApiClient, AutomationState, AutomationStateList) {
  'use strict';

  /**
   * Automation service.
   * @module api/AutomationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AutomationApi. 
   * @alias module:api/AutomationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAutomationState operation.
     * @callback module:api/AutomationApi~getAutomationStateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AutomationStateList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get automation state
     * Get automation state for all automation types
     * @param {module:api/AutomationApi~getAutomationStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AutomationStateList}
     */
    this.getAutomationState = function(callback) {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AutomationStateList;

      return this.apiClient.callApi(
        '/automation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAutomationStateByName operation.
     * @callback module:api/AutomationApi~getAutomationStateByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AutomationState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get automation state
     * Get automation state for the given automation type
     * @param {module:model/String} type Automation type.<br> Automation loop evaluates enabled automation types once every second.<br> <p>Supported Types: <li>MOVEMENT - Advances UEs along configured paths using previous position & velocity as inputs. <li>MOBILITY - Sends Mobility events to Sanbox Controller when UE changes POA. <li>POAS-IN-RANGE - Sends POAS-IN-RANGE events to Sanbox Controller when list of POAs in range changes. <li>NETWORK-CHARACTERISTICS-UPDATE - Sends network characteristics update events to Sanbox Controller when throughput values change.
     * @param {module:api/AutomationApi~getAutomationStateByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AutomationState}
     */
    this.getAutomationStateByName = function(type, callback) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getAutomationStateByName");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AutomationState;

      return this.apiClient.callApi(
        '/automation/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setAutomationStateByName operation.
     * @callback module:api/AutomationApi~setAutomationStateByNameCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set automation state
     * Set automation state for the given automation type \\
     * @param {module:model/String} type Automation type.<br> Automation loop evaluates enabled automation types once every second.<br> <p>Supported Types: <li>MOBILITY - Sends Mobility events to Sanbox Controller when UE changes POA. <li>MOVEMENT - Advances UEs along configured paths using previous position & velocity as inputs. <li>POAS-IN-RANGE - Sends POAS-IN-RANGE events to Sanbox Controller when list of POAs in range changes. <li>NETWORK-CHARACTERISTICS-UPDATE - Sends network characteristics update events to Sanbox Controller when throughput values change.
     * @param {Boolean} run Automation state (e.g. true=running, false=stopped)
     * @param {module:api/AutomationApi~setAutomationStateByNameCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setAutomationStateByName = function(type, run, callback) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling setAutomationStateByName");
      }

      // verify the required parameter 'run' is set
      if (run === undefined || run === null) {
        throw new Error("Missing the required parameter 'run' when calling setAutomationStateByName");
      }


      var pathParams = {
        'type': type
      };
      var queryParams = {
        'run': run,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/automation/{type}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
