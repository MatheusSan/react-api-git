import React from "react";
import { FaGithub } from "react-icons/fa";

import Title from "../../Components/texts/title";
import Page from "../../Components/page";
import Button from "../../Components/button";

export default function Login() {
  const gitHub = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <Page>
      <Title>GitHub viewer</Title>
      <Button
        onClick={gitHub}
        text={
          <>
            <FaGithub style={{ marginRight: 5 }} /> Login with GitHub
          </>
        }
      />
    </Page>
  );
}
