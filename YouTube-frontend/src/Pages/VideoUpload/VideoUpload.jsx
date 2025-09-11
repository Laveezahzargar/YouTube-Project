import React, { useState } from 'react'
import './VideoUpload.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const VideoUpload = () => {

    const [loader, setLoader] = useState(false);

    const [uploadVideoModal, setUploadVideoModal] = useState({
        "title": "",
        "description": "",
        "videotype": "",
        "thumbnail": "",
        "videolink": ""
    })

    const handleInputUploadVideoModal = (event, name) => {
        setUploadVideoModal(
            {
                ...uploadVideoModal, [name]: event.target.value
            }
        )
    }

    const uploadImage = async (e, type) => {
        setLoader(true)
        const files = e.target.files;
        const data = new FormData();
        console.log("Uploading...");
        data.append('file', files[0]);
        data.append('upload_preset', 'YouTube-Clone');
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/drkwlqaky/${type}/upload`, data);
            const url = response.data.url;

            setLoader(false);

            let val = type;
            if (type === "image") { val = "thumbnail" } else { val = "videolink" }
            setUploadVideoModal(
                {
                    ...uploadVideoModal, [val]: url
                }
            )

        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    }

    return (
        <div className='videoUpload'>

            <div className="uploadBox">

                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" value={uploadVideoModal.title} onChange={(e) => { handleInputUploadVideoModal(e, 'title') }} placeholder='Title Of Video' className="uploadFormInputs" />
                    <input type="text" value={uploadVideoModal.description} onChange={(e) => { handleInputUploadVideoModal(e, 'description') }} placeholder='Description' className="uploadFormInputs" />
                    <input type="text" value={uploadVideoModal.videotype} onChange={(e) => { handleInputUploadVideoModal(e, 'videotype') }} placeholder='Category' className="uploadFormInputs" />
                    <div>Thumbnail<input type='file' accept='image/*' onChange={(e) => { uploadImage(e, "image") }} /></div>
                    <div>Video<input type='file' accept='video/mp4, video/webm, video/*' onChange={(e) => { uploadImage(e, "video") }} /></div>
                    {
                        loader && <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    }
                </div>

                <div className="uploadBtns">
                    <div className="uploadBtn-form">Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>

            </div>
        </div>
    )
}

export default VideoUpload