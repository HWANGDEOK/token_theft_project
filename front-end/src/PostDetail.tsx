import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "./types/post";
import { useState } from "react";

interface Comment {
    commentId: number,
    username: string,
    date: string,
    content: string,
}

interface PostList {
    posts: Post[];
}


function PostDetail({ posts }: PostList) {
    const [newComment, setNewComment] = useState<Comment>({
        commentId: 0,
        username: "",
        date: "",
        content: "",
    });
    const [comments, setComments] = useState<Comment[]>([])

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = posts.find((p) => p.postId === Number(id));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
        setNewComment({
        ...newComment,
        [name]: value
        });
    };

    const addComment = (newComment:Comment):void => {
        if (!newComment.content) return;
        setComments([...comments, {
        ...newComment,
        commentId: Date.now(),
        username: "player",
        date: new Date().toLocaleDateString(),
        }]);
        setNewComment({ commentId: 0, username: "", date: "", content: "" });
    };

    const delComment = (id: number) => {
        const filteredComments = comments.filter((comment) => comment.commentId !== id);
        setComments(filteredComments);
    };

    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>{post.subject}</h2>
            <p>작성자: {post.username} | 날짜: {post.date}</p>
            <hr />
            <p>{post.content}</p>
            <hr />
            {comments.map((comment) => (
                <div key={comment.commentId}>
                    {comment.username} | {comment.date} | {comment.content}
                    <button onClick={() => delComment(comment.commentId)}>댓글 삭제</button>
                </div>
                
            ))}
            <hr />
            <p>댓글 작성</p>
            <input name = "content" type="text" onChange={handleChange}/>
            <button onClick={() => addComment(newComment)}>댓글 등록</button>
            <hr />
            <button onClick={() => navigate("/")}>목록으로</button>
        </div>
    );
}

export default PostDetail;