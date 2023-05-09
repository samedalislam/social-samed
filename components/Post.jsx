import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdSms, MdThumbUpOffAlt } from 'react-icons/md'
import { IoMdShareAlt } from 'react-icons/io'

const Post = ({post}) => {
    return (
        <div className="post">
            <div className="top">
                <div className="left">
                    <img src={post?.avatar} alt="" className="avatar" />
                    <div className="info">
                        <p className="author">{post?.author}</p>
                        <span className="timestamp">{post?.timestamp}</span>
                    </div>
                </div>
                <div className="right">
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates suscipit quod ab laborum vero inventore nobis hic dolor. Nihil fuga recusandae et officia.</p>
                <img src={post?.avatar} alt="" />
                <div className="negotiations">
                    <div className="item">
                        <MdThumbUpOffAlt />
                        <p>Like</p>
                    </div>
                    <div className="item">
                        <MdSms />
                        <p>Comment</p>
                    </div>
                    <div className="item">
                        <IoMdShareAlt />
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post