import styled from "styled-components";
import panel from "../../images/aside-account.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/logo-trato-color.svg";
import {RiUserSmileFill} from 'react-icons/ri'

export const AccountSec = styled.div`
  margin: 0;
  padding: 0;
`;
export const AccountRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const Panel = styled.div`
  width: 598px;
  height: 1350px;
`;
export const ImgWrapper = styled.div`
  width: 598px;
  height: 1350px;
`;
export const ImgPanel = styled.div`
  background-image: url(${panel});
  background-size: cover;
  width: 100%;
  height:1350px;

  &::before {
    content: "";
    position: absolute;
    width: 598px;
    height: 1350px;
    background: linear-gradient(
      to bottom,
      rgba(243, 123, 51, 0.7) 25%,
      rgba(243, 123, 51, 0) 80%
    );
  }
`;

export const AccountColumn = styled.div`
  flex: 1;
  height: 1350px;
  max-width: 50%;
  flex-basis: 50%;
`;
export const BackHome = styled.div`
  display: flex;
  text-align: center;
  vertical-align: middle;
  flex-direction: row;
  position: absolute;
  text-decoration: none;
  top: 72px;
  left: 90px;
`;
export const BackIcon = styled(FaArrowLeft)`
  color: #ffffff;
  margin-right: 10px;
  font-size: 24px;
  margin-top: auto;
  margin-bottom: auto;
`;
export const BackText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

///////////Form

export const FormWrapper = styled.div`
  width: 455px;
  height: auto;
  margin-top: 200px;
  margin-left: 86px;
  margin-right: auto;
`;

export const FormTitle = styled.h2`
  font-family: Montserrat;
  font-size: 56px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  margin-bottom: 57px;
`;

export const Name = styled.input`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  width: 100%;
  height: 66px;
  padding: 19px 20px;
  border-radius: 10px;
  border: solid 2px #f5f6fa;
  background-color: #fff;
  margin-top: 16px;

  &:active {
    border-color: solid 3px #f37b33;
  }

  &:hover {
    border-color: solid 3px #f37b33;
  }

  &::placeholder {
    color: #aab0b7;
  }

  &::before {
      content:"";
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #3f3f3f;
`;

export const CheckTerm = styled.input`
  margin: 20px 0;
  margin-right: 20px;
  justify-content: space-between;

  &:checked{
      color: #f37b33;
  }
`;

export const Divider = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  justify-content: space-between;
  padding-top: auto;
  padding-bottom: auto;
`;
export const LineL = styled.hr`
  width: 45%;
  height: 2px;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  vertical-align: middle;
`;
export const LineR = styled.hr`
  width: 45%;
  height: 2px;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  vertical-align: middle;
`;

export const DividerText = styled.div`
  font-family: Inter;
  font-size: 20px;
`;
export const Session = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;
export const SessionText = styled.div`
  font-family: Inter;
  margin-left: auto;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
`;
export const SigninText = styled(Link)`
  margin-left: 10px;
  margin-right: auto;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #f37b33;
`;
export const BottomLogo = styled.div`
margin: 150px auto 80px auto;
  background-image: url(${logo});
  width: 178px;
  height: 43.3px;
`;
