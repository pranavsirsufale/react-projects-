import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE} from '../index'
import appWriteService from '../../appwrite/configAppwrite'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PostForm = ({post}) => {
    const {register, handleSubmit,watch,setValue, control, getValues} = useForm({
        defaultValues : {
            title : post?.title || '',
            slug : post?.slug || '',
            content : post?.content || '',
            status : post?.status || ''
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state=> state.auth.userData)


    const submit = async ( data) => {
        if(post){
            const file = data.image[0] ? await appWriteService.uploadFile(data.image[0]) :null;

            if(file){
                await appWriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appWriteService.updatePost(post.$id , {
                ...data,
                featuredImage : file ? file.$id : undefined,
            })

            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            
        }
    }



  return (
    <div>


    </div>
  )
}

export default PostForm