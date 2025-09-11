import React, { useState } from 'react'
import './Video.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { Link } from 'react-router-dom';
const Video = () => {

    const [message, setMessage] = useState("");

    return (
        <div className='video'>

            <div className="videoPostSection">

                <div className="video_youtube">

                    <video width={400} controls autoPlay className='video_youtube_video'>

                        <source src={"https://res.cloudinary.com/mashuudanny/video/upload/v1720350210/xo81mxhcvjckkw1tdp62.mp4"} type='video/mp4' />
                        <source src={"https://res.cloudinary.com/mashuudanny/video/upload/v1720350210/xo81mxhcvjckkw1tdp62.mp4"} type='video/webm' />

                        Your browser does not support the video tag.
                    </video>

                </div>

                <div className="video_youtubeAbout">

                    <div className="video_uTubeTitle">{"Javascript for beginners"}</div>

                    <div className="youtube_video_ProfileBlock">

                        <div className="youtube_video_ProfileBlock_left">

                            <Link to={'/user/1234'} className="youtube_video_ProfileBlock_left_img">
                                <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="user" className="youtube_video_ProfileBlock_left_image" />
                            </Link>

                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName">{"User_1"}</div>
                                <div className="youtubePostProfileSubs">{"2024-07-09"}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">

                            <div className="youtube_video_likeBlock_Like">
                                <ThumbUpOutlinedIcon />
                                <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
                            </div>

                            <div className="youtubeVideoDivider"></div>

                            <div className="youtube_video_likeBlock_Like">
                                <ThumbDownOutlinedIcon />
                                <div className="youtube_video_likeBlock_NoOfLikes">{0}</div>
                            </div>


                        </div>

                    </div>

                    <div className="youtube_video_About">
                        <div>2024-09-30</div>
                        <div>This is cool video.</div>
                    </div>

                </div>

                <div className="youtubeCommentSection">

                    <div className="youtubeCommentSectionTitle">2 Comments</div>

                    <div className="youtubeSelfComment">
                        <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="user" className="video_youtubeSelfCommentProfile" />

                        <div className="addAComment">

                            <input type="text" className="addACommentInput" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Add a comment ..' />

                            <div className="cancelSubmitComment">
                                <div className="cancelComment">Cancel</div>
                                <div className="cancelComment">Comment</div>
                            </div>

                        </div>
                    </div>

                    <div className="youtubeOthersComments">

                        <div className="youtubeSelfComment">

                            <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="user" className="video_youtubeSelfCommentProfile" />

                            <div className="others_commentSection">

                                <div className="others_commentSectionHeader">
                                    <div className="channelName_comment">Username</div>
                                    <div className="commentTimingOthers">2024-09-03</div>
                                </div>

                                <div className="otherCommentSectionComment">
                                    This is the cool web app project !
                                </div>

                            </div>
                        </div>

                        <div className="youtubeSelfComment">

                            <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="user" className="video_youtubeSelfCommentProfile" />

                            <div className="others_commentSection">

                                <div className="others_commentSectionHeader">
                                    <div className="channelName_comment">Username</div>
                                    <div className="commentTimingOthers">2024-09-03</div>
                                </div>

                                <div className="otherCommentSectionComment">
                                    Nice .. keep it up !
                                </div>

                            </div>
                        </div>

                        <div className="youtubeSelfComment">

                            <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="user" className="video_youtubeSelfCommentProfile" />

                            <div className="others_commentSection">

                                <div className="others_commentSectionHeader">
                                    <div className="channelName_comment">Username</div>
                                    <div className="commentTimingOthers">2024-09-03</div>
                                </div>

                                <div className="otherCommentSectionComment">
                                    Best tutorial ever
                                </div>

                            </div>
                        </div>

                        <div className="youtubeSelfComment">

                            <img src="https://cdn.vectorstock.com/i/1000v/45/36/cute-boy-in-glasses-isolated-on-white-background-vector-50514536.jpg" alt="user" className="video_youtubeSelfCommentProfile" />

                            <div className="others_commentSection">

                                <div className="others_commentSectionHeader">
                                    <div className="channelName_comment">Username</div>
                                    <div className="commentTimingOthers">2024-09-03</div>
                                </div>

                                <div className="otherCommentSectionComment">
                                    WOW ! Amazing project...
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="videoSuggestions">

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">

                    <div className="video_suggestion_thumbnail">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-thumbnail-design-template-a4beff0bd4b978f3747922e15a2c66ae_screen.jpg?ts=1591096103" className='video_suggestion_thumbnail_img' />
                    </div>

                    <div className="video_suggestion_About">
                        <div className="video_suggestions_About_Title">T20 Worldcup india vs usa last 5 overs #cricket #india</div>
                        <div className="video_suggestions_About_Profile">Cricket 320</div>
                        <div className="video_suggestions_About_Profile">136k views . 1 day ago</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Video