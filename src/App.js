import "./App.css";
import styled from "styled-components";
import NavTab from "./Components/navTab";
import Content from "./Components/content";
import Trend from "./Components/Trend";
import FigureButton from "./Components/figureButton";
import Follow from "./Components/follow";

function App() {
  return (
    <Container>
      <Nav>
        <Logo src="./imgs/X_white.svg" />
        <NavTab icon="Home-Fill.svg" text="Home" />
        <NavTab icon="Explore.svg" text="Explore" />
        <NavTab
          icon="Notifications.svg"
          text="Notifications"
          badge="NotificationsBadge.svg"
        />
        <NavTab icon={"Messages.svg"} text={"Messages"} />
        <NavTab icon={"Bookmarks.svg"} text={"Bookmarks"} />
        <NavTab icon={"Lists.svg"} text={"Lists"} />
        <NavTab icon={"Profile.svg"} text={"Profile"} />
        <NavTab icon={"More.svg"} text={"More"} />
        <NewTweetButton>Tweet</NewTweetButton>
        <FlexContainer>
          <AddressView>
            <ProfileImg src="./imgs/Profile-Photo.png" alt="" />
            <ProfileText>
              <Myname>
                <span>jimin Park</span>
                <img src="./imgs/Private.svg" alt=""></img>
              </Myname>
              <MyTag>@zzimin_</MyTag>
            </ProfileText>
            <MoreView src="./imgs/More-2.svg" alt="" />
          </AddressView>
        </FlexContainer>
      </Nav>
      <Timeline>
        <Header>
          <HeaderText>Home</HeaderText>
          <Filter />
        </Header>
        <Post>
          <ProfileImg />
          <TweetContainer>
            <TweetInput />
            <ButtonGroups>
              <FigureButton />
              <FigureButton />
              <FigureButton />
              <FigureButton />
              <FigureButton />
            </ButtonGroups>
            <PostTweetButton>Tweet</PostTweetButton>
          </TweetContainer>
        </Post>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </Timeline>
      <Aside>
        <SearchTab>
          <SearchIcon />
          <SearchInput />
        </SearchTab>
        <Trends>
          <TrendHeader>
            <SubHeader>Trends for you</SubHeader>
            <OptionIcon />
          </TrendHeader>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <ShowMore>Show more</ShowMore>
        </Trends>
        <FollowTab>
          <FollowHeader>
            <FollowSubHeader>Who to follow</FollowSubHeader>
            <Follow />
            <Follow />
            <Follow />
            <ShowMore>Show more</ShowMore>
          </FollowHeader>
        </FollowTab>
        <Footer>
          <FooterText>Terms of Service</FooterText>
          <FooterText>Privacy Policy</FooterText>
          <FooterText>Cookie Policy</FooterText>
          <FooterText>Imprint</FooterText>
          <FooterText>Ads info</FooterText>
          <FooterText>More ...</FooterText>
          <FooterText>© 2021 Twitter, Inc.</FooterText>
        </Footer>
      </Aside>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1920px;
  padding: 0px 327px 0px 328px;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 1080px;
  flex-shrink: 0;
  background-color: black;
  margin: 0 12px;
`;

const Timeline = styled.main`
  width: 600px;
  height: 1491px;
  flex-shrink: 0;
  background-color: black;
`;

const Aside = styled.aside`
  position: sticky;
  top: 6px;
  width: 360px;
  height: 1080px;
  flex-shrink: 0;
  background-color: black;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
  padding: 12px;
  margin-top: 12px;
`;

const NewTweetButton = styled.button`
  margin-top: 16px;
  display: flex;
  width: 225px;
  height: 52px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 52px;
  background: #1d9bf0;
  border: none;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const AddressView = styled.div`
  margin: 12px;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

const ProfileText = styled.div`
  height: 37px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 15px;
  font-weight: 700;
`;

const Myname = styled.span`
  display: flex;
  color: white;
  & span {
    margin-right: 2px;
  }
  & img {
    margin: auto;
  }
`;

const MyTag = styled.span`
  color: #6e767d;
  font-size: 15px;
  font-weight: 700;
`;

const MoreView = styled.img``;

const Header = styled.header``;

const HeaderText = styled.span``;

const Filter = styled.img``;

const Post = styled.section``;

const TweetContainer = styled.div``;

const TweetInput = styled.input``;

const ButtonGroups = styled.div``;

const PostTweetButton = styled.button``;

const SearchTab = styled.div``;

const SearchIcon = styled.img``;

const SearchInput = styled.input``;

const Trends = styled.div``;

const TrendHeader = styled.header``;

const SubHeader = styled.span``;

const OptionIcon = styled.img``;

const ShowMore = styled.a``;

const FollowTab = styled.div``;

const FollowHeader = styled.header``;

const FollowSubHeader = styled.span``;

const Footer = styled.footer``;

const FooterText = styled.span``;

export default App;
