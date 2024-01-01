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

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'> <span className='logo'> UniClassFinder</span></div>
      <hr/>
      <div className='center'> 
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <RoomPreferencesIcon className="icon" />
            <span>Classroom management</span>
          </li>
          <li>
            <BookOnlineIcon className="icon" />
            <span>Booking Request</span>
          </li>
          <li>
            <MeetingRoomIcon className="icon" />
            <span>Classroom Details</span>
          </li>
          <li>
            <AdminPanelSettingsIcon className="icon" />
            <span>User Management</span>
          </li>
          <li>
            <FeedbackIcon className="icon" />
            <span>Feedback and Maintenance:</span>
          </li>
          <li>
            <NotificationImportantIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar