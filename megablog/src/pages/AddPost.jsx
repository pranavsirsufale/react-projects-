import React from 'react'
import  { PostForm } from '../components'
import Container from '../components/container/Container'

const AddPost = () => {
  return (
    <div className='py-8'>
        <Container>
            <PostForm/>
        </Container>

    </div>
  )
}
export default AddPost