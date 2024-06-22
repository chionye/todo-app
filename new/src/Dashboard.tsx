
import {  NavLink, useNavigate } from 'react-router-dom'
import { Button } from './components'
import { Delete01Icon } from '@hugeicons/react-pro';
function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
        <nav>
          <NavLink to={'/'} className={'logo'}>Todooles</NavLink>
          <Button handleClick={() => navigate('/login')} label='Log Out' /> 
        </nav>
        <main className='dashboard'>
            <section className='greeting'>
                <h1>Hello user</h1>
                <form className='addNewForm'>
                <input type='text' placeholder='Add a new task' className='input' />
                <Button handleClick={() => alert('Task added!')} label='Add' />
                </form>
            </section>
            <section>
            <form>
                <div className='taskItem'>
                    <input type='checkbox' value={'Task Item'} />
                    <input type='text' value={'Task Item'} />
                    <Delete01Icon />
                </div>
                
                <Button handleClick={() => alert('Task added!')} label='Add' />
                </form>
            </section>
        </main>
    </>
  )
}

export default Dashboard;
