
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Button } from './components'
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
        <nav>
          <NavLink to={'/'} className={'logo'}>Todooles</NavLink>
          <div>
            <NavLink to={'/'} 
            className={({isActive, isPending }) => 
              isActive ? 'activeNavLink'
              : isPending ? 'navLink' :
              'navLink'
            }>Home</NavLink>
            <NavLink to={'/about'} className={({isActive }) => 
              isActive ? 'activeNavLink' : 'navLink'
            }>About</NavLink>
          </div>
          {location.pathname === '/login' ? 
          <Button handleClick={() => navigate('/register')} label='register' /> 
          :
          <Button handleClick={() => navigate('/login')} label='log in' />
          }
        </nav>
        <main>
          < Outlet />
        </main>
    </>
  )
}

export default App
