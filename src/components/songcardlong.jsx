import "./songcardlong.css"
const SongCardLong = ({SongBanner, SongName, SingerName}) => {
    return(
        <>
            <div className="Songcardlong">
                <img height="70" width="70" src={SongBanner} alt="SongName" />
                <p className="songnamelong">{SongName}</p>
                <p> {SingerName}</p>
                <div className="Share">Share</div>

            </div>
        </>
    )
}
export default SongCardLong