import styled from "styled-components";
import hero from "../../images/hero-slide.png";
import back from "../../images/global-back.png";
import target from "../../images/target.png";
import bgone from '../../images/bg-ver.png'

export const LandingSec = styled.div`
  padding: 70px 0;
  background-image: url(${back});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BgOne=styled.div`
background-image: url(${bgone});
width:117px;
height: 308px;
position: absolute; 
top: 817px;
z-index: 1;
`
export const BgTwo = styled.div`
background-image: url(${bgone});
width:117px;
height: 308px;
position: absolute; 
top: -28px;
right:96px;
z-index: 1;
transform: rotate(-90deg);

`

export const LandingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const LandingColumn = styled.div`
  margin-bottom: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
`;

export const TextWrapper = styled.div`
  max-width: 520px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-top: -80px;
`;

export const RightWrapper = styled.div`
  margin: 0;
`;

export const ImgWrapper = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  background-image: url(${hero});
  background-size: cover;
  width: 600px;
  height: 790px;
  border-radius: 15px 15px 0 0;
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    height: 790px;
    width: 600px;
    background: linear-gradient(
      to top,
      rgba(243, 123, 51, 0.9) 15%,
      rgba(243, 123, 51, 0) 75%
    );
    border-radius: 15px 15px 0 0;
    opacity: 0.7;
  }
`;

export const Heading = styled.h1`
  font-family: Inter;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  margin-bottom: 34px;
`;

export const Subtitle = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  max-width: 440px;
  margin-bottom: 72px;
`;

export const BannerImg = styled.div`
  background: #1d3744;
  display: flex;
  position: relative;
  width: 440px;
  height: 230px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 33px;
  border-radius: 12px;
  margin-top: -120px;
  z-index: 1;
  box-shadow: 0 16px 32px 0 rgba(96, 97, 112, 0.32);
`;
export const BannerColumn = styled.div`
  justify-content: center;
`;

export const BannerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const BannerIcon = styled.div`
  background-image: url(${target});
  background-size: contain;
  width: 64px;
  height: 64px;
  padding: 2px;
  margin-right: 5px;
`;
export const BannerHeading = styled.div`
  display: inline-block;
  margin-left: 25px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;
export const BannerDesc = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;
