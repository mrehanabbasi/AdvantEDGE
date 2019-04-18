/*
 * MEEP Controller REST API
 *
 * MEEP Controller REST API
 *
 * API version: 1.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package model

type PodStatus struct {

	// Pod name
	Name string `json:"name,omitempty"`

	// Pod namespace
	Namespace string `json:"namespace,omitempty"`

	// Pod process name
	MeepApp string `json:"meepApp,omitempty"`

	// Pod origin(core, scenario)
	MeepOrigin string `json:"meepOrigin,omitempty"`

	// Pod scenario name
	MeepScenario string `json:"meepScenario,omitempty"`

	// Pod phase
	Phase string `json:"phase,omitempty"`

	// Pod initialized (true/false)
	PodInitialized string `json:"podInitialized,omitempty"`

	// Pod ready (true/false)
	PodReady string `json:"podReady,omitempty"`

	// Pod scheduled (true/false)
	PodScheduled string `json:"podScheduled,omitempty"`

	// Pod unschedulable (true/false)
	PodUnschedulable string `json:"podUnschedulable,omitempty"`

	// Pod error message
	PodConditionError string `json:"podConditionError,omitempty"`

	// Failed container error message
	ContainerStatusesMsg string `json:"containerStatusesMsg,omitempty"`

	// Number of containers that are up
	NbOkContainers string `json:"nbOkContainers,omitempty"`

	// Number of total containers in the pod
	NbTotalContainers string `json:"nbTotalContainers,omitempty"`

	// Number of container failures leading to pod restarts
	NbPodRestart string `json:"nbPodRestart,omitempty"`

	// State that is mapping the kubernetes api state
	LogicalState string `json:"logicalState,omitempty"`

	// Pod creation time
	StartTime string `json:"startTime,omitempty"`
}
