import { useParams } from "react-router-dom"
import Mocksongdata from "../../data/mocksongdata";
import "./songpage.css"
import "../homepage/homepage.css"
import Leftbar from "../../components/leftbar";
import Profilebtn from "../../components/profilebutton";
import "../playlist view/playlistview.css"


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
            <div className="center_part_play">  
                <div className="center_top_song">
                    <div className="Logo_wrapper"><h1 className="Song_welcome">Good Choice!</h1></div>
                    <div className="profile_wrapper"><Profilebtn/></div>
                </div>    
                <div className="center_song_rest">
                    <div>
                        
                    </div>
                    <div className="Song_image_wrapper">
                        <img src={song.SongBanner} alt={song.SongName} className="Song_image"/>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Songpage