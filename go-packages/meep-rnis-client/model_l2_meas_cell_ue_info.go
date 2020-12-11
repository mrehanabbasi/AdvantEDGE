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
 * AdvantEDGE Radio Network Information Service REST API
 *
 * Radio Network Information Service is AdvantEDGE's implementation of [ETSI MEC ISG MEC012 RNI API](http://www.etsi.org/deliver/etsi_gs/MEC/001_099/012/02.01.01_60/gs_MEC012v020101p.pdf) <p>[Copyright (c) ETSI 2017](https://forge.etsi.org/etsi-forge-copyright-notice.txt) <p>**Micro-service**<br>[meep-rnis](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-rnis) <p>**Type & Usage**<br>Edge Service used by edge applications that want to get information about radio conditions in the network <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * API version: 2.1.1
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

type L2MeasCellUeInfo struct {
	AssociateId *AssociateId `json:"associateId,omitempty"`
	// It indicates the data volume of the downlink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlGbrDataVolumeUe int32 `json:"dl_gbr_data_volume_ue,omitempty"`
	// It indicates the packet delay of the downlink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlGbrDelayUe int32 `json:"dl_gbr_delay_ue,omitempty"`
	// It indicates the packet discard rate in percentage of the downlink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlGbrPdrUe int32 `json:"dl_gbr_pdr_ue,omitempty"`
	// It indicates the scheduled throughput of the downlink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlGbrThroughputUe int32 `json:"dl_gbr_throughput_ue,omitempty"`
	// It indicates the data volume of the downlink non-GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlNongbrDataVolumeUe int32 `json:"dl_nongbr_data_volume_ue,omitempty"`
	// It indicates the packet delay of the downlink non-GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlNongbrDelayUe int32 `json:"dl_nongbr_delay_ue,omitempty"`
	// It indicates the packet discard rate in percentage of the downlink nonGBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlNongbrPdrUe int32 `json:"dl_nongbr_pdr_ue,omitempty"`
	// It indicates the scheduled throughput of the downlink nonGBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	DlNongbrThroughputUe int32 `json:"dl_nongbr_throughput_ue,omitempty"`
	Ecgi                 *Ecgi `json:"ecgi,omitempty"`
	// It indicates the data volume of the uplink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlGbrDataVolumeUe int32 `json:"ul_gbr_data_volume_ue,omitempty"`
	// It indicates the packet delay of the uplink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlGbrDelayUe int32 `json:"ul_gbr_delay_ue,omitempty"`
	// It indicates the packet discard rate in percentage of the uplink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlGbrPdrUe int32 `json:"ul_gbr_pdr_ue,omitempty"`
	// It indicates the scheduled throughput of the uplink GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlGbrThroughputUe int32 `json:"ul_gbr_throughput_ue,omitempty"`
	// It indicates the data volume of the uplink non-GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlNongbrDataVolumeUe int32 `json:"ul_nongbr_data_volume_ue,omitempty"`
	// It indicates the packet delay of the uplink non-GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlNongbrDelayUe int32 `json:"ul_nongbr_delay_ue,omitempty"`
	// It indicates the packet discard rate in percentage of the uplink nonGBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlNongbrPdrUe int32 `json:"ul_nongbr_pdr_ue,omitempty"`
	// It indicates the scheduled throughput of the uplink non-GBR traffic of a UE, as defined in ETSI TS 136 314 [i.11].
	UlNongbrThroughputUe int32 `json:"ul_nongbr_throughput_ue,omitempty"`
}
