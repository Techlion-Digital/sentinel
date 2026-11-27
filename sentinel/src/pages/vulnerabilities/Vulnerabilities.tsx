import { useState } from "react";
import { useEffect } from "react";
import type { Vulnerability } from "../../types/vulnerability";
import * as vulnerabilitiesApi from "../../api/vulnerabilties.api";

function Vulnerabilities() {
    const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);

    const criticalCount = vulnerabilities.filter(vulnerability => vulnerability.severity === "critical").length;
    const highCount = vulnerabilities.filter(vulnerability => vulnerability.severity === "high").length;
    const mediumCount = vulnerabilities.filter(vulnerability => vulnerability.severity === "medium").length;
    const lowCount = vulnerabilities.filter(vulnerability => vulnerability.severity === "low").length;

    useEffect(() => {
        const fetchVulnerabilities = async () => {
            const vulnerabilities = await vulnerabilitiesApi.getVulnerabilities();
            setVulnerabilities(vulnerabilities);
        }
        fetchVulnerabilities();
    }, []);

    
    return (
        <div className="vulnerabilities-container">
            <h1>Vulnerability Overview</h1>
            <div className="vulnerabilities-overview">
                <div className="vulnerabilities-overview-item">
                    <h2>Critical</h2>
                    <p>{criticalCount}</p>
                </div>
                <div className="vulnerabilities-overview-item">
                    <h2>High</h2>
                    <p>{highCount}</p>
                </div>
                <div className="vulnerabilities-overview-item">
                    <h2>Medium</h2>
                    <p>{mediumCount}</p>
                </div>
                <div className="vulnerabilities-overview-item">
                    <h2>Low</h2>
                    <p>{lowCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Vulnerabilities;