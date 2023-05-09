import CreateNewPost from '../components/CreateNewPost'
import Post from './Post'
import { posts } from '@/posts'

const Feed = ({ }) => {
  return (
    <div className="feed">
      <CreateNewPost />
      {
        posts.map((v, i) => <Post key={i} post={v}/>)
      }
      {/* <Post /> */}
    </div>
  )
}
export default Feed