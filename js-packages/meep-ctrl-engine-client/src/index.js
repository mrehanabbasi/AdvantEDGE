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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClientServiceMap', 'model/Deployment', 'model/Domain', 'model/Event', 'model/EventList', 'model/EventNetworkCharacteristicsUpdate', 'model/EventOther', 'model/EventPoasInRange', 'model/EventUeMobility', 'model/ExternalConfig', 'model/NetworkLocation', 'model/PhysicalLocation', 'model/PodStatus', 'model/PodsStatus', 'model/Process', 'model/Scenario', 'model/ScenarioConfig', 'model/ScenarioList', 'model/ServiceConfig', 'model/ServiceMap', 'model/ServicePort', 'model/Settings', 'model/Zone', 'api/MEEPSettingsApi', 'api/PodStatesApi', 'api/ScenarioConfigurationApi', 'api/ScenarioExecutionApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ClientServiceMap'), require('./model/Deployment'), require('./model/Domain'), require('./model/Event'), require('./model/EventList'), require('./model/EventNetworkCharacteristicsUpdate'), require('./model/EventOther'), require('./model/EventPoasInRange'), require('./model/EventUeMobility'), require('./model/ExternalConfig'), require('./model/NetworkLocation'), require('./model/PhysicalLocation'), require('./model/PodStatus'), require('./model/PodsStatus'), require('./model/Process'), require('./model/Scenario'), require('./model/ScenarioConfig'), require('./model/ScenarioList'), require('./model/ServiceConfig'), require('./model/ServiceMap'), require('./model/ServicePort'), require('./model/Settings'), require('./model/Zone'), require('./api/MEEPSettingsApi'), require('./api/PodStatesApi'), require('./api/ScenarioConfigurationApi'), require('./api/ScenarioExecutionApi'));
  }
}(function(ApiClient, ClientServiceMap, Deployment, Domain, Event, EventList, EventNetworkCharacteristicsUpdate, EventOther, EventPoasInRange, EventUeMobility, ExternalConfig, NetworkLocation, PhysicalLocation, PodStatus, PodsStatus, Process, Scenario, ScenarioConfig, ScenarioList, ServiceConfig, ServiceMap, ServicePort, Settings, Zone, MEEPSettingsApi, PodStatesApi, ScenarioConfigurationApi, ScenarioExecutionApi) {
  'use strict';

  /**
   * MEEP_Controller_REST_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MeepControllerRestApi = require('index'); // See note below*.
   * var xxxSvc = new MeepControllerRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MeepControllerRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MeepControllerRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MeepControllerRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ClientServiceMap model constructor.
     * @property {module:model/ClientServiceMap}
     */
    ClientServiceMap: ClientServiceMap,
    /**
     * The Deployment model constructor.
     * @property {module:model/Deployment}
     */
    Deployment: Deployment,
    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain: Domain,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventList model constructor.
     * @property {module:model/EventList}
     */
    EventList: EventList,
    /**
     * The EventNetworkCharacteristicsUpdate model constructor.
     * @property {module:model/EventNetworkCharacteristicsUpdate}
     */
    EventNetworkCharacteristicsUpdate: EventNetworkCharacteristicsUpdate,
    /**
     * The EventOther model constructor.
     * @property {module:model/EventOther}
     */
    EventOther: EventOther,
    /**
     * The EventPoasInRange model constructor.
     * @property {module:model/EventPoasInRange}
     */
    EventPoasInRange: EventPoasInRange,
    /**
     * The EventUeMobility model constructor.
     * @property {module:model/EventUeMobility}
     */
    EventUeMobility: EventUeMobility,
    /**
     * The ExternalConfig model constructor.
     * @property {module:model/ExternalConfig}
     */
    ExternalConfig: ExternalConfig,
    /**
     * The NetworkLocation model constructor.
     * @property {module:model/NetworkLocation}
     */
    NetworkLocation: NetworkLocation,
    /**
     * The PhysicalLocation model constructor.
     * @property {module:model/PhysicalLocation}
     */
    PhysicalLocation: PhysicalLocation,
    /**
     * The PodStatus model constructor.
     * @property {module:model/PodStatus}
     */
    PodStatus: PodStatus,
    /**
     * The PodsStatus model constructor.
     * @property {module:model/PodsStatus}
     */
    PodsStatus: PodsStatus,
    /**
     * The Process model constructor.
     * @property {module:model/Process}
     */
    Process: Process,
    /**
     * The Scenario model constructor.
     * @property {module:model/Scenario}
     */
    Scenario: Scenario,
    /**
     * The ScenarioConfig model constructor.
     * @property {module:model/ScenarioConfig}
     */
    ScenarioConfig: ScenarioConfig,
    /**
     * The ScenarioList model constructor.
     * @property {module:model/ScenarioList}
     */
    ScenarioList: ScenarioList,
    /**
     * The ServiceConfig model constructor.
     * @property {module:model/ServiceConfig}
     */
    ServiceConfig: ServiceConfig,
    /**
     * The ServiceMap model constructor.
     * @property {module:model/ServiceMap}
     */
    ServiceMap: ServiceMap,
    /**
     * The ServicePort model constructor.
     * @property {module:model/ServicePort}
     */
    ServicePort: ServicePort,
    /**
     * The Settings model constructor.
     * @property {module:model/Settings}
     */
    Settings: Settings,
    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone: Zone,
    /**
     * The MEEPSettingsApi service constructor.
     * @property {module:api/MEEPSettingsApi}
     */
    MEEPSettingsApi: MEEPSettingsApi,
    /**
     * The PodStatesApi service constructor.
     * @property {module:api/PodStatesApi}
     */
    PodStatesApi: PodStatesApi,
    /**
     * The ScenarioConfigurationApi service constructor.
     * @property {module:api/ScenarioConfigurationApi}
     */
    ScenarioConfigurationApi: ScenarioConfigurationApi,
    /**
     * The ScenarioExecutionApi service constructor.
     * @property {module:api/ScenarioExecutionApi}
     */
    ScenarioExecutionApi: ScenarioExecutionApi
  };

  return exports;
}));
