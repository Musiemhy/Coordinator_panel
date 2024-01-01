import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <NotificationImportantIcon className="icon"/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <AccountCircleOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <LogoutIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
