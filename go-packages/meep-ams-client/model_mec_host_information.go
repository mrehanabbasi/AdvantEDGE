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
 * ETSI GS MEC 021 Application Mobility Service API
 *
 * ETSI GS MEC 021 Application Mobility Service API described using OpenAPI.
 *
 * API version: 2.1.1
 * Contact: cti_support@etsi.org
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

// 'The data type represents the parameters of MEC host information.'
type MecHostInformation struct {
	HostName string `json:"hostName,omitempty"`
	// 'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'
	HostId *interface{} `json:"hostId"`
}
