import { Routes, Route } from 'react-router';

import Analytics from '../pages/analytics/Analytics';
import Assets from '../pages/assets/Assets';
import Findings from '../pages/findings/Findings';
import Reports from '../pages/reports/Reports';
import Settings from '../pages/settings/Settings';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/findings" element={<Findings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}