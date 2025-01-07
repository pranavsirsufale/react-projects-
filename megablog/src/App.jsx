import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login ,logout } from './store/slice/authSlice'

export default function App() {
  const dispatch = useDispatch()

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }



    })
    .finally(()=>{
      setLoading(false)
    })
  },[])



  return (
    <>
    <h1>
      hello guys there are so many of us 
    </h1>
   
   </>
  );
}