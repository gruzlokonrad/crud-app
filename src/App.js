import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import SinglePost from "./components/pages/SinglePost";
import Header from "./components/views/Header/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/views/Footer";
import AddPostForm from "./components/features/AddPostForm";
import EditPostForm from "./components/features/EditPostForm";
import Categories from "./components/pages/Categories";
import SingleCategory from "./components/pages/SingleCategory";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/edit/:postId" element={<EditPostForm />} />
        <Route path="/post/add" element={<AddPostForm />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/category/:category" element={<SingleCategory />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
