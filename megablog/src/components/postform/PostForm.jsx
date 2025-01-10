import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appWriteService from "../../appwrite/configAppwrite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appWriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        await appWriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appWriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appWriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appWriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value)=> {
    if ( value && typeof value === 'string'){
        return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g,)
        .replace(/\s/g,'-')
    }

    return ''
  },[])



  useEffect(()=>{
    const subscription = watch((value,{name})=>{
        if(name ==='title'){
            setValue('slug' , slugTransform(value.title,{
                shouldValidate : true
            }))
        }
    })


    return ()=>{
        subscription.unsubscribe()
    }


  },[slugTransform,watch,setValue])



  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap" >
            <div className="w-2/3 px-2" >
                <Input
                    label='Title :'
                    placeholder='Title'
                    className='mb-4'
                    {
                        ...register('title',{
                            required: true
                        })
                    }
                />


                <Input

                />

                </div>

                <div className="w-1/3 px-2" >

                        <Input
                        label='featured Image :'
                        type='file'
                        className='mb-4'
                        accept='image/png, image/jpg, image/jpeg, image/gif'

                        {
                            ...register('image',{
                                required : !post
                            })
                        }

                        />

                        {
                            post && ()
                        }

            </div>

    </form>
  )

}

export default PostForm;
