import "./Playlistcard.css"

const PlaylistCard = ({PlaylistBanner, PlaylistName}) => {

    return(
        <>
            <div className="playlistcardleftbar">
                <img height="130" width="130" src={PlaylistBanner} alt="PlaylistImage" />
                <p className="playlistname">{PlaylistName}</p>
            </div>
        </> 
    )
}

export default PlaylistCard