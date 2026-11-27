import VulnerabilityOverview from "./components/VulnerabilityOverview";
import VulnerabilityAssignments from "./components/VulnerabilityAssignments";


function Vulnerabilities() {
    return (
        <div className="vulnerabilities-container">
            <VulnerabilityOverview />
            <VulnerabilityAssignments />
        </div>
    )
}

export default Vulnerabilities;