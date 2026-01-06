import "./rightbar.css"
import Profilebtn from './profilebutton'
import Mockartistdata from '../data/mockArtistsdata'
import ArtistCard from './artistcard'

const Rightbar = () => {
    return(
        <>
        <div className='rightbar'>
            <div className='rightbar_top'>
                <Profilebtn/>
            </div>
            <div className='Artist_content'>
                <h1 className='ArtHeading'>Artists</h1>
                   {
                        Mockartistdata.map((artist) => (<ArtistCard key={artist.id} ArtistBanner={artist.ArtistBanner} ArtistName={artist.ArtistName} />))
                    }
            </div>
            
        </div>
        </>
    )
}
export default Rightbar
