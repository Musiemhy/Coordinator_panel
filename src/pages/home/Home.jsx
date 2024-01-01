import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type=""/>
          <Widget type=""/>
          <Widget type=""/>
          <Widget type=""/>
        </div>
      </div>
    </div>
  )
}

export default Home
