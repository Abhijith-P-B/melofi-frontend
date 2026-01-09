import { Link } from 'react-router-dom'
import "./leftbar.css"
import Mockplaylistdata from "../data/mockPlaylistdata";
import PlaylistCard from './Playlistcard';
const Leftbar = () => {
    return (
    <> 
     <div className="leftbar">
        
            <div>
                <Link to="/Homepage" className="homebutton">
                    <button className="homebutton">
                        Home
                    </button>
                </Link>
            </div>
            <div className="playlists">
                <p className="Play_text">Your Playlists</p>
                
                    {
                        Mockplaylistdata.map((playlist) => (<Link to={`/Playlist/${playlist.id}`} key={playlist.id} ><PlaylistCard key={playlist.id} PlaylistBanner={playlist.PlaylistBanner} PlaylistName={playlist.PlaylistName} /></Link>))
                    }
               
            </div>
            
    </div>
    </>)    
}
export default Leftbar