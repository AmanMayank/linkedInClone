import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoginDetails, setSignOutState } from "../store";
import styled from "styled-components";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    console.log("user.name", user.name !== null);
    if (user.name !== "") {
      navigate("/home");
    }
  }, [user.name]);

  const handleAuth = async () => {
    const auth = getAuth(firebaseApp);
    if (user.name === "") {
      try {
        const provider = new GoogleAuthProvider();
        const userData = await signInWithPopup(auth, provider);
        console.log("user==", userData);
        dispatch(setUserLoginDetails(userData.user));
        console.log(userData.user);
      } catch (err) {
        console.log(err);
      }
    }
    // else if (user.name !== "" || user.name !== null) {
    //   signOut(auth)
    //     .then(() => {
    //       dispatch(setSignOutState());
    //       navigate("/");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>

        <div>
          <Join>Join Now</Join>
          <SignIn onClick={handleAuth}>Sign In</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="login" />
        </Hero>

        <Form>
          <Google onClick={handleAuth}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-sie: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: (0, 0, 0, 0.9);
    text-deecoration: none;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Section = styled.section`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  z-index: 25;
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin: auto;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0/60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0, 0, 0, /0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgbs(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
