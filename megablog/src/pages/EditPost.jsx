import React, { useEffect, useState } from "react";
import Container from "../components/container/Container";
import { PostForm } from "../components";
import appWriteService from "../appwrite/configAppwrite";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appWriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <h1> No Post Found </h1>
  );
};

export default EditPost;
