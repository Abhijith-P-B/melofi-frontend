import { useParams } from "react-router-dom"
import Mocksongdata from "../../data/mocksongdata";
import "./songpage.css"
import "../homepage/homepage.css"
import Leftbar from "../../components/leftbar";
import Profilebtn from "../../components/profilebutton";
import "../playlist view/playlistview.css"
import SongCardSmall from "../../components/songcardsmall";
import { FaHeart, FaShareAlt, FaStepBackward, FaRegPlayCircle, FaStepForward} from "react-icons/fa";


const Songpage = () => {
    const {id} =useParams();
    const song =Mocksongdata.find((s) => s.id ===Number(id));
    
    if (!song) {
        return <h2>Song Not Found!</h2>
    }

    return(
        <>
        <div className="background">
            <div className="leftbar">
                <Leftbar/>
            </div>
              <div className="center_part_song">
                <div className="center_middle_song">
                    <div className="Logo_wrapper"><h1 className="Song_welcome">Good Choice!</h1></div>
                    <div className="Song_image_wrapper">
                        <img src={song.SongBanner} alt={song.SongName} className="Song_image"/>
                    </div>
                    <div className="Like_share">
                        <button className="Heart_share">
                            <FaHeart />
                        </button>
                        <button className="Heart_share">
                            <FaShareAlt />
                        </button>
                    </div>
                </div>    
                <div className="center_song_right">
                    <Profilebtn/>
                    <div className="queue_songs">
                      <h2>Queue Songs</h2>
                      <SongCardSmall/>
                      <SongCardSmall/>
                      <SongCardSmall/>  
                      <SongCardSmall/>
                    </div>
                    <div className="Artist">
                        <h2>Artist</h2>
                        <img src={song.SingerBanner} alt={song.SingerName} height="200" width="200"/>
                        <p>{song.SingerName}</p>
                    </div>
                    
                    

                </div>
            </div>
        </div>
        </>
    )
}
export default Songpage