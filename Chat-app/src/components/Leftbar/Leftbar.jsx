import React from 'react'
import './leftbar.css'
import assets from '../../assets/assets'

const Leftbar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder='Search here..' />

        </div>
        </div>
        <div className="ls-list">
          {Array(12).fill("").map((item,index)=>(
            <div  key={index} className="friends">
            <img src={assets.profile_img} alt="" />
            <div>
              <p>Hariharan</p>
              <span>Hello , how are u</span>
            </div>
          </div>
          ))}
        </div>
      

    </div>
  )
}

export default Leftbar