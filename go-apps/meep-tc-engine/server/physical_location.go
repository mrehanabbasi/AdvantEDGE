/*
 * MEEP TC controller API
 *
 * This is the MEEP TC controller API
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

// Physical location object
type PhysicalLocation struct {

	// Unique physical location ID
	Id string `json:"id,omitempty"`

	// Physical location name
	Name string `json:"name,omitempty"`

	// Physical location type
	Type_ string `json:"type,omitempty"`

	// true: Physical location is external to MEEP false: Physical location is internal to MEEP
	IsExternal bool `json:"isExternal,omitempty"`

	NetworkLocationsInRange []string `json:"networkLocationsInRange,omitempty"`

	Processes []Process `json:"processes,omitempty"`
}
