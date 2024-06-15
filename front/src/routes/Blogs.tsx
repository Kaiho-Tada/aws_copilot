import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../utils/axios";

const Blogs = () => {
  // const [blogs, setBlogs] = useState<<id, title>[]>([]);
  const [blogs, setBlogs] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    const f = async () => {
      const res = await client.get("/blogs");
      // console.log(res);
      setBlogs(res.data);
    };
    f();
  }, []);

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>ブログ一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <ul>
          {blogs?.map((b) => (
            <Link to={`/blogs/${b.id}`} key={b.id}>
              <li>{b.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
