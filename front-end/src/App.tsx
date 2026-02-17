import { useState } from "react";

interface Post {
  postId: number;
  username: string;
  date: string;
  content: string;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [newPost, setNewPost] = useState<Post>({
    postId: 0,
    username: "",
    date: "",
    content: ""
  });
  const [newContent, setNewContent] = useState<string>("");

  const [posts, setPosts] = useState<Post[]>([
    { postId: 1, username: "user1", date: "2026", content: "안녕하세요" },
    { postId: 2, username: "user2", date: "2026", content: "반갑습니다." }
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };

  const addPost = (newPost:Post):void => {
    if (!newPost.content) {
      alert("내용을 입력하세요");
      return;
    }
    setPosts([...posts, {
      ...newPost,
      postId: Date.now(),
      username: "User",
      date: new Date().toLocaleDateString(),
    }]);
    setIsModalOpen(false);
    setNewPost({ postId: 0, username: "", date: "", content: "" });
  };

  const delPost = (id: number) => {
    const filteredPosts = posts.filter(post => post.postId !== id);
    setPosts(filteredPosts);
  };



  return (
    <>
      <header>
        <button onClick={() => setIsLogin(true)}>로그인</button>
        <button style={{backgroundColor: "#03a94d"}} onClick={() => setIsLogin(true)}>네이버 로그인</button>
        <button onClick={() => setIsLogin(false)}>로그아웃</button>

      </header>
      <main>
        <button onClick={() => {
          if (!isLogin) {
            alert("로그인이 필요합니다");
            return;
          }
          setIsModalOpen(!isModalOpen)}}>게시글 등록</button>

        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ccc' }}>
              <th>번호</th>
              <th>작성자</th>
              <th>작성일자</th>
              <th>내용</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.postId} style={{ borderBottom: '1px solid #eee', textAlign: 'center' }}>
                <td>{post.postId}</td>
                <td>{post.username}</td>
                <td>{post.date}</td>
                <td>{post.content}</td>
                <td>
                  <button onClick={() => delPost(post.postId)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      {isModalOpen && (
          <div style={{width: "250px"}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3>새 게시글 작성</h3>
              <span>내용 작성</span>
              <input name="content" onChange={handleChange} type="text" placeholder="content" />
              <button onClick={() => addPost(newPost)}>등록</button>
              <button onClick={() => setIsModalOpen(false)}>취소</button>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
