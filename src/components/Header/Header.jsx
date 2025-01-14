import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { HeaderContainer, Logo, Nav, NavItem } from "./Header.styles";

const Header = () => {
  const { auth, logout } = useContext(AuthContext);

  const handleLogout = () => {
    axios
      .post("http://localhost/member/logout", {
        refreshToken: auth.refreshToken,
      })
      .then(() => {
        logout();
        window.location = "/login";
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const navi = useNavigate();

  const navigateTo = (path) => {
    navi(path);
  };

  return (
    <HeaderContainer>
      <Logo>KH 정보교육원 KDT과정</Logo>
      <Nav>
        <NavItem onClick={() => navigateTo("/")}>홈</NavItem>
        <NavItem onClick={() => navigateTo("/boards")}>게시판</NavItem>
        {auth.isAuthenticated ? (
          <>
            <NavItem>{auth.username}님 반갑습니다.</NavItem>
            <NavItem onClick={() => navigateTo("/mypage")}>마이페이지</NavItem>
            <NavItem onClick={handleLogout}>로그아웃</NavItem>
          </>
        ) : (
          <>
            <NavItem onClick={() => navigateTo("/signup")}>회원가입</NavItem>
            <NavItem onClick={() => navigateTo("/login")}>로그인</NavItem>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
