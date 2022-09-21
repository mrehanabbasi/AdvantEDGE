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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActivationInfo', 'model/ApplicationInfo', 'model/CellularDomainConfig', 'model/CellularPoaConfig', 'model/ConnectivityConfig', 'model/CpuConfig', 'model/D2dConfig', 'model/DNConfig', 'model/Deployment', 'model/Domain', 'model/Domains', 'model/EgressService', 'model/Event', 'model/EventMobility', 'model/EventNetworkCharacteristicsUpdate', 'model/EventPduSession', 'model/EventPoasInRange', 'model/EventScenarioUpdate', 'model/ExternalConfig', 'model/GeoData', 'model/GpuConfig', 'model/IngressService', 'model/LineString', 'model/MemoryConfig', 'model/NetworkCharacteristics', 'model/NetworkLocation', 'model/NetworkLocations', 'model/NodeDataUnion', 'model/NodeServiceMaps', 'model/PDUSession', 'model/PDUSessionInfo', 'model/PDUSessionList', 'model/PhysicalLocation', 'model/PhysicalLocations', 'model/Poa4GConfig', 'model/Poa5GConfig', 'model/PoaWifiConfig', 'model/Point', 'model/Process', 'model/Processes', 'model/Replay', 'model/ReplayEvent', 'model/ReplayFileList', 'model/ReplayInfo', 'model/ReplayStatus', 'model/Scenario', 'model/ScenarioConfig', 'model/ScenarioNode', 'model/ServiceConfig', 'model/ServiceInfo', 'model/ServicePort', 'model/Zone', 'model/Zones', 'api/ActiveScenarioApi', 'api/ApplicationsApi', 'api/ConnectivityApi', 'api/EventReplayApi', 'api/EventsApi', 'api/ServicesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ActivationInfo'), require('./model/ApplicationInfo'), require('./model/CellularDomainConfig'), require('./model/CellularPoaConfig'), require('./model/ConnectivityConfig'), require('./model/CpuConfig'), require('./model/D2dConfig'), require('./model/DNConfig'), require('./model/Deployment'), require('./model/Domain'), require('./model/Domains'), require('./model/EgressService'), require('./model/Event'), require('./model/EventMobility'), require('./model/EventNetworkCharacteristicsUpdate'), require('./model/EventPduSession'), require('./model/EventPoasInRange'), require('./model/EventScenarioUpdate'), require('./model/ExternalConfig'), require('./model/GeoData'), require('./model/GpuConfig'), require('./model/IngressService'), require('./model/LineString'), require('./model/MemoryConfig'), require('./model/NetworkCharacteristics'), require('./model/NetworkLocation'), require('./model/NetworkLocations'), require('./model/NodeDataUnion'), require('./model/NodeServiceMaps'), require('./model/PDUSession'), require('./model/PDUSessionInfo'), require('./model/PDUSessionList'), require('./model/PhysicalLocation'), require('./model/PhysicalLocations'), require('./model/Poa4GConfig'), require('./model/Poa5GConfig'), require('./model/PoaWifiConfig'), require('./model/Point'), require('./model/Process'), require('./model/Processes'), require('./model/Replay'), require('./model/ReplayEvent'), require('./model/ReplayFileList'), require('./model/ReplayInfo'), require('./model/ReplayStatus'), require('./model/Scenario'), require('./model/ScenarioConfig'), require('./model/ScenarioNode'), require('./model/ServiceConfig'), require('./model/ServiceInfo'), require('./model/ServicePort'), require('./model/Zone'), require('./model/Zones'), require('./api/ActiveScenarioApi'), require('./api/ApplicationsApi'), require('./api/ConnectivityApi'), require('./api/EventReplayApi'), require('./api/EventsApi'), require('./api/ServicesApi'));
  }
}(function(ApiClient, ActivationInfo, ApplicationInfo, CellularDomainConfig, CellularPoaConfig, ConnectivityConfig, CpuConfig, D2dConfig, DNConfig, Deployment, Domain, Domains, EgressService, Event, EventMobility, EventNetworkCharacteristicsUpdate, EventPduSession, EventPoasInRange, EventScenarioUpdate, ExternalConfig, GeoData, GpuConfig, IngressService, LineString, MemoryConfig, NetworkCharacteristics, NetworkLocation, NetworkLocations, NodeDataUnion, NodeServiceMaps, PDUSession, PDUSessionInfo, PDUSessionList, PhysicalLocation, PhysicalLocations, Poa4GConfig, Poa5GConfig, PoaWifiConfig, Point, Process, Processes, Replay, ReplayEvent, ReplayFileList, ReplayInfo, ReplayStatus, Scenario, ScenarioConfig, ScenarioNode, ServiceConfig, ServiceInfo, ServicePort, Zone, Zones, ActiveScenarioApi, ApplicationsApi, ConnectivityApi, EventReplayApi, EventsApi, ServicesApi) {
  'use strict';

  /**
   * This_API_is_the_main_Sandbox_Controller_API_for_scenario_deployment__event_injection_pMicro_servicebr_meep_sandbox_ctrl_httpsgithub_comInterDigitalIncAdvantEDGEtreemastergo_appsmeep_sandbox_ctrl_pType__UsagebrPlatform_runtime_interface_to_manage_active_scenarios_and_inject_events_in_AdvantEDGE_platform_pDetailsbrAPI_details_available_at__your_AdvantEDGE_ip_addressapi_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AdvantEdgeSandboxControllerRestApi = require('index'); // See note below*.
   * var xxxSvc = new AdvantEdgeSandboxControllerRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AdvantEdgeSandboxControllerRestApi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new AdvantEdgeSandboxControllerRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AdvantEdgeSandboxControllerRestApi.Yyy(); // Construct a model instance.
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
     * The ActivationInfo model constructor.
     * @property {module:model/ActivationInfo}
     */
    ActivationInfo: ActivationInfo,
    /**
     * The ApplicationInfo model constructor.
     * @property {module:model/ApplicationInfo}
     */
    ApplicationInfo: ApplicationInfo,
    /**
     * The CellularDomainConfig model constructor.
     * @property {module:model/CellularDomainConfig}
     */
    CellularDomainConfig: CellularDomainConfig,
    /**
     * The CellularPoaConfig model constructor.
     * @property {module:model/CellularPoaConfig}
     */
    CellularPoaConfig: CellularPoaConfig,
    /**
     * The ConnectivityConfig model constructor.
     * @property {module:model/ConnectivityConfig}
     */
    ConnectivityConfig: ConnectivityConfig,
    /**
     * The CpuConfig model constructor.
     * @property {module:model/CpuConfig}
     */
    CpuConfig: CpuConfig,
    /**
     * The D2dConfig model constructor.
     * @property {module:model/D2dConfig}
     */
    D2dConfig: D2dConfig,
    /**
     * The DNConfig model constructor.
     * @property {module:model/DNConfig}
     */
    DNConfig: DNConfig,
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
     * The Domains model constructor.
     * @property {module:model/Domains}
     */
    Domains: Domains,
    /**
     * The EgressService model constructor.
     * @property {module:model/EgressService}
     */
    EgressService: EgressService,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventMobility model constructor.
     * @property {module:model/EventMobility}
     */
    EventMobility: EventMobility,
    /**
     * The EventNetworkCharacteristicsUpdate model constructor.
     * @property {module:model/EventNetworkCharacteristicsUpdate}
     */
    EventNetworkCharacteristicsUpdate: EventNetworkCharacteristicsUpdate,
    /**
     * The EventPduSession model constructor.
     * @property {module:model/EventPduSession}
     */
    EventPduSession: EventPduSession,
    /**
     * The EventPoasInRange model constructor.
     * @property {module:model/EventPoasInRange}
     */
    EventPoasInRange: EventPoasInRange,
    /**
     * The EventScenarioUpdate model constructor.
     * @property {module:model/EventScenarioUpdate}
     */
    EventScenarioUpdate: EventScenarioUpdate,
    /**
     * The ExternalConfig model constructor.
     * @property {module:model/ExternalConfig}
     */
    ExternalConfig: ExternalConfig,
    /**
     * The GeoData model constructor.
     * @property {module:model/GeoData}
     */
    GeoData: GeoData,
    /**
     * The GpuConfig model constructor.
     * @property {module:model/GpuConfig}
     */
    GpuConfig: GpuConfig,
    /**
     * The IngressService model constructor.
     * @property {module:model/IngressService}
     */
    IngressService: IngressService,
    /**
     * The LineString model constructor.
     * @property {module:model/LineString}
     */
    LineString: LineString,
    /**
     * The MemoryConfig model constructor.
     * @property {module:model/MemoryConfig}
     */
    MemoryConfig: MemoryConfig,
    /**
     * The NetworkCharacteristics model constructor.
     * @property {module:model/NetworkCharacteristics}
     */
    NetworkCharacteristics: NetworkCharacteristics,
    /**
     * The NetworkLocation model constructor.
     * @property {module:model/NetworkLocation}
     */
    NetworkLocation: NetworkLocation,
    /**
     * The NetworkLocations model constructor.
     * @property {module:model/NetworkLocations}
     */
    NetworkLocations: NetworkLocations,
    /**
     * The NodeDataUnion model constructor.
     * @property {module:model/NodeDataUnion}
     */
    NodeDataUnion: NodeDataUnion,
    /**
     * The NodeServiceMaps model constructor.
     * @property {module:model/NodeServiceMaps}
     */
    NodeServiceMaps: NodeServiceMaps,
    /**
     * The PDUSession model constructor.
     * @property {module:model/PDUSession}
     */
    PDUSession: PDUSession,
    /**
     * The PDUSessionInfo model constructor.
     * @property {module:model/PDUSessionInfo}
     */
    PDUSessionInfo: PDUSessionInfo,
    /**
     * The PDUSessionList model constructor.
     * @property {module:model/PDUSessionList}
     */
    PDUSessionList: PDUSessionList,
    /**
     * The PhysicalLocation model constructor.
     * @property {module:model/PhysicalLocation}
     */
    PhysicalLocation: PhysicalLocation,
    /**
     * The PhysicalLocations model constructor.
     * @property {module:model/PhysicalLocations}
     */
    PhysicalLocations: PhysicalLocations,
    /**
     * The Poa4GConfig model constructor.
     * @property {module:model/Poa4GConfig}
     */
    Poa4GConfig: Poa4GConfig,
    /**
     * The Poa5GConfig model constructor.
     * @property {module:model/Poa5GConfig}
     */
    Poa5GConfig: Poa5GConfig,
    /**
     * The PoaWifiConfig model constructor.
     * @property {module:model/PoaWifiConfig}
     */
    PoaWifiConfig: PoaWifiConfig,
    /**
     * The Point model constructor.
     * @property {module:model/Point}
     */
    Point: Point,
    /**
     * The Process model constructor.
     * @property {module:model/Process}
     */
    Process: Process,
    /**
     * The Processes model constructor.
     * @property {module:model/Processes}
     */
    Processes: Processes,
    /**
     * The Replay model constructor.
     * @property {module:model/Replay}
     */
    Replay: Replay,
    /**
     * The ReplayEvent model constructor.
     * @property {module:model/ReplayEvent}
     */
    ReplayEvent: ReplayEvent,
    /**
     * The ReplayFileList model constructor.
     * @property {module:model/ReplayFileList}
     */
    ReplayFileList: ReplayFileList,
    /**
     * The ReplayInfo model constructor.
     * @property {module:model/ReplayInfo}
     */
    ReplayInfo: ReplayInfo,
    /**
     * The ReplayStatus model constructor.
     * @property {module:model/ReplayStatus}
     */
    ReplayStatus: ReplayStatus,
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
     * The ScenarioNode model constructor.
     * @property {module:model/ScenarioNode}
     */
    ScenarioNode: ScenarioNode,
    /**
     * The ServiceConfig model constructor.
     * @property {module:model/ServiceConfig}
     */
    ServiceConfig: ServiceConfig,
    /**
     * The ServiceInfo model constructor.
     * @property {module:model/ServiceInfo}
     */
    ServiceInfo: ServiceInfo,
    /**
     * The ServicePort model constructor.
     * @property {module:model/ServicePort}
     */
    ServicePort: ServicePort,
    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone: Zone,
    /**
     * The Zones model constructor.
     * @property {module:model/Zones}
     */
    Zones: Zones,
    /**
     * The ActiveScenarioApi service constructor.
     * @property {module:api/ActiveScenarioApi}
     */
    ActiveScenarioApi: ActiveScenarioApi,
    /**
     * The ApplicationsApi service constructor.
     * @property {module:api/ApplicationsApi}
     */
    ApplicationsApi: ApplicationsApi,
    /**
     * The ConnectivityApi service constructor.
     * @property {module:api/ConnectivityApi}
     */
    ConnectivityApi: ConnectivityApi,
    /**
     * The EventReplayApi service constructor.
     * @property {module:api/EventReplayApi}
     */
    EventReplayApi: EventReplayApi,
    /**
     * The EventsApi service constructor.
     * @property {module:api/EventsApi}
     */
    EventsApi: EventsApi,
    /**
     * The ServicesApi service constructor.
     * @property {module:api/ServicesApi}
     */
    ServicesApi: ServicesApi
  };

  return exports;
}));
