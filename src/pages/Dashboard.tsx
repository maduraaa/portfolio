import React from 'react'
import styled from 'styled-components';
import Responsive from './../tools/Responsive';
import MainImage from '../img/my.jpg'
import Fonts from '../tools/Fonts';
import Colors from './../tools/Colors';
const Dashboard: React.FC<{ }> = () => {
  return (
    <DashboardWrapper>
      <DashboardInnerContent>
        <MyImage src={MainImage} alt="my-image" />
        {/* <TextContent>
          <HelloText>Hello There!</HelloText>
          <NameText>I'M Levan Madurashvili</NameText>
          <ProfessionText>Developer</ProfessionText>
        </TextContent> */}
      </DashboardInnerContent>
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.main`
  min-height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
    ${Responsive.mobile} {
      height: calc(100vh - 70px);
      padding-top: 20px;
    }
`;
const MyImage = styled.img`
  height: 300px;
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
  opacity: 0.8;
  -webkit-box-shadow: 0px 0px 200px -80px rgba(255,194,92,1);
  -moz-box-shadow: 0px 0px 200px -80px rgba(255,194,92,1);
  box-shadow: 0px 0px 200px -80px rgba(255,194,92,1);
`;
const DashboardInnerContent = styled.div`
  display: flex;
  align-items: center;
    ${Responsive.mobile} {
      flex-direction: column;
      justify-content: center;
    }
`;
const TextContent = styled.div`
  font-family: ${Fonts.Roboto};
  color: ${Colors.Koromiko};
  margin-left: 20px;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  
`;
const HelloText = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
const NameText = styled.div`
 font-size: 20px;
  margin-bottom: 10px;
`;
const ProfessionText = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;



export default Dashboard