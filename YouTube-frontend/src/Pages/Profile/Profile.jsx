import React from 'react'
import './Profile.css'
import SideNavbar from '../../Component/SideNavbar/SideNavbar'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const Profile = ({ sideNavbar }) => {
  return (
    <div className='profile'>
      <SideNavbar sideNavbar={sideNavbar} />

      <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

        <div className="profile_top_section">

          <div className="profile_top_section_profile">
            <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" className="profile_top_section_img" />
          </div>

          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">CodingHunger</div>
            <div className="profile_top_section_info">@Codinghunger . 4 videos</div>
            <div className="profile_top_section_info">Coding-Hunger</div>
          </div>

        </div>

        <div className="profile_videos">

          <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon sx={{ fontSize: "34px" }} /></div>

          <div className="profileVideos">

            <Link to={'/watch/432'} className="profileVideo_block">

              <div className="profileVideo_block_thumbnail">
                <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Learn to code..</div>
                <div className="profileVideo_block_detail_about">created at 2024-09-11</div>
              </div>

            </Link>

            <Link to={'/watch/432'} className="profileVideo_block">

              <div className="profileVideo_block_thumbnail">
                <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Learn to code..</div>
                <div className="profileVideo_block_detail_about">created at 2024-09-11</div>
              </div>

            </Link>

            <Link to={'/watch/432'} className="profileVideo_block">

              <div className="profileVideo_block_thumbnail">
                <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Learn to code..</div>
                <div className="profileVideo_block_detail_about">created at 2024-09-11</div>
              </div>

            </Link>

            <Link to={'/watch/432'} className="profileVideo_block">

              <div className="profileVideo_block_thumbnail">
                <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" className="profileVideo_block_thumbnail_img" />
              </div>

              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">Learn to code..</div>
                <div className="profileVideo_block_detail_about">created at 2024-09-11</div>
              </div>

            </Link>


          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile