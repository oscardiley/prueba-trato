import React from "react";
import { ButtonInvite } from "../../globalStyles";
import AccountForm from "./AccountForm";
import {
  AccountSec,
  AccountRow,
  AccountColumn,
  Panel,
  ImgWrapper,
  ImgPanel,
  BackHome,
  BackIcon,
  BackText,
  FormWrapper,
  Divider,
  LineL,
  LineR,
  DividerText,
  Session,
  SessionText,
  BottomLogo,
  SigninText
} from "./CreateAccount.elements";

const CreateAccount = () => {
  return (
    <>
      <AccountSec>
        <AccountRow>
          <AccountColumn>
            <Panel>
              <ImgWrapper>
                <ImgPanel>
                  <BackHome>
                    <BackIcon></BackIcon>
                    <BackText>Regresar al Home</BackText>
                  </BackHome>
                </ImgPanel>
              </ImgWrapper>
            </Panel>
          </AccountColumn>
          <AccountColumn>
            <FormWrapper>
              <AccountForm />
              
                <ButtonInvite>Invitado</ButtonInvite>
             
              <Divider>
                <LineL />
                <DividerText>o</DividerText>
                <LineR />
              </Divider>
              <Session>
                <SessionText>¿Ya tienes cuenta?</SessionText>
               
                  <SigninText>Inicia Sesión</SigninText>
               
              </Session>
              <BottomLogo></BottomLogo>
            </FormWrapper>
          </AccountColumn>
        </AccountRow>
      </AccountSec>
    </>
  );
};

export default CreateAccount;
