import { Link,useNavigate } from 'react-router-dom'
import { login as authLogin} from '../../store/slice/authSlice'
import { Button , Input , Logo } from '../index'
import authService from '../../appwrite/auth'
import { useSelector , useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError ] = useState('')

    const login = async(data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if( session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin)
                }
            }

        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>Login</div>
  )
}

export default Login