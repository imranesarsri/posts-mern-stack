import Home from "./pages/Home";
import Main from "./components/layouts/Main";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Error404 from "./pages/Error404";
import Post from "./pages/posts/Post";
import CreatePost from "./pages/posts/CreatePost";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostDetails from "./pages/posts/PostDetails";
import Profile from "./pages/profile/Profile";
import { ToastContainer } from 'react-toastify';
import UpdatePost from "./pages/posts/UpdatePost";
import Category from "./pages/posts/Category";
import Dashboard from "./pages/admin/Dashboard";
import SideBar from "./components/common/admin/SideBar";
import { useSelector } from "react-redux"


function App(params) {

  const { user } = useSelector(state => state.auth)
  const location = useLocation();
  const path = location.pathname

  return (
    <Main>
      {/* ToastContainer is Alert Message */}
      <ToastContainer position="top-center" theme="colored" />
      {/* Show SideBar if the path starts with 'admin/' */}
      {path.startsWith('/admin/') && (
        <SideBar>
          <Routes>
            <Route path="/admin/dashboard" element={user?.isAdmin ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="*" element={<Error404 path="admin" />} />
            {/* Add more admin routes here if needed */}
          </Routes>
        </SideBar>
      )}
      {/* Show NavBar for posts, profile, and root path */}
      {(path.includes('/posts') || path.includes('/profile') || path === '/') && <NavBar />}
      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home lang={params.lang} toggleLang={params.handleChangeLanguage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Posts and Profile Routes */}
        <Route path="posts">
          <Route index element={<Post />} />
          <Route path="create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
          <Route path="update/:id" element={<UpdatePost />} />
          <Route path="details/:id" element={<PostDetails />} />
          <Route path="category/:category" element={<Category />} />
        </Route>
        <Route path="/profile/:userId" element={<Profile />} />
        {/* Auth Routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        {/* Admin Routes */}
        <Route path="admin/*">
        </Route>
        {/* Catch-All Route for 404 */}
        <Route path="*" element={<Error404 path="user" />} />
      </Routes>
      {/* Conditionally show Footer if not on login/register */}
      {(location.pathname !== '/login' && location.pathname !== '/register') && <Footer />}
    </Main>
  );
}


export default App;
