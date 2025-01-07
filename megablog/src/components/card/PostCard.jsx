import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`} className="w-full bg-gray-50 rounded-xl p-4">
      <div className="w-full justify-center mb-4">
        <img src="" alt="" />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
