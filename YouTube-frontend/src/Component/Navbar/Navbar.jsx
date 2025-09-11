import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';


const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
    const [userPic, setUserPic] = useState("https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg");
    const [navbarModal, setNavbarModal] = useState(false);
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);


    const handleClickModal = () => {
        setNavbarModal(prev => !prev);
    }
    const sideNavbarFunc = () => {
        setSideNavbarFunc(!sideNavbar);
    }
    const handleprofile = () => {
        navigate('/user/1234')
        setNavbarModal(false)
    }
    const setLoginModal = () => {
        setLogin(false);
    }

    const onclickOfPopUpOption = (button) => {

        setNavbarModal(false);

        if (button === 'login') {
            setLogin(true);
        }
        else {

        }
    }

    return (
        <div className='navbar'>

            <div className="navbar-left">

                <div className="navbarHamberger" onClick={() => sideNavbarFunc()}>
                    <MenuIcon sx={{ color: "white" }} />
                </div>

                <Link to={'/'} className="navbar_youtubeImg">
                    <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
                    <div className="navbar_utubeTitle">YouTube</div>
                </Link>

            </div>

            <div className="navbar-middle">

                <div className="navbar_searchBox">
                    <input type='text' placeholder='Search' className='navbar_searchBoxInput' />

                    <div className="navbar_searchIconBox">
                        <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
                    </div>

                </div>

                <div className="navbar_mike">
                    <KeyboardVoiceIcon sx={{ color: "white" }} />
                </div>

            </div>

            <div className="navbar-right">

                <Link to={'/123/upload'}>
                    <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                </Link>
                <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                <img onClick={() => handleClickModal()} className="navbar-right-logo" src={userPic} alt="Logo" />

                {
                    navbarModal &&
                    <div className="navbar-modal">
                        <div className="navbar-modal-option" onClick={() => { handleprofile() }} >Profile</div>
                        <div className="navbar-modal-option" onClick={() => { onclickOfPopUpOption("logout") }} >Logout</div>
                        <div className="navbar-modal-option" onClick={() => { onclickOfPopUpOption("login") }} >Login</div>
                    </div>
                }
            </div>

            {
                login && <Login setLoginModal={setLoginModal} />
            }

        </div>
    )
}

export default Navbar

