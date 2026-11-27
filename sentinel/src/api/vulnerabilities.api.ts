export async function getVulnerabilities() {
    const response = await fetch("/mock/vulnerabilities.json");
    return response.json();
}