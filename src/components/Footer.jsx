import {Link, NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

        <nav className='d-flex justify-content-center'>
            <NavLink to='home' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >About</NavLink>
        
        <NavLink to='contact'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Contact</NavLink>
        </nav>
        

      </div>
    </footer>
  )
}

export default Footer