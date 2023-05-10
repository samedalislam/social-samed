const Profile = ({ data }) => {
    return (
        <div className="profile">
            <div className="poster">
                <div className="banner">
                    <img src={data?.avatar} alt="" className="banner-img" />
                </div>
                <div className="profile-avatar row-avatar">

                    <img src={data?.avatar} alt="" className="profile-avatar" />
                </div>
            </div>
            <p className="username">{data?.name}</p>
            <p className="bio">{data?.bio}</p>
            <button className="btn">Connect</button>
        </div>
    )
}
export default Profile