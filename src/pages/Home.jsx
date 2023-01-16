import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import FormTodo from '../components/FormTodo'
import ListTodo from '../components/ListTodo'

const Home = () => {
  const { user } = useAuth()

  return user ? (
    <div>
      <FormTodo />
      <ListTodo />
    </div>
  ) : (
    <Navigate to="signin" replace/>
  )
}

export default Home