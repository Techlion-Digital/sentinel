import './side-bar-menu.css';
import { Link } from 'react-router';
import dashboardIcon from '../../../assets/dashboard.svg';
import vulnerabilitiesIcon from '../../../assets/vulnerabilities.svg';
import reportsIcon from '../../../assets/reports.svg';
import findingsIcon from '../../../assets/findings.svg';
import assetsIcon from '../../../assets/assets.svg';


function SideBarMenu() {
    return (
        <div id="side-bar-menu" className="side-bar-menu">
            <ul>
                <li>
                    <Link to="/">
                        <img src={dashboardIcon} alt="" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/vulnerabilities">
                        <img src={vulnerabilitiesIcon} alt="" />
                        Vulnerabilities
                    </Link>
                </li>
                <li>
                    <Link to="/reports">
                        <img src={reportsIcon} alt="" />
                        Reports
                    </Link>
                </li>
                <li>
                    <Link to="/findings">
                        <img src={findingsIcon} alt="" />
                        Findings
                    </Link>
                </li>
                <li>
                    <Link to="/assets">
                        <img src={assetsIcon} alt="" />
                        Assets
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBarMenu;
