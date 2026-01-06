import "./homepage.css"
import Leftbar from "../../components/leftbar.jsx"
import Logo from "../../components/logo.jsx"
import Rightbar from "../../components/rightbar.jsx"
import Searchbar from "../../components/searchbar.jsx"
import PlaylistHomeCard from "../../components/playlisthome.jsx"
import Mockplaylistdata from "../../data/mockPlaylistdata.jsx"
import Mockartistdata from "../../data/mockArtistsdata.jsx"
import SongCardSmall from "../../components/songcardsmall.jsx"
import Mocksongdata from "../../data/mocksongdata.jsx"
import { Link } from "react-router-dom"
import Playlistview from "../playlist view/playlistview.jsx"
const HomePage = () => {
    return (
        <>
            <div className="background">
                <div className="leftbar">
                    <Leftbar/>
                </div>
                <div className="grid_layout">

                    <div className="center_part">
                        <div className="center_part_top">
                                <div className="Logo_wrapper">
                                    <h1 className="Melofihome">MeloFi</h1>
                                </div>
                                <div className="Searchbar_wrapper">
                                    <Searchbar/>
                                </div>
                        </div>
                        <div className="Welcome_text_wrapper">
                            <p className="Welcome_text">
                                Ready to bless your ears?
                            </p>
                        </div>
                        <div className="Suggested_playlists_wrapper">
                            <div className="Suggested_text_wrapper"> 
                                <p className="Suggested_text">Suggested Playlists </p>
                            </div>
                            <div className="Suggested_playlists">
                                {
                                    Mockplaylistdata.map((playlist) => (<Link to={`/Playlist/${playlist.id}`} key={playlist.id} ><PlaylistHomeCard  PlaylistHomeBanner={playlist.PlaylistBanner} PlaylistHomeName={playlist.PlaylistName} /></Link>))
                                }
                            </div>
                        </div>
                            <div className="Recently_Played">
                                <div className="Recently_wrapper"> 
                                    <p className="Suggested_text">Recently Played </p>
                                </div>
                                <div className="Recent_songs">
                                    {
                                        Mocksongdata.map((song) => (<SongCardSmall key={song.id} SongBanner={song.SongBanner} SongName={song.SongName} SingerName={song.SingerName}/>))
                                    } 
                                </div>
                            </div>
                        
                    </div>
                    <div className="right_bar">
                        <Rightbar/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;