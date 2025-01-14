import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import { AuthProvider } from "./components/context/AuthContext";
import MyPage from "./components/Auth/MyPage/MyPage";
import InsertForm from "./components/Board/InsertForm";
import BoardDetail from "./components/Board/BoardDetail";
import BoardList from "./components/Board/BoardList";
import EditBoard from "./components/Board/EditBoard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/boards" element={<BoardList />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route path="/boards/:id/edit" element={<EditBoard />} />
          <Route path="/insert" element={<InsertForm />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
