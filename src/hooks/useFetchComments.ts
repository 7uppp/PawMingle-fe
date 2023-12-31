// hooks/useFetchComments.ts
import { useState} from 'react';
import makeRequest from '../service/makeRequest';


type CommentType = {
    userName: string;
    userAvatar: string;
    comment: string;
    createAt: string;
    postImg?: string;
};
const useFetchComments = (postId: string) => {
    const [allComments, setAllComments] = useState<CommentType[]>([]);
    const [isFetchComment, setIsFetchComment] = useState(false);

    const fetchAllComments = async () => {
        const result = await makeRequest('GET', `/posts/${postId}/comments`, { postId });
        try {
            if (result.status === 200) {
                setAllComments(result?.data?.data);
                setIsFetchComment(true);
            }
        } catch {
            setIsFetchComment(false);
            console.log('fetch comments failed');
        }
    };

    return {
        allComments,
        isFetchComment,
        fetchAllComments
    };
};

export default useFetchComments;
