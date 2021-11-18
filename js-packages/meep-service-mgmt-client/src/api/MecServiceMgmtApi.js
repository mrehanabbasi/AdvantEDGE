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
 * AdvantEDGE MEC Service Management API
 * MEC Service Management Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC011 Application Enablement API](https://www.etsi.org/deliver/etsi_gs/MEC/001_099/011/02.01.01_60/gs_MEC011v020101p.pdf) <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-app-enablement](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-app-enablement/server/service-mgmt) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about services in the network <p>**Note**<br>AdvantEDGE supports all of Service Management API endpoints (see below).
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
    define(['ApiClient', 'model/ProblemDetails', 'model/SerAvailabilityNotificationSubscription', 'model/ServiceInfo', 'model/ServiceInfoPost', 'model/SubscriptionLinkList', 'model/TransportInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProblemDetails'), require('../model/SerAvailabilityNotificationSubscription'), require('../model/ServiceInfo'), require('../model/ServiceInfoPost'), require('../model/SubscriptionLinkList'), require('../model/TransportInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeMecServiceManagementApi) {
      root.AdvantEdgeMecServiceManagementApi = {};
    }
    root.AdvantEdgeMecServiceManagementApi.MecServiceMgmtApi = factory(root.AdvantEdgeMecServiceManagementApi.ApiClient, root.AdvantEdgeMecServiceManagementApi.ProblemDetails, root.AdvantEdgeMecServiceManagementApi.SerAvailabilityNotificationSubscription, root.AdvantEdgeMecServiceManagementApi.ServiceInfo, root.AdvantEdgeMecServiceManagementApi.ServiceInfoPost, root.AdvantEdgeMecServiceManagementApi.SubscriptionLinkList, root.AdvantEdgeMecServiceManagementApi.TransportInfo);
  }
}(this, function(ApiClient, ProblemDetails, SerAvailabilityNotificationSubscription, ServiceInfo, ServiceInfoPost, SubscriptionLinkList, TransportInfo) {
  'use strict';

  /**
   * MecServiceMgmt service.
   * @module api/MecServiceMgmtApi
   * @version 2.1.1
   */

  /**
   * Constructs a new MecServiceMgmtApi. 
   * @alias module:api/MecServiceMgmtApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the appServicesGET operation.
     * @callback module:api/MecServiceMgmtApi~appServicesGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ServiceInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves information about a list of mecService resources. This method is typically used in \&quot;service availability query\&quot; procedure
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.serInstanceId A MEC application instance may use multiple ser_instance_ids as an input parameter to query the availability of a list of MEC service instances. Either \&quot;ser_instance_id\&quot; or \&quot;ser_name\&quot; or \&quot;ser_category_id\&quot; or none of them shall be present.
     * @param {Array.<String>} opts.serName A MEC application instance may use multiple ser_names as an input parameter to query the availability of a list of MEC service instances. Either \&quot;ser_instance_id\&quot; or \&quot;ser_name\&quot; or \&quot;ser_category_id\&quot; or none of them shall be present.
     * @param {String} opts.serCategoryId A MEC application instance may use ser_category_id as an input parameter to query the availability of a list of MEC service instances in a serCategory. Either \&quot;ser_instance_id\&quot; or \&quot;ser_name\&quot; or \&quot;ser_category_id\&quot; or none of them shall be present.
     * @param {Boolean} opts.consumedLocalOnly Indicate whether the service can only be consumed by the MEC  applications located in the same locality (as defined by  scopeOfLocality) as this service instance.
     * @param {Boolean} opts.isLocal Indicate whether the service is located in the same locality (as  defined by scopeOfLocality) as the consuming MEC application.
     * @param {String} opts.scopeOfLocality A MEC application instance may use scope_of_locality as an input  parameter to query the availability of a list of MEC service instances  with a certain scope of locality.
     * @param {module:api/MecServiceMgmtApi~appServicesGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ServiceInfo>}
     */
    this.appServicesGET = function(, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling appServicesGET");
      }


      var pathParams = {
        'appInstanceId': appInstanceId
      };
      var queryParams = {
        'ser_category_id': opts['serCategoryId'],
        'consumed_local_only': opts['consumedLocalOnly'],
        'is_local': opts['isLocal'],
        'scope_of_locality': opts['scopeOfLocality'],
      };
      var collectionQueryParams = {
        'ser_instance_id': {
          value: opts['serInstanceId'],
          collectionFormat: 'multi'
        },
        'ser_name': {
          value: opts['serName'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = [ServiceInfo];

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appServicesPOST operation.
     * @callback module:api/MecServiceMgmtApi~appServicesPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method is used to create a mecService resource. This method is typically used in \&quot;service availability update and new service registration\&quot; procedure
     * @param {module:model/ServiceInfoPost} body New ServiceInfo with updated &quot;state&quot; is included as entity body of the request
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {module:api/MecServiceMgmtApi~appServicesPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.appServicesPOST = function(, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appServicesPOST");
      }

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling appServicesPOST");
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
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/services', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appServicesServiceIdDELETE operation.
     * @callback module:api/MecServiceMgmtApi~appServicesServiceIdDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes a mecService resource. This method is typically used in the service deregistration procedure. 
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {String} serviceId Represents a MEC service instance.
     * @param {module:api/MecServiceMgmtApi~appServicesServiceIdDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.appServicesServiceIdDELETE = function(, callback) {
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling appServicesServiceIdDELETE");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling appServicesServiceIdDELETE");
      }


      var pathParams = {
        'appInstanceId': appInstanceId,
        'serviceId': serviceId
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
        '/applications/{appInstanceId}/services/{serviceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appServicesServiceIdGET operation.
     * @callback module:api/MecServiceMgmtApi~appServicesServiceIdGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves information about a mecService resource. This method is typically used in \&quot;service availability query\&quot; procedure
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {String} serviceId Represents a MEC service instance.
     * @param {module:api/MecServiceMgmtApi~appServicesServiceIdGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.appServicesServiceIdGET = function(, callback) {
      var postBody = null;

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling appServicesServiceIdGET");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling appServicesServiceIdGET");
      }


      var pathParams = {
        'appInstanceId': appInstanceId,
        'serviceId': serviceId
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
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the appServicesServiceIdPUT operation.
     * @callback module:api/MecServiceMgmtApi~appServicesServiceIdPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method updates the information about a mecService resource
     * @param {module:model/ServiceInfo} body New ServiceInfo with updated &quot;state&quot; is included as entity body of the request
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {String} serviceId Represents a MEC service instance.
     * @param {module:api/MecServiceMgmtApi~appServicesServiceIdPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.appServicesServiceIdPUT = function(, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appServicesServiceIdPUT");
      }

      // verify the required parameter 'appInstanceId' is set
      if (appInstanceId === undefined || appInstanceId === null) {
        throw new Error("Missing the required parameter 'appInstanceId' when calling appServicesServiceIdPUT");
      }

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling appServicesServiceIdPUT");
      }


      var pathParams = {
        'appInstanceId': appInstanceId,
        'serviceId': serviceId
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
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/services/{serviceId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsSubscriptionDELETE operation.
     * @callback module:api/MecServiceMgmtApi~applicationsSubscriptionDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes a mecSrvMgmtSubscription. This method is typically used in \&quot;Unsubscribing from service availability event notifications\&quot; procedure.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {String} subscriptionId Represents a subscription to the notifications from the MEC platform.
     * @param {module:api/MecServiceMgmtApi~applicationsSubscriptionDELETECallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/MecServiceMgmtApi~applicationsSubscriptionGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SerAvailabilityNotificationSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The GET method requests information about a subscription for this requestor. Upon success, the response contains entity body with the subscription for the requestor.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {String} subscriptionId Represents a subscription to the notifications from the MEC platform.
     * @param {module:api/MecServiceMgmtApi~applicationsSubscriptionGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SerAvailabilityNotificationSubscription}
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
      var returnType = SerAvailabilityNotificationSubscription;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the applicationsSubscriptionsGET operation.
     * @callback module:api/MecServiceMgmtApi~applicationsSubscriptionsGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionLinkList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The GET method may be used to request information about all subscriptions for this requestor. Upon success, the response contains entity body with all the subscriptions for the requestor.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {module:api/MecServiceMgmtApi~applicationsSubscriptionsGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/MecServiceMgmtApi~applicationsSubscriptionsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SerAvailabilityNotificationSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The POST method may be used to create a new subscription. One example use case is to create a new subscription to the MEC service availability notifications. Upon success, the response contains entity body describing the created subscription.
     * @param {module:model/SerAvailabilityNotificationSubscription} body Entity body in the request contains a subscription to the MEC application termination notifications that is to be created.
     * @param {String} appInstanceId Represents a MEC application instance. Note that the appInstanceId is allocated by the MEC platform manager.
     * @param {module:api/MecServiceMgmtApi~applicationsSubscriptionsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SerAvailabilityNotificationSubscription}
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
      var returnType = SerAvailabilityNotificationSubscription;

      return this.apiClient.callApi(
        '/applications/{appInstanceId}/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servicesGET operation.
     * @callback module:api/MecServiceMgmtApi~servicesGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ServiceInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves information about a list of mecService resources. This method is typically used in \&quot;service availability query\&quot; procedure
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.serInstanceId A MEC application instance may use multiple ser_instance_ids as an input parameter to query the availability of a list of MEC service instances. Either \&quot;ser_instance_id\&quot; or \&quot;ser_name\&quot; or \&quot;ser_category_id\&quot; or none of them shall be present.
     * @param {Array.<String>} opts.serName A MEC application instance may use multiple ser_names as an input parameter to query the availability of a list of MEC service instances. Either \&quot;ser_instance_id\&quot; or \&quot;ser_name\&quot; or \&quot;ser_category_id\&quot; or none of them shall be present.
     * @param {String} opts.serCategoryId A MEC application instance may use ser_category_id as an input parameter to query the availability of a list of MEC service instances in a serCategory. Either \&quot;ser_instance_id\&quot; or \&quot;ser_name\&quot; or \&quot;ser_category_id\&quot; or none of them shall be present.
     * @param {Boolean} opts.consumedLocalOnly Indicate whether the service can only be consumed by the MEC  applications located in the same locality (as defined by  scopeOfLocality) as this service instance.
     * @param {Boolean} opts.isLocal Indicate whether the service is located in the same locality (as  defined by scopeOfLocality) as the consuming MEC application.
     * @param {String} opts.scopeOfLocality A MEC application instance may use scope_of_locality as an input  parameter to query the availability of a list of MEC service instances  with a certain scope of locality.
     * @param {module:api/MecServiceMgmtApi~servicesGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ServiceInfo>}
     */
    this.servicesGET = function(, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ser_category_id': opts['serCategoryId'],
        'consumed_local_only': opts['consumedLocalOnly'],
        'is_local': opts['isLocal'],
        'scope_of_locality': opts['scopeOfLocality'],
      };
      var collectionQueryParams = {
        'ser_instance_id': {
          value: opts['serInstanceId'],
          collectionFormat: 'multi'
        },
        'ser_name': {
          value: opts['serName'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = [ServiceInfo];

      return this.apiClient.callApi(
        '/services', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the servicesServiceIdGET operation.
     * @callback module:api/MecServiceMgmtApi~servicesServiceIdGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves information about a mecService resource. This method is typically used in \&quot;service availability query\&quot; procedure
     * @param {String} serviceId Represents a MEC service instance.
     * @param {module:api/MecServiceMgmtApi~servicesServiceIdGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.servicesServiceIdGET = function(, callback) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling servicesServiceIdGET");
      }


      var pathParams = {
        'serviceId': serviceId
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
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/services/{serviceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transportsGET operation.
     * @callback module:api/MecServiceMgmtApi~transportsGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TransportInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves information about a list of available transports. This method is typically used by a service-producing application to discover transports provided by the MEC platform in the \&quot;transport information query\&quot; procedure
     * @param {module:api/MecServiceMgmtApi~transportsGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TransportInfo>}
     */
    this.transportsGET = function(callback) {
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
      var returnType = [TransportInfo];

      return this.apiClient.callApi(
        '/transports', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
