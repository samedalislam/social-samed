import { useRouter } from 'next/router'
import { MdBookmark, MdChat, MdOutlineElectricBolt, MdOutlineHome, MdOutlineNotifications, MdOutlinePeople, MdOutlinePersonAdd, MdSocialDistance } from 'react-icons/md'
import { FaHandsHelping } from 'react-icons/fa'

const Header = () => {
    const router = useRouter()
    return (
        <header className="header">
            <div className="logo" onClick={() => router.push('/')}>
                <MdSocialDistance />
                <p>SOCIAL</p>
            </div>
            <nav>
                <div className="item">
                    <MdOutlineHome />
                    <p>Home</p>
                </div>
                <div className="item">
                    <MdOutlineElectricBolt />
                    <p>Trending</p>
                </div>
                <div className="item">
                    <MdOutlinePersonAdd />
                    <p>Network</p>
                </div>
                <div className="item">
                    <MdOutlinePeople />
                    <p>Groups</p>
                </div>
                <div className="item">
                    <MdOutlineNotifications />
                    <p>Notifications</p>
                </div>
            </nav>
            <div className="others">
                {/* Donate / Bookmarks / Messenger / Avatar */}
                <div className="more-item">
                <FaHandsHelping />
                </div>
                <div className="more-item">
                <MdChat />
                </div>
                <div className="more-item">
                <MdBookmark />
                </div>
                <img src="https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Avatar" className="avatar" />
            </div>
        </header>
    )
}
export default Header