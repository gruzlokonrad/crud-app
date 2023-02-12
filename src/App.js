import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import SinglePost from "./components/pages/SinglePost";
import AddPost from "./components/pages/AddPost";
import Header from "./components/views/Header/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/views/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<SinglePost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
