
import dsnsLogo from '../img/dsns_logo.svg'
import '../css/header.css'
function Header() {

  return (
    <>
    
        <div className='header-wrapper'>
            <div className='header-logo'>
                <img src={dsnsLogo} alt="Image"/>
            </div>
            <div className='header-title'>
                <h1>Служба порятунку Рівненщини</h1>
            </div>
        </div>
    
    </>
  )
}

export default Header