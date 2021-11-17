import React from "react";
import { accountObjOne } from "./Data";
import CreateAccount from '../../components/CreateAccount/CreateAccount'

function Signup() {
  return (
    <>
      <CreateAccount {...accountObjOne} />
    </>
  );
}

export default Signup;
