import { Routes, Route } from 'react-router';
import App from './App.tsx'
import Analytics from '../pages/analytics/Analytics.tsx';
import Assets from '../pages/assets/Assets.tsx';
import Findings from '../pages/findings/Findings.tsx';
import Reports from '../pages/reports/Reports.tsx';
import Settings from '../pages/settings/Settings.tsx';
import Vulnerabilities from '../pages/vulnerabilities/Vulnerabilities.tsx';
import Logout from '../pages/logout/Logout.tsx';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Analytics />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="assets" element={<Assets />} />
                <Route path="vulnerabilities" element={<Vulnerabilities />} />
                <Route path="findings" element={<Findings />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
                <Route path="logout" element={<Logout />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;