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
const Artistview = () => {
const {id} =useParams();
 const artist =Mockartistdata.find((a) => a.id ===Number(id));
    if (!artist) {
        return <h2>Artist Not Found!</h2>
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
                            <img src={artist.ArtistBanner} alt={artist.ArtistName} className="playlist_img"/>
                            <h1 className="playlist_name"> {artist.ArtistName} </h1>
                        </div>
                        <Profilebtn/>
                </div>
                <div className="Songs_long">
                  <SongCardLong/>
                  <SongCardLong/>
                  <SongCardLong/>
                  <SongCardLong/>
                  <SongCardLong/>
                  <SongCardLong/>
                </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Artistview

