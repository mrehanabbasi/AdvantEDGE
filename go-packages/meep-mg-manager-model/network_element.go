/*
 * EEP Mobility Group Manager Model
 *
 * MEEP Mobility Group Manager Model
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package model

// Network element service mappings
type NetworkElement struct {

	// Network element name
	Name string `json:"name,omitempty"`

	ServiceMaps []MobilityGroupServiceMap `json:"serviceMaps,omitempty"`
}
