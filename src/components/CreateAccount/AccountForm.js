import React from "react";
import { ButtonCreate} from "../../globalStyles";
import { FormTitle, Name, Label, CheckTerm } from "./CreateAccount.elements";


const AccountForm = () => {
  return (
    <>
      <FormTitle>Crear Cuenta</FormTitle>
      <form>
        <Label>
          Nombre:
          <Name type="text" placeholder="Ingresa tu nombre" name="name" />
          
        </Label>
        <Label>
          Email:
          <Name type="email" placeholder="web@mail.trato" name="email" />
        </Label>
        <Label>
          Password:
          <Name type="password" placeholder="..........." name="password" />
        </Label>
        <Label>
          <CheckTerm type="checkbox" name="term" />
          Acepto los términos y condiciones
        </Label>

        <ButtonCreate type="submit" value="Submit">Crear Cuenta</ButtonCreate>
      </form>
    </>
  );
};

export default AccountForm;
