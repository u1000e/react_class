import { useState } from "react";
import { Container, Tabs, Tab, Content } from "./MyPage.styles";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("changePassword");

  return (
    <Container>
      <h2>마이페이지</h2>
      <Tabs>
        <Tab
          active={activeTab === "changePassword"}
          onClick={() => setActiveTab("changePassword")}
        >
          비밀번호 변경
        </Tab>
        <Tab
          active={activeTab === "deleteAccount"}
          onClick={() => setActiveTab("deleteAccount")}
        >
          계정 탈퇴
        </Tab>
      </Tabs>
      <Content>
        {activeTab === "changePassword" ? (
          <ChangePassword />
        ) : (
          <DeleteAccount />
        )}
      </Content>
    </Container>
  );
};

export default MyPage;
