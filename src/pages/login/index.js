import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

import Title from "../../Components/texts/title";
import Page from "../../Components/page";
import Container from "../../Components/container";
import Button from "../../Components/button";

export default function Login() {
  const gitHub = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  useEffect(() => {}, []);

  return (
    <Page>
      <Title>GitHub viewer</Title>
      <Container>
        <>
          <Button onClick={gitHub}>
            <FaGithub style={{ marginRight: 5 }} />
            Login with GitHub
          </Button>
        </>
      </Container>
    </Page>
  );
}
