import Sidebar from "@/components/Sidebar"
import Widget from "@/components/Widget"
import Feed from "@/components/Feed"

const Home = ({posts}) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="wrapper">
        <Feed posts={posts} />
        <Widget />
      </div>
    </div>
  )
}
export default Home



// export async function getServerSideProps() {
//   const res = await fetch(``)
//   const posts = await res.json()

//   return {
//     props: { posts }
//   }
// }