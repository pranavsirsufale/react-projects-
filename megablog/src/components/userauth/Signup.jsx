import React,{useState} from 'react'
import authService from '../../appwrite/auth'
import {Login} from '../index'
import { login as loginStore } from '../../store/slice/authSlice'
import { useDispatch } from 'react-redux'
import { set, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'




const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [error , setError ] = useState('')

    const { register, handleSubmit} = useForm()
    

    const signUp = async( data) => {
        setError('')
        try {
            const registerdUser = await authService.createAccount(data);

            if(registerdUser){
                const userData = await authService.getCurrentUser(data) 

                if(userData){
                    dispatch(loginStore(userData))
                    navigate('/')
                    
                }
            }

        } catch (error) {
            setError(error.message)
        }
    }



  return (
    <div>Signup</div>
  )
}

export default Signup






