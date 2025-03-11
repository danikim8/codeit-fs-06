import React, { useEffect, useState } from "react";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // Promise
  useEffect(() => {
    setIsLoading(true);

    fetch(POSTS_URL)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (posts.length > 0) setIsLoading(false);
  }, [posts]);

  return (
    <div>
      <h1 className="text-2xl font-bold border-b border-red-500">
        포스트 목록
      </h1>
      {isLoading ? (
        "로딩 중..."
      ) : (
        <ol>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              {post.title}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Posts;
