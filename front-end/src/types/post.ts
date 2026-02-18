export interface Post {
    postId: number;
    username: string;
    date: string;
    subject: string;
    content: string;
}

export interface HomeProps {
    isLogin: boolean;
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}