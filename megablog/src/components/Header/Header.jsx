import React from "react";
import { useSelector } from "react-redux";
import Container from '../container/Container'
import { Link , useNavigate } from "react-router-dom";
import { Logo, LogoutBtn} from '../../components'



const Header = () => {
  const { status , userData } = useSelector((state)=>state.auth)

  return (
    <header className='py-3 shadow bg-gray-500'>
    <Container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px'   />

            </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((item) => 
          item.active ? (
            <li key={item.name}>
              <button
              onClick={() => navigate(item.slug)}
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
              >{item.name}</button>
            </li>
          ) : null
          )}
          { status && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
      </Container>
  </header>
  )
};

export default Header;
