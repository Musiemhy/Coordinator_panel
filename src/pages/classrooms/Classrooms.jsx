import "./Classrooms.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const Classrooms = () => {
  return (
    <div className='classrooms'> 
       <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      </div>
    </div>
  )
}

export default Classrooms
