import PostLayout from "./postLayout.tsx";
import {useContext} from "react";
import {UserInfoContext} from "../../context/userInfoContext.tsx";
import defaultAvatar from '../../assets/images/avatar.svg'


const ShowAllPosts = () => {
    const {allPosts} = useContext(UserInfoContext)
    const allPostsContent = allPosts || [];

    return (
        <>
            {allPostsContent.slice(0, 10).map((post: any,index:number) => (
                <PostLayout
                    key={index}
                    userAvatar={post.userAvatar ?? defaultAvatar}
                    userName={post.userName}
                    postContent={post.post}
                    postImg={post.postImg}
                    createAt={post.createAt}
                    commentCount={post.commentCount}
                    postId={post.postId}
                    likeCount={0}
                    // likeCount={post.likeCount}
                />

            ))}
        </>
    );
};

export default ShowAllPosts;