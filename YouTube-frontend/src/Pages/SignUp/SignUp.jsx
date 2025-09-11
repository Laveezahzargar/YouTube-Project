import React, { useState } from 'react'
import './SignUp.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { Password } from '@mui/icons-material';
import axios from 'axios';

const SignUp = () => {

  const [uplodedImageUrl, setUploadedImageUrl] = useState("https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg");

  const [signUpModal, setSignUpModal] = useState({
    "Channel_Name": "",
    "UserName": "",
    "Password": "",
    "About_Your_Channel": "",
    "Profile_Pic": uplodedImageUrl
  })

  const handleOnChangeInputs = (event, name) => {
    setSignUpModal({
      ...signUpModal, [name]: event.target.value
    })
  }


  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    console.log("Uploading...");
    data.append('file', files[0]);
    data.append('upload_preset', 'YouTube-Clone');
    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/drkwlqaky/image/upload", data);
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      setSignUpModal({
        ...signUpModal, "Profile_Pic": imageUrl
      })
    } catch (error) {
      console.log(error);
    }
  }
console.log(signUpModal)
  return (
    <div className='signUp'>

      <div className="signup_card">

        <div className="signUp_title">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          SignUp
        </div>

        <div className="signUp_Inputs">

          <input type="text" value={signUpModal.Channel_Name} onChange={(e) => { handleOnChangeInputs(e, "Channel_Name") }} placeholder='Channel Name' className="signUp_Inputs_inp" />
          <input type="text" value={signUpModal.UserName} onChange={(e) => { handleOnChangeInputs(e, "UserName") }} placeholder='UserName' className="signUp_Inputs_inp" />
          <input type="password" value={signUpModal.Password} onChange={(e) => { handleOnChangeInputs(e, "Password") }} placeholder='Password' className="signUp_Inputs_inp" />
          <input type="text" value={signUpModal.About_Your_Channel} onChange={(e) => { handleOnChangeInputs(e, "About_Your_Channel") }} placeholder='About Your Channel' className="signUp_Inputs_inp" />

          <div className="image_upload_signup">

            <input type='file' onChange={(e) => { uploadImage(e) }} />

            <div className="image_upload_signup_div">
              <img src={uplodedImageUrl} className="image_default_signUp" />
            </div>

          </div>

          <div className="signUpBtns">

            <div className="signUpBtn">SignUp</div>
            <Link to={'/'} className="signUpBtn">Home Page</Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp