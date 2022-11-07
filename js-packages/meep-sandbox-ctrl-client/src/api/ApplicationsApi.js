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
 * AdvantEDGE Sandbox Controller REST API
 * This API is the main Sandbox Controller API for scenario deployment & event injection <p>**Micro-service**<br>[meep-sandbox-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-sandbox-ctrl) <p>**Type & Usage**<br>Platform runtime interface to manage active scenarios and inject events in AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    define(['ApiClient', 'model/ApplicationInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApplicationInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeSandboxControllerRestApi) {
      root.AdvantEdgeSandboxControllerRestApi = {};
    }
    root.AdvantEdgeSandboxControllerRestApi.ApplicationsApi = factory(root.AdvantEdgeSandboxControllerRestApi.ApiClient, root.AdvantEdgeSandboxControllerRestApi.ApplicationInfo);
  }
}(this, function(ApiClient, ApplicationInfo) {
  'use strict';

  /**
   * Applications service.
   * @module api/ApplicationsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ApplicationsApi. 
   * @alias module:api/ApplicationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the applicationsAppInstanceIdDELETE operation.
     * @callback module:api/ApplicationsApi~applicationsAppInstanceIdDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes a mec application resource.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC application manager POST method.
     * @param {module:api/ApplicationsApi~applicationsAppInstanceIdDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.applicationsAppInstanceIdDELETE = function(appInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsAppInstanceIdDELETE");
      }


      var pathParams = {
        'appInstanceId': appInstanceId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsAppInstanceIdGET operation.
     * @callback module:api/ApplicationsApi~applicationsAppInstanceIdGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves information about a mec application resource.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC application manager POST method.
     * @param {module:api/ApplicationsApi~applicationsAppInstanceIdGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationInfo}
     */
    this.applicationsAppInstanceIdGET = function(appInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsAppInstanceIdGET");
      }


      var pathParams = {
        'appInstanceId': appInstanceId
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
      var returnType = ApplicationInfo;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsAppInstanceIdPUT operation.
     * @callback module:api/ApplicationsApi~applicationsAppInstanceIdPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method updates the information about a mec application resource.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC application manager POST method.
     * @param {module:model/ApplicationInfo} applicationInfo Application information
     * @param {module:api/ApplicationsApi~applicationsAppInstanceIdPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationInfo}
     */
    this.applicationsAppInstanceIdPUT = function(appInstanceId, applicationInfo, callback) {
      var postBody = applicationInfo;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsAppInstanceIdPUT");
      }

      // verify the required parameter 'applicationInfo' is set
      if (applicationInfo === undefined || applicationInfo === null) {
        throw new Error("Missing the required parameter 'applicationInfo' when calling applicationsAppInstanceIdPUT");
      }


      var pathParams = {
        'appInstanceId': appInstanceId
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
      var returnType = ApplicationInfo;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsGET operation.
     * @callback module:api/ApplicationsApi~applicationsGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApplicationInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves information about a list of mec application resources.
     * @param {Object} opts Optional parameters
     * @param {String} opts.app Application name
     * @param {module:model/String} opts.type Application type
     * @param {String} opts.nodeName Node name
     * @param {module:api/ApplicationsApi~applicationsGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApplicationInfo>}
     */
    this.applicationsGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'app': opts['app'],
        'type': opts['type'],
        'nodeName': opts['nodeName'],
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
      var returnType = [ApplicationInfo];

      return this.apiClient.callApi(
        '/applications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsPOST operation.
     * @callback module:api/ApplicationsApi~applicationsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method is used to create a mec application resource.
     * @param {module:model/ApplicationInfo} applicationInfo Application information
     * @param {module:api/ApplicationsApi~applicationsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationInfo}
     */
    this.applicationsPOST = function(applicationInfo, callback) {
      var postBody = applicationInfo;

      // verify the required parameter 'applicationInfo' is set
      if (applicationInfo === undefined || applicationInfo === null) {
        throw new Error("Missing the required parameter 'applicationInfo' when calling applicationsPOST");
      }


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
      var returnType = ApplicationInfo;

      return this.apiClient.callApi(
        '/applications', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
