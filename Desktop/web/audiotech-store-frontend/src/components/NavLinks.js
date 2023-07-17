
import { Link } from 'react-router-dom'

export default function NavLinks({className}) {
  return (
    <div className={className}>
          
    <Link className='navbar-navlink | text-navlink text-color-white' to={"/"}>HOME</Link>
    <Link className='navbar-navlink | text-navlink text-color-white' to={"/headphones"}>HEADPHONES</Link>
    <Link className='navbar-navlink | text-navlink text-color-white' to={"/speakers"}>SPEAKERS</Link>
    <Link className='navbar-navlink | text-navlink text-color-white' to={"/earphones"}>EARPHONES</Link>

  </div>
  )
}
