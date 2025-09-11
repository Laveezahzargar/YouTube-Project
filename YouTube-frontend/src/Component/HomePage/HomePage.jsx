import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = ({ sideNavbar }) => {

  const options = ["All", "Twenty20 Cricket", "Coke Studio", "Comedy", "Football", "Pakistani Dramas", "Music", "Gaming", "Nature", "Comedy", "Nature", "Music", "Gaming", "Movies", "Business", "Dance"];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>

      <div className="homePage_options">
        {
          options.map((item, index) => {
            return (
              <div key={index} className="homePage_option">
                {item}
              </div>
            );
          })
        }
      </div>


      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>

        <Link to={'/watch/432'} className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>


          <div className="youtubeTitleBox">

            <div className="youtubeTitleBoxProfile">
              <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Set Up Your Youtube Thumbnail</div>
              <div className="youtubeChannelName">The Great Stack</div>
              <div className="youtubeVideo_views">313 likes</div>
            </div>

          </div>



        </Link>

        <Link to={'/watch/432'} className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>


          <div className="youtubeTitleBox">

            <div className="youtubeTitleBoxProfile">
              <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Set Up Your Youtube Thumbnail</div>
              <div className="youtubeChannelName">The Great Stack</div>
              <div className="youtubeVideo_views">313 likes</div>
            </div>

          </div>



        </Link>

        <Link to={'/watch/432'} className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>


          <div className="youtubeTitleBox">

            <div className="youtubeTitleBoxProfile">
              <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Set Up Your Youtube Thumbnail</div>
              <div className="youtubeChannelName">The Great Stack</div>
              <div className="youtubeVideo_views">313 likes</div>
            </div>

          </div>



        </Link>

         <Link to={'/watch/432'} className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>


          <div className="youtubeTitleBox">

            <div className="youtubeTitleBoxProfile">
              <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Set Up Your Youtube Thumbnail</div>
              <div className="youtubeChannelName">The Great Stack</div>
              <div className="youtubeVideo_views">313 likes</div>
            </div>

          </div>



        </Link>

        <Link to={'/watch/432'} className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>


          <div className="youtubeTitleBox">

            <div className="youtubeTitleBoxProfile">
              <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Set Up Your Youtube Thumbnail</div>
              <div className="youtubeChannelName">The Great Stack</div>
              <div className="youtubeVideo_views">313 likes</div>
            </div>

          </div>



        </Link>

        <Link to={'/watch/432'} className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>


          <div className="youtubeTitleBox">

            <div className="youtubeTitleBoxProfile">
              <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="Profile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Set Up Your Youtube Thumbnail</div>
              <div className="youtubeChannelName">The Great Stack</div>
              <div className="youtubeVideo_views">313 likes</div>
            </div>

          </div>



        </Link>



      </div>


    </div>
  )
}

export default HomePage