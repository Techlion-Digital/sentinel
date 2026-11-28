import { VulnerabilityProvider } from "./context/VulnerabilityContext";
import VulnerabilityOverview from "./components/VulnerabilityOverview";
import VulnerabilityAssignments from "./components/VulnerabilityAssignments";
import VulnerabilityProgress from "./components/VulnerabilityProgress";
import VulnerabilityExposure from "./components/VulnerabilityExposure";

function Vulnerabilities() {
    return (
        <div className="vulnerabilities-container">
            <h1>Vulnerability Intelligence</h1>
            <p className="subtitle">Security posture and remediation overview</p>
            <VulnerabilityProvider>
                <VulnerabilityProgress />
                <VulnerabilityExposure />
                <VulnerabilityAssignments />
            </VulnerabilityProvider>
        </div>
    )
}

export default Vulnerabilities;