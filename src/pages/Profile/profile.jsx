import "../homepage/homepage.css"
import Leftbar from "../../components/leftbar.jsx"
import Profilebtn from "../../components/profilebutton.jsx"
import "./profile.css"
import discord from "../../assets/discord_icon.png"
import insta from "../../assets/Insta_icon.svg"
import pfpic from "../../assets/pfp.jpeg"
import { Link } from "react-router-dom"

const Profile = () => {
    return(
        <>
        <div className="background">
            <div className="leftbar">
                <Leftbar/>
            </div>
            <div className="center_part_song">
                <div className="center_middle">
                    <h1>PROFILE :</h1>
                    <img src={pfpic} alt="profile pic" className="profile_pic"/>
                    <div className="profile_details">
                        <h2>UserName</h2>
                        <div className="Follow_details">
                            <p>Followers:</p>
                            <p>Following:</p>
                        </div>
                        <Link to="/Profile" className="Edit_profile">
                        Edit Profile</Link>
                    </div>
                    <div className="Friend_list">
                        <h2>Friends:</h2>
                        <div className="friends">
                            <img src={pfpic} alt="friend_profile pic" width="100" />
                            <img src={pfpic} alt="friend_profile pic" width="100" />
                            <img src={pfpic} alt="friend_profile pic" width="100" />
                            <img src={pfpic} alt="friend_profile pic" width="100" />

                        </div>
                    </div>
                </div>
             <div className="center_song_right">
                    <Profilebtn/>
                    <div className="Bio_wrapper">
                        <h1>Bio</h1>
                        <div className="Social_wrapper">
                            <img src={discord} alt="Discord account" width="100" height="100" />
                            <p>:affijith </p>
                        </div>
                        <div className="Social_wrapper">
                            <img src={insta} alt="Insta account" width="80" height="80"/>
                            <p>:abjix_</p>
                        </div>
                        <div className="Bio_Text">
                          <p>Feel free to go through my playlists!</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Profile