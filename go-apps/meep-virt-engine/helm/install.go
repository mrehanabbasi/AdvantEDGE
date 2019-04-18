package helm

import (
	"errors"
	"os/exec"
	"strings"
	log "github.com/InterDigitalInc/AdvantEDGE/go-apps/meep-virt-engine/log"
)

func installCharts(charts []Chart) error {
	var err error

	err = ensureReleases(charts)
	if err != nil {
		return err
	}

	err = install(charts)
	if err != nil {
		// Cleanup release
		cleanReleases(charts)
	}
	return err
}

func ensureReleases(charts []Chart) error {
	// ensure that releases do not already exist
	releases, err := GetReleasesName()
	for _, c := range charts {
		for _, r := range releases {
			if c.ReleaseName == r.Name {
				err = errors.New("Release [" + c.ReleaseName + "] already exists")
				log.Error(err)
				return err
			}
		}
	}
	return nil
}

func install(charts []Chart) error {
	for _, c := range charts {
		var cmd *exec.Cmd
		if c.Type == "MEEP-TYPE" {
			cmd = exec.Command("helm", "install", "--name", c.ReleaseName, c.Location, "--replace")
		} else { //c.Type == "USERCHART-TYPE"
			if strings.Trim(c.AlternateValues, " ") == "" {
				cmd = exec.Command("helm", "install", "--name", c.ReleaseName, c.Location, "--replace")
			} else {
				cmd = exec.Command("helm", "install", "--name", c.ReleaseName, c.Location, "-f", c.AlternateValues, "--replace")
			}
		}
		_, err := cmd.CombinedOutput()
		if err != nil {
			err = errors.New("Failed to install Release [" + c.ReleaseName + "] at " + c.Location)
			log.Error(err)
			return err
		}
	}
	return nil
}

func cleanReleases(charts []Chart) {
	var toClean []Chart
	var cnt int
	releases, _ := GetReleasesName()
	// ensure that releases do not exist

	for _, c := range charts {
		for _, r := range releases {
			if c.ReleaseName == r.Name {
				toClean = append(toClean, c)
				cnt++
			}
		}
	}

	if cnt > 0 {
		DeleteReleases(toClean)
	}
}

