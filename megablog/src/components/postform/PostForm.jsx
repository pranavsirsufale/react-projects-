import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE} from '../index'
import appWriteService from '../../appwrite/configAppwrite'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PostForm = ({post}) => {
    const { register, handleSubmit,watch,setValue,control,getValues} = useForm({
        defaultValues : {
            title : post?.title || '',
            slug : post?.slug || '',
            content : post?.content || '',
            status : post?.status || 'active',

        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        if(post){
            data.image[0] ? appWriteService.uploadFile(data.image[0]) :null
        }
    }




  return (
    <div>


    </div>
  )
}

export default PostForm