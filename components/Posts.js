import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts({ posts }) {
    const [realtimePosts, loading, error] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    );

    return (
        <div>
            {realtimePosts ? (
                realtimePosts?.docs?.map(post => (
                    <Post key={post.id} name={post.data().name} message={post.data().message} email={post.data().email} image={post.data().image} timestamp={post.data().timestamp} postImage={post.data().postImage} />
                ))) : (
                posts?.map(post => (
                    <Post key={post.id} name={post.name} message={post.message} email={post.email} image={post.image} timestamp={post.timestamp} postImage={post.postImage} />
                ))
            )}
        </div>
    )
}

export default Posts
