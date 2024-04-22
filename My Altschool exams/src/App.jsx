import HomeProfilePage from "./components/pages/HomeProfilePage";
import Nav from "./components/UI/Nav";
import RepoPages from "./components/pages/RepoPages";
import Footer from "./components/UI/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import RepoDetail from "./components/pages/RepoDetail";
import Error404 from "./components/pages/Error404";

function App() {

  return (
    <div className=" w-[1440px] min-w-[375px] max-w-[1440px] flex flex-col p-7 sm:p-16 h-[100dvh]">
      <Nav />

      <Routes>
        <Route path="/" element={<HomeProfilePage />} />
        <Route path="repositories" element={<RepoPages />} />
        <Route path="repositories/:id" element={<RepoDetail />} />
        <Route path="/Error PAGE" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
