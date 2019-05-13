import styled from "styled-components";
import { Field, Form } from "formik";

const LoginWindow = styled.div`
  background: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px 0 0 8px;
  width: 100%;
  height: 90%;
`;
const OkeWindow = styled.div`
  background: ${props => props.theme.color.darkBlue};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px;
  width: 45%;
  height: 100%;
  box-shadow: -8px 0px 8px rgba(0, 0, 0, 0.12);
`;

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 10%
  width: 100%;
  justify-content: space-around;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  color: black;
  width: 90%;
`;

const LoginPage = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LoginInput = styled(Field)`
  width: 100%;
  border: none;
  font-size: 18px;
  display: flex;

  &:focus {
    outline: 0;
  }
`;

const ShowHideButton = styled.img`
  border: none;

  &:focus {
    outline: 0;
  }
`;
const FieldButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &:focus {
    outline: 0;
  }
`;

const BorderLine = styled.p`
  width: 100%;
  border-width: 1px;
  border-bottom-style: solid;
  margin: 0 0 2% 0;
  border-color: #00477b;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

const LoginPageWrapper = styled.div`
  width: 100%;
  min-width:900px;
  min-height: 680px
  height: 100%;
  display:flex;

  justify-content:center;
  align-items:center;
`;
const LoginPageImg = styled.img`
  width: 100%;
  min-width: 900px;
  min-height: 680px;
  height: 100%;
  z-index: 1;
`;
const OkeLogo = styled.img`
  margin-top: 50%;
  width: 70%;
`;

const LoginContainer = styled.div`
  padding: 10px 20px;
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  align-content: stretch;
  flex-direction: column;
  z-index: 2;
  position: absolute;
`;

export {
  LoginContainer,
  OkeLogo,
  LoginPageWrapper,
  LoginInput,
  BorderLine,
  LoginWindow,
  FormWrapper,
  ContentWrapper,
  OkeWindow,
  ShowHideButton,
  LoginPage,
  FieldButtonContainer,
  LoginPageImg
};
