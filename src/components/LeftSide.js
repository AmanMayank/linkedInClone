import styled from "styled-components";

function LeftSide() {
  return (
    <Container>
      <Artcard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, There!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
      </Artcard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
`;

const Artcard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

const UserInfo = styled.div`
  border-bottom: 1p solid rgba (0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div``;

const Photo = styled.div``;

const Link = styled.div``;

const AddPhotoText = styled.div``;

export default LeftSide;
