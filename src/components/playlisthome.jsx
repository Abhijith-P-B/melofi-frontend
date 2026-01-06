import  "./playlisthome.css"
const PlaylistHomeCard = ({PlaylistHomeBanner, PlaylistHomeName}) => {
    return (
        <>
             <div className="playlistcardHome">
                <img height="150" width="150" src={PlaylistHomeBanner} alt="PlaylistImage" />
                <p className="playlistHomename">{PlaylistHomeName}</p>
            </div>
        </>
    )
}
export default PlaylistHomeCard