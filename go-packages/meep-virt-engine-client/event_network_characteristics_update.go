/*
 * MEEP Virtualization Engine REST API
 *
 * MEEP Virtualization Engine REST API
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

// Network Characteristics update Event object
type EventNetworkCharacteristicsUpdate struct {

	// Name of the network element to be updated
	ElementName string `json:"elementName,omitempty"`

	// Type of the network element to be updated
	ElementType string `json:"elementType,omitempty"`

	// Latency in ms
	Latency int32 `json:"latency,omitempty"`

	// Latency variation in ms
	LatencyVariation int32 `json:"latencyVariation,omitempty"`

	// Throughput limit
	Throughput int32 `json:"throughput,omitempty"`

	// Packet loss percentage
	PacketLoss float64 `json:"packetLoss,omitempty"`
}
