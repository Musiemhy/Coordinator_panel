import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

const Widget = ( {type} ) => {
  let data;

    switch(type){

      case "user":
        data = {
          title: "USERS",
          counter: "21",
          link: "See all users",
          icon: <PersonOutlinedIcon className="icon" style={{backgroundColor:"lightblue", color:"blue"}}/>,
        };
      break;

      case "classrooms":
        data = {
          title: "CLASSROOMS",
          counter:"21",
          link: "See all Classrooms",
          icon: <RoomPreferencesIcon className="icon" style={{backgroundColor:"lightblue",color:"blue"}}/>,
        };
      break;

      case "requests":
        data = {
          title: "BOOKING REQUESTS",
          counter:"21",
          link: "See all Booking requests",
          icon: <BookOnlineIcon className="icon" style={{backgroundColor:"lightblue",color:"blue"}}/>,
        };
      break;

      case "feedbacks":
        data = {
          title: "FEEDBACKS",
          counter:"21",
          link: "See all Feedbacks",
          icon: <FeedbackIcon className="icon" style={{backgroundColor:"lightblue", color:"blue"}}/>,
        };
      break;

    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.counter}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpIcon />
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget