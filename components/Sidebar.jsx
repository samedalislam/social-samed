import { MdArrowDropDown, MdHeartBroken, MdHome, MdPeople, MdPersonAdd, MdTag, MdTask, MdTrendingUp, MdVideoLibrary } from "react-icons/md"
import { BsTreeFill } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <MdHome />
        <p>Home</p>
      </div>
      <div className="sidebar-item">
        <MdPersonAdd />
        <p>Network</p>
      </div>
      <div className="sidebar-item">
        <MdPeople />
        <p>Trending</p>
      </div>
      <div className="sidebar-item">
        <MdTrendingUp />
        <p>Analytics</p>
      </div>
      <div className="sidebar-item">
        <MdVideoLibrary />
        <p>Watch</p>
      </div>
      <div className="sidebar-item">
        <MdTask />
        <p>Tasks</p>
      </div>
      <div className="sidebar-item">
        <MdHeartBroken />
        <p>Donate</p>
      </div>
      <div className="sidebar-item">
        <MdTag />
        <p>Explore</p>
      </div>
      <div className="sidebar-item">
        <BsTreeFill />
        <p>Plantation</p>
      </div>
      <div className="sidebar-item">
        <MdArrowDropDown />
        <p>More</p>
      </div>
    </div>
  )
}
export default Sidebar