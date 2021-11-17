import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import Navbar from "../Navbar/Navbar";

import {
  LandingSec,
  LandingRow,
  LandingColumn,
  TextWrapper,
  Heading,
  Subtitle,
  RightWrapper,
  ImgWrapper,
  Img,
  BannerColumn,
  BannerImg,
  BannerTitle,
  BannerIcon,
  BannerHeading,
  BannerDesc,
  BgOne,
  BgTwo,
} from "./Landing.elements";

function Landing({
  primary,
  lightBg,
  headline,
  description,
  buttonLabel,
  imgStart,
  start,
  bannerHeading,
  bannerDesc,
}) {
  return (
    <>
      <Navbar />
      <LandingSec lightBg={lightBg}>
        <BgOne></BgOne>
        <BgTwo></BgTwo>
        <Container>
          <LandingRow imgStart={imgStart}>
            <LandingColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button primary={primary}>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </LandingColumn>
            <LandingColumn>
              <RightWrapper>
                <ImgWrapper start={start}>
                  <Img></Img>
                </ImgWrapper>
                <BannerImg>
                  <BannerColumn>
                    <BannerTitle>
                      <BannerIcon></BannerIcon>
                      <BannerHeading>{bannerHeading}</BannerHeading>
                    </BannerTitle>
                    <BannerDesc>{bannerDesc}</BannerDesc>
                  </BannerColumn>
                </BannerImg>
              </RightWrapper>
            </LandingColumn>
          </LandingRow>
        </Container>
      </LandingSec>
    </>
  );
}

export default Landing;
