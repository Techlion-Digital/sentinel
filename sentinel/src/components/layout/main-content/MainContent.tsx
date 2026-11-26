import './main-content.css';
import { Outlet } from 'react-router';

function MainContent() {
    return (
        <div id="main-content" className="main-content">
            <Outlet />
        </div>
    );
}

export default MainContent;
