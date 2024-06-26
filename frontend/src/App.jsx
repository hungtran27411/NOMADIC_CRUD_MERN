import CreatePost from './components/Posts/CreatePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicNavbar from './components/Navbar/PublicNavbar';
import UpdatePost from './components/Posts/UpdatePost';
import PostsList from './components/Posts/PostsList';
import Home from './components/Home/Home';
import PostDetails from './components/Posts/PostDetails';
import Login from './components/User/Login';
import Register from './components/User/Register';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <PublicNavbar />
      <Routes>
        {/* create post */}
        <Route element={<Home />} path="/" />
        <Route element={<CreatePost />} path="/create-post" />
        <Route element={<PostsList />} path="/posts" />
        <Route element={<PostDetails />} path="/posts/:postId" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Register />} path="/Register" />
        {/* <Route element={<UpdatePost />} path="/posts/:postId" /> */}
        {/* <CreatePost />
        <PostsList /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
