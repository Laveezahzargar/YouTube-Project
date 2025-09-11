import React from 'react'
import './SideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';

const SideNavbar = ({sideNavbar}) => {
    return (
        <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>

            <div className="home_sideNavbarTop">

                <div className={`home_sideNavbarTopOption`}>
                    <HomeIcon />
                    <div className="home_sideNavbarTopOptionTitle">Home</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <VideoCallIcon />
                    <div className="home_sideNavbarTopOptionTitle">Shorts</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <SubscriptionsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Subscription</div>
                </div>

            </div>

            <div className="home_sideNavbarMiddle">

                <div className={`home_sideNavbarTopOption`}>
                    <div className="home_sideNavbarTopOptionTitle">You</div>
                    <ChevronRightIcon />
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <RecentActorsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <HistoryIcon />
                    <div className="home_sideNavbarTopOptionTitle">History</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <PlaylistPlayIcon />
                    <div className="home_sideNavbarTopOptionTitle">Playlists</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <SmartDisplayOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your videos</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <WatchLaterOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Watch later</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <ThumbUpOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Liked videos</div>
                </div>

                <div className={`home_sideNavbarTopOption`}>
                    <ContentCutOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your clips</div>
                </div>

            </div>

            <div className="home_sideNavbarMiddle">

                <div className="home_sideNavbarTopOption">
                    <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
                </div>

                <div className="home_sideNavbarTopOption">
                    <img src="https://th.bing.com/th/id/R.d97c79869c7d6cf33df2af5ab613b6f4?rik=KozghCIJNk2sUg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fal-jazeera-png-al-jazeera-logo-1431.png&ehk=7XY7g%2bPfru2Py2oqE3pRjzx4ICFX8jAgxdY64NUrg4s%3d&risl=&pid=ImgRaw&r=0" className="home_sideNavbar_ImgLogo" />
                    <div className="home_sideNavbarTopOptionTitle">Al Jazeera</div>
                </div>

                <div className="home_sideNavbarTopOption">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.E5mSqC49v9xOkjgXwmx_JQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" className="home_sideNavbar_ImgLogo" />
                    <div className="home_sideNavbarTopOptionTitle">Udemy</div>
                </div>

                <div className="home_sideNavbarTopOption">
                    <img src="https://cdn-ilabddl.nitrocdn.com/USCxxQZnHTkPVuPZeWHubPlLKOvmEbLS/assets/images/optimized/rev-6fc4dd8/businessempiremedia.com/wp-content/uploads/2024/08/91MI9V2Y7L.png" className="home_sideNavbar_ImgLogo" />
                    <div className="home_sideNavbarTopOptionTitle">NDTV</div>
                </div>

            </div>
        </div>
    )
}
export default SideNavbar
