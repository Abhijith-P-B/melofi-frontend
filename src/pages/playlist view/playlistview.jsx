import "../homepage/homepage.css"
import Leftbar from "../../components/leftbar.jsx"
import Logo from "../../components/logo.jsx"
import Rightbar from "../../components/rightbar.jsx"
import Searchbar from "../../components/searchbar.jsx"
import PlaylistHomeCard from "../../components/playlisthome.jsx"
import Mockplaylistdata from "../../data/mockPlaylistdata.jsx"
import Mockartistdata from "../../data/mockArtistsdata.jsx"
import SongCardSmall from "../../components/songcardsmall.jsx"
import Mocksongdata from "../../data/mocksongdata.jsx"
import "./playlistview.css"
import Profilebtn from "../../components/profilebutton.jsx"
import { useParams } from "react-router-dom"
import SongCardLong from "../../components/songcardlong.jsx"
const Playlistview = () => {
    const {id} =useParams();
    
    const playlist =Mockplaylistdata.find((p) => p.id ===Number(id));
    if (!playlist) {
        return <h2>Playlist Not Found!</h2>
    }

    return (
        <>
        <div className="background">
            <div className="leftbar">
                <Leftbar/>
            </div>
            <div className="center_part_play">
                <div className="play_top">
                        <div className="Playdetails_wrapper">
                            <img src={playlist.PlaylistBanner} alt={playlist.PlaylistName} className="playlist_img"/>
                            <h1 className="playlist_name"> {playlist.PlaylistName} </h1>
                        </div>
                        <Profilebtn/>
                </div>
                <div className="Songs_long">
                 <div> </div>
                 <SongCardLong/>
                 <SongCardLong/>
                 <SongCardLong/>
                 
                </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Playlistview;
