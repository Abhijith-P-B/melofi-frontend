import "./searchbar.css"
import { Link } from 'react-router-dom'
const Searchbar = () =>{
    return (
        <>
         <Link to="/Login" className='LinkSearch'>
            
            <p className='Searchtext'>
            Search..
            </p>
        </Link>
        </>
    )
}
export default Searchbar;