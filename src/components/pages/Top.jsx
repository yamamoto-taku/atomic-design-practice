import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userSteate } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../providers/UserProvider";

export const Top = () => {
  const history = useHistory();

  //const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userSteate);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    console.log("管理");
    history.push({ pathname: "/users" });
  };

  const onClickGeneral = () => {
    console.log("一般");
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" });
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
