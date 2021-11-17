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
 * AdvantEDGE MEC Application Support API
 * MEC Application Support Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC011 Application Enablement API](https://www.etsi.org/deliver/etsi_gs/MEC/001_099/011/02.01.01_60/gs_MEC011v020101p.pdf) <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-app-enablement](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-app-enablement/server/app-support) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about applications in the network <p>**Note**<br>AdvantEDGE supports a selected subset of Application Support API endpoints (see below).
 *
 * OpenAPI spec version: 2.1.1
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.22
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AppReadyConfirmation', 'model/AppTerminationConfirmation', 'model/AppTerminationNotificationSubscription', 'model/CurrentTime', 'model/ProblemDetails', 'model/SubscriptionLinkList', 'model/TimingCaps'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AppReadyConfirmation'), require('../model/AppTerminationConfirmation'), require('../model/AppTerminationNotificationSubscription'), require('../model/CurrentTime'), require('../model/ProblemDetails'), require('../model/SubscriptionLinkList'), require('../model/TimingCaps'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeMecApplicationSupportApi) {
      root.AdvantEdgeMecApplicationSupportApi = {};
    }
    root.AdvantEdgeMecApplicationSupportApi.MecAppSupportApi = factory(root.AdvantEdgeMecApplicationSupportApi.ApiClient, root.AdvantEdgeMecApplicationSupportApi.AppReadyConfirmation, root.AdvantEdgeMecApplicationSupportApi.AppTerminationConfirmation, root.AdvantEdgeMecApplicationSupportApi.AppTerminationNotificationSubscription, root.AdvantEdgeMecApplicationSupportApi.CurrentTime, root.AdvantEdgeMecApplicationSupportApi.ProblemDetails, root.AdvantEdgeMecApplicationSupportApi.SubscriptionLinkList, root.AdvantEdgeMecApplicationSupportApi.TimingCaps);
  }
}(this, function(ApiClient, AppReadyConfirmation, AppTerminationConfirmation, AppTerminationNotificationSubscription, CurrentTime, ProblemDetails, SubscriptionLinkList, TimingCaps) {
  'use strict';

  /**
   * MecAppSupport service.
   * @module api/MecAppSupportApi
   * @version 2.1.1
   */

  /**
   * Constructs a new MecAppSupportApi. 
   * @alias module:api/MecAppSupportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the applicationsConfirmReadyPOST operation.
     * @callback module:api/MecAppSupportApi~applicationsConfirmReadyPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method may be used by the MEC application instance to notify the MEC platform that it is up and running. 
     * @param {module:model/AppReadyConfirmation} body 
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {module:api/MecAppSupportApi~applicationsConfirmReadyPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.applicationsConfirmReadyPOST = function(, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling applicationsConfirmReadyPOST");
      }

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsConfirmReadyPOST");
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
      var accepts = ['application/problem+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/confirm_ready', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsConfirmTerminationPOST operation.
     * @callback module:api/MecAppSupportApi~applicationsConfirmTerminationPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method is used to confirm the application level termination  of an application instance.
     * @param {module:model/AppTerminationConfirmation} body 
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {module:api/MecAppSupportApi~applicationsConfirmTerminationPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.applicationsConfirmTerminationPOST = function(, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling applicationsConfirmTerminationPOST");
      }

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsConfirmTerminationPOST");
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
      var accepts = ['application/problem+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/confirm_termination', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsSubscriptionDELETE operation.
     * @callback module:api/MecAppSupportApi~applicationsSubscriptionDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes a mecAppSuptApiSubscription. This method is typically used in \&quot;Unsubscribing from service availability event notifications\&quot; procedure.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {String} subscriptionId Represents a subscription to the notifications from the MEC platform.
     * @param {module:api/MecAppSupportApi~applicationsSubscriptionDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.applicationsSubscriptionDELETE = function(, callback) {
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsSubscriptionDELETE");
      }

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling applicationsSubscriptionDELETE");
      }


      var pathParams = {
        'appInstanceId': appInstanceId,
        'subscriptionId': subscriptionId
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
      var accepts = ['application/problem+json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/subscriptions/{subscriptionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsSubscriptionGET operation.
     * @callback module:api/MecAppSupportApi~applicationsSubscriptionGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppTerminationNotificationSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The GET method requests information about a subscription for this requestor. Upon success, the response contains entity body with the subscription for the requestor.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {String} subscriptionId Represents a subscription to the notifications from the MEC platform.
     * @param {module:api/MecAppSupportApi~applicationsSubscriptionGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppTerminationNotificationSubscription}
     */
    this.applicationsSubscriptionGET = function(, callback) {
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsSubscriptionGET");
      }

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling applicationsSubscriptionGET");
      }


      var pathParams = {
        'appInstanceId': appInstanceId,
        'subscriptionId': subscriptionId
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
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = AppTerminationNotificationSubscription;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsSubscriptionsGET operation.
     * @callback module:api/MecAppSupportApi~applicationsSubscriptionsGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionLinkList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The GET method may be used to request information about all subscriptions for this requestor. Upon success, the response contains entity body with all the subscriptions for the requestor.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {module:api/MecAppSupportApi~applicationsSubscriptionsGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionLinkList}
     */
    this.applicationsSubscriptionsGET = function(, callback) {
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsSubscriptionsGET");
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
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = SubscriptionLinkList;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsSubscriptionsPOST operation.
     * @callback module:api/MecAppSupportApi~applicationsSubscriptionsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppTerminationNotificationSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The POST method may be used to create a new subscription. One example use case is to create a new subscription to the MEC service availability notifications. Upon success, the response contains entity body describing the created subscription.
     * @param {module:model/AppTerminationNotificationSubscription} body Entity body in the request contains a subscription to the MEC application termination notifications that is to be created.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {module:api/MecAppSupportApi~applicationsSubscriptionsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppTerminationNotificationSubscription}
     */
    this.applicationsSubscriptionsPOST = function(, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling applicationsSubscriptionsPOST");
      }

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling applicationsSubscriptionsPOST");
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
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = AppTerminationNotificationSubscription;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the timingCapsGET operation.
     * @callback module:api/MecAppSupportApi~timingCapsGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimingCaps} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves the information of the platform&#39;s timing capabilities which corresponds to the timing capabilities query
     * @param {module:api/MecAppSupportApi~timingCapsGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimingCaps}
     */
    this.timingCapsGET = function(callback) {
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
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = TimingCaps;

      return this.apiClient.callApi(
        '/timing/timing_caps', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the timingCurrentTimeGET operation.
     * @callback module:api/MecAppSupportApi~timingCurrentTimeGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentTime} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves the information of the platform&#39;s current time which corresponds to the get platform time procedure
     * @param {module:api/MecAppSupportApi~timingCurrentTimeGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentTime}
     */
    this.timingCurrentTimeGET = function(callback) {
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
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = CurrentTime;

      return this.apiClient.callApi(
        '/timing/current_time', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
