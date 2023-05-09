import { Fragment } from 'react'
import { profiles } from '../profiles'

const Widget = () => {
  const d = new Date()
  return (
    <div className="widget">
      <div className="follow">
        <h3>Who to Follow</h3>
        {
          profiles.map((p, i) => (
            <Fragment key={i}>
              <div className="follow-item">
                <img src={p.avatar} alt="" className="avatar" />
                <div className="info">
                  <span className="username">{p.name}</span>
                  <p className="bio">{p.bio}</p>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            </Fragment>
          ))
        }
      </div>
      <div className="about-company">
        {d.getFullYear()}. All rights reseverd to Samed.
      </div>
    </div>
  )
}
export default Widget