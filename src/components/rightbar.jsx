import "./rightbar.css"
import Profilebtn from './profilebutton'
import Mockartistdata from '../data/mockArtistsdata'
import ArtistCard from './artistcard'
import { Link } from 'react-router-dom'

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
                        Mockartistdata.map((artist) => (<Link to={`/Artist/${artist.id}`} key={artist.id} ><ArtistCard key={artist.id} ArtistBanner={artist.ArtistBanner} ArtistName={artist.ArtistName} /></Link>))
                    }
            </div>
            
        </div>
        </>
    )
}
export default Rightbar
