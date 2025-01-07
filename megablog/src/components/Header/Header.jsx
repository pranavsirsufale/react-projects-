import React from "react";
import { useSelector } from "react-redux";
import Container from '../container/Container'
import { Link , NavLink, useNavigate } from "react-router-dom";
import { Logo, LogoutBtn} from '../../components'



const Header = () => {
  const navigate = useNavigate()
  const authStatus = useSelector((state)=>state.auth.status)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
    <Container>

      <nav className="flex" > 
        <div className="mr-4" >
          <Link to='/' >
          <Logo/>
          </Link>
        </div>

        <div>

          <ul className="flex ml-auto" >

            

           

            {
              navItems.map((eachLink , index)=>(
                eachLink.active ? 
                <li key={index} >
                 <button onClick={()=>navigate(eachLink.slug)} 
                  className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                  {eachLink.name}
                 </button>
                </li> :
                null
              ))
            }
          </ul>


        </div>


      </nav>



      {/* <nav className='flex'>
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
          { authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav> */}
      </Container>
  </header>
  )
};

export default Header;
