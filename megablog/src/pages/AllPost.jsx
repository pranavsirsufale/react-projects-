import React, { useEffect, useState } from "react";
import appWriteService from "../appwrite/configAppwrite";
import Container from "../components/container/Container";
import { PostCard } from "../components";
import { addPosts } from '../store/slice/postSlice'
import { useDispatch , useSelector} from "react-redux";





const AllPost = () => {
  let post = useSelector((state) => state.post.post)
  const [posts, setPosts] = useState(post || []);
  
  const dispatch = useDispatch()

  
  
  
  useEffect(() => {
    
    if(post.length === 0){
      appWriteService.getPosts([]).then((posts) => {
   
        if (posts) {
          setPosts(posts.documents);
          dispatch(addPosts(posts.documents))
 
      }
    });
  }
    
  }, []);




  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;