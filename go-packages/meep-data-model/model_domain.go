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
 * MEEP Model
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package model

// Operator domain object
type Domain struct {
	// Unique domain ID
	Id string `json:"id,omitempty"`
	// Domain name
	Name string `json:"name,omitempty"`
	// Domain type
	Type_   string                  `json:"type,omitempty"`
	NetChar *NetworkCharacteristics `json:"netChar,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar latency
	InterZoneLatency int32 `json:"interZoneLatency,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar latencyVariation
	InterZoneLatencyVariation int32 `json:"interZoneLatencyVariation,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar throughputUl and throughputDl
	InterZoneThroughput int32 `json:"interZoneThroughput,omitempty"`
	// **DEPRECATED** As of release 1.5.0, replaced by netChar packetLoss
	InterZonePacketLoss float64 `json:"interZonePacketLoss,omitempty"`
	// Key/Value Pair Map (string, string)
	Meta map[string]string `json:"meta,omitempty"`
	// Key/Value Pair Map (string, string)
	UserMeta             map[string]string     `json:"userMeta,omitempty"`
	CellularDomainConfig *CellularDomainConfig `json:"cellularDomainConfig,omitempty"`
	Zones                []Zone                `json:"zones,omitempty"`
}
