import "./artistcard.css"
const ArtistCard = ({ArtistBanner, ArtistName}) => {
    return(<>
            <div className="artistcardrightbar">
                <img height="70" width="70" src={ArtistBanner} alt="ArtistImage" />
                <p className="artistname">{ArtistName}</p>
            </div>
        </> 
    )
}
export default ArtistCard