import { MdImage, MdVideoCall, MdVideoLibrary } from "react-icons/md"

const CreateNewPost = () => {
  return (
    <div className="createNewPost">
      <div className="top">
        <img src="https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar" />
        <input type="text" placeholder="Start a post" />
      </div>
      <div className="divider"></div>
      <div className="bottom">
        <div className="bottom-item">
          <MdVideoCall />
          <p>Live</p>
        </div>
        <div className="bottom-item">
        <MdImage />
          <p>Photo</p>
        </div>
        <div className="bottom-item">
        <MdVideoLibrary />
          <p>Video</p>
        </div>
      </div>
    </div>
  )
}
export default CreateNewPost