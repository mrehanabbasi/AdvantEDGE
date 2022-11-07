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
 * AdvantEDGE Application Mobility API
 *
 * Application Mobility Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC021 Application Mobility API](http://www.etsi.org/deliver/etsi_gs/MEC/001_099/021/02.02.01_60/gs_MEC021v020201p.pdf) <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-ams](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-ams) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about application mobility in the network <p>**Note**<br>AdvantEDGE supports a selected subset of Application Mobility API endpoints (see below).
 *
 * API version: 2.2.1
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package server

// MobilityStatus : Indicate the status of the UE mobility
type MobilityStatus string

// List of MobilityStatus
const (
	TRIGGERED_MobilityStatus MobilityStatus = "INTERHOST_MOVEOUT_TRIGGERED"
	COMPLETED_MobilityStatus MobilityStatus = "INTERHOST_MOVEOUT_COMPLETED"
	FAILED_MobilityStatus    MobilityStatus = "INTERHOST_MOVEOUT_FAILED"
)
