import VulnerabilityOverview from "./components/VulnerabilityOverview";
import VulnerabilityAssignments from "./components/VulnerabilityAssignments";
import { VulnerabilityProvider } from "./context/VulnerabilityContext";


function Vulnerabilities() {
    return (
        <div className="vulnerabilities-container">
            <VulnerabilityProvider>
                <VulnerabilityOverview />
                <VulnerabilityAssignments />
            </VulnerabilityProvider>
        </div>
    )
}

export default Vulnerabilities;