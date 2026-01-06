import "./songcardsmall.css"
const SongCardSmall = ({SongBanner, SongName, SingerName}) => {

    return(
        <>
            <div className="Songcardsmall">
                <img height="50" width="50" src={SongBanner} alt="SongImage" />
                <div className="Songdetails">
                    <p className="songname">{SongName}</p>
                    <p className="singer_name">{SingerName}</p>
                </div>
            </div>
        </> 
    )
}

export default SongCardSmall