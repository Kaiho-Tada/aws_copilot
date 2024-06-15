import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../utils/axios";

const Blog = () => {
  // const [blog, setBlog] = useState();
  const [blog, setBlog] = useState<{
    id: number;
    title: string;
    contents: string;
  }>();

  const params = useParams();

  useEffect(() => {
    const f = async () => {
      const res = await client.get(`/blogs/${params.id}`);
      setBlog(res.data);
    };
    f();
  }, []);

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ詳細画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <Link to="/blogs">記事一覧画面</Link>
      </div>

      <h2>{blog?.title}</h2>
      <h3>本文</h3>
      <p>{blog?.contents}</p>
    </div>
  );
};

export default Blog;
