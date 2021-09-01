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
package server

type ProblemDetails struct {
	// A human-readable explanation specific to this occurrence of the problem
	Detail string `json:"detail,omitempty"`
	// A URI reference that identifies the specific occurrence of the problem
	Instance string `json:"instance,omitempty"`
	// The HTTP status code for this occurrence of the problem
	Status int32 `json:"status,omitempty"`
	// A short, human-readable summary of the problem type
	Title string `json:"title,omitempty"`
	// A URI reference according to IETF RFC 3986 that identifies the problem type
	Type_ string `json:"type,omitempty"`
}
