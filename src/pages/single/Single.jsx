import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
            <div className="left">
                <h1 className="title">Information</h1>
                <div className="item">
                    <img src="" alt="profile" className="itemImg"/>
                    <div className="details">
                        <h1 className="itemTitle">Full Name</h1>
                        <div className="detailItem">
                            <span className="itemKey">Last Name: </span>
                            <span className="itemValue"></span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Gender: </span>
                            <span className="itemValue"></span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Age: </span>
                            <span className="itemValue"></span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Phone: </span>
                            <span className="itemValue"></span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Email: </span>
                            <span className="itemValue"></span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Campus: </span>
                            <span className="itemValue"></span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">Account Type: </span>
                            <span className="itemValue"></span>
                        </div>
                        <div className="detailItem">
                            <span className="itemKey">ID Number: </span>
                            <span className="itemValue"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single
