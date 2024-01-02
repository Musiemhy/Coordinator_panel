import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'> 
      <Link to="/" style={{textDecoration: "none"}}>
        <span className='logo'> UniClassFinder</span>
      </Link>
      </div>
      <hr/>
      <div className='center'> 
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/classrooms" style={{textDecoration: "none"}}>
            <li>
              <RoomPreferencesIcon className="icon" />
              <span>Classroom management</span>
            </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <BookOnlineIcon className="icon" />
              <span>Booking Request</span>
            </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <MeetingRoomIcon className="icon" />
              <span>Classroom Details</span>
            </li>
          </Link>
          <Link to="/list" style={{textDecoration: "none"}}>
            <li>
              <AdminPanelSettingsIcon className="icon" />
              <span>User Management</span>
            </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <FeedbackIcon className="icon" />
              <span>Feedback and Maintenance:</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <NotificationImportantIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar