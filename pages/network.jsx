import Profile from "@/components/Profile"
import Sidebar from "@/components/Sidebar"
import { profiles } from "@/profiles"

const Network = () => {
  return (
    <div className="network">
      <Sidebar />
      <div className="profiles">
        {
          profiles.map((p, i) => <Profile data={p} />)
        }
      </div>
    </div>
  )
}
export default Network