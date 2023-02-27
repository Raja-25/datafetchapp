import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Fetchdata() {
  const [posts, setpost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setpost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ol>
        {posts.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ol>
    </div>
  );
}
