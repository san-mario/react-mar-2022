import Users from "./components/users/Users";
import {getUserPosts} from "./services/user.api.services";
import {useState} from "react";
import Posts from "./components/posts/Posts";


function App() {
    let [posts, setPosts] = useState([]);
    const elevate = (id) => {
      getUserPosts(id).then(({data}) => {
          setPosts([...data]);
      })
    }

  return (
    <div>
        <Users elevate={elevate}/>
        <Posts posts={posts}/>
    </div>
  );
}

export default App;
