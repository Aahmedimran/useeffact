import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Reddit() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      let responseData = res.data;
      let newposts =responseData.data.children;
      newposts=newposts.map((obj) => {
        return obj.data
      });
      console.log("newPosts :", newposts);
      setposts(newposts);
    });
  }, []);
  return <div>
    {
      posts.map(eachposts=>(
        <>
        <h1>{eachposts?.title}</h1>
        <p>{eachposts?.selftext}</p>
        </>
      ))
    }
    
  </div>;
}

ReactDOM.render(<Reddit />, document.getElementById("root"));
