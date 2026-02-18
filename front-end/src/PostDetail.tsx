import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "./types/post";

interface PostDetailProps {
    posts: Post[];
}

function PostDetail({ posts }: PostDetailProps) {
    const { id } = useParams<{ id: string }>(); // URL의 :id 파라미터 획득
    const navigate = useNavigate();

    const post = posts.find((p) => p.postId === Number(id));

    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    return (
        <div style={{ padding: "20px" }}>
        <h2>{post.subject}</h2>
        <p>작성자: {post.username} | 날짜: {post.date}</p>
        <hr />
        <p>{post.content}</p>
        <button onClick={() => navigate("/")}>목록으로</button>
        </div>
    );
}

export default PostDetail;