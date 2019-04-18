package helm

import (
	"fmt"
	log "github.com/InterDigitalInc/AdvantEDGE/go-apps/meep-virt-engine/log"
)

const (
	StateIdle       = "IDLE"
	StateInstalling = "INSTALLING"
	StateDeleting   = "DELETING"
)

var state string = StateIdle

func GetReleasesName() ([]Release, error) {
	return getReleasesName()
}

func GetReleases() ([]Release, error) {
	return getReleases()
}

func InstallCharts(charts []Chart) error {
	if state == StateIdle {
		state = StateInstalling
		go func() {
			log.Debug("Installing ", len(charts), " Charts...")
			installCharts(charts)
			log.Debug("Charts installed (", len(charts), ")")
			state = StateIdle
		}()
		return nil
	}
	err := fmt.Errorf("Service busy [%s]", state)
	return err
}

func DeleteReleases(charts []Chart) error {
	if state == StateIdle {
		state = StateDeleting
		go func() {
			log.Debug("Deleting ", len(charts), " Releases...")
			deleteReleases(charts)
			log.Debug("Releases deleted (", len(charts), ")")
			state = StateIdle
		}()
		return nil
	}
	err := fmt.Errorf("Service busy [%s]", state)
	return err
}

