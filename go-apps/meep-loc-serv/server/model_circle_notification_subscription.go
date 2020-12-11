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
 * AdvantEDGE Location Service REST API
 *
 * Location Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC013 Location API](http://www.etsi.org/deliver/etsi_gs/MEC/001_099/013/02.01.01_60/gs_mec013v020101p.pdf) <p>The API is based on the Open Mobile Alliance's specification RESTful Network API for Zonal Presence <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-loc-serv](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-loc-serv) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about Users (UE) and Zone locations <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * API version: 2.1.1
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package server

// A type containing data for notifications, when the area is defined as a circle.
type CircleNotificationSubscription struct {
	// Address of terminals to monitor (e.g. \"sip\" URI, \"tel\" URI, \"acr\" URI)
	Address []string `json:"address"`

	CallbackReference *CallbackReference `json:"callbackReference"`
	// Check location immediately after establishing notification.
	CheckImmediate bool `json:"checkImmediate"`
	// A correlator that the client can use to tag this particular resource representation during a request to create a resource on the server.
	ClientCorrelator string `json:"clientCorrelator,omitempty"`
	// Maximum number of notifications per individual address. For no maximum, either do not include this element or specify a value of zero. Default value is 0.
	Count int32 `json:"count,omitempty"`
	// Period of time (in seconds) notifications are provided for. If set to “0” (zero), a default duration time, which is specified by the service policy, will be used. If the parameter is omitted, the notifications will continue until the maximum duration time, which is specified by the service policy, unless the notifications are stopped by deletion of subscription for notifications.
	Duration int32 `json:"duration,omitempty"`

	EnteringLeavingCriteria *EnteringLeavingCriteria `json:"enteringLeavingCriteria"`
	// Maximum frequency (in seconds) of notifications per subscription (can also be considered minimum time between notifications).
	Frequency int32 `json:"frequency"`
	// Latitude of center point.
	Latitude float32 `json:"latitude"`
	// Link to other resources that are in relationship with the resource.
	Link []Link `json:"link,omitempty"`
	// Longitude of center point.
	Longitude float32 `json:"longitude"`
	// Radius circle around center point in meters.
	Radius float32 `json:"radius"`
	// Identifies the entity that is requesting the information (e.g. \"sip\" URI, \"tel\" URI, \"acr\" URI)
	Requester string `json:"requester,omitempty"`
	// Self referring URL
	ResourceURL string `json:"resourceURL,omitempty"`
	// Number of meters of acceptable error in tracking distance.
	TrackingAccuracy float32 `json:"trackingAccuracy"`
}
