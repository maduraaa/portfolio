import React from 'react'
import styled from 'styled-components';
import Responsive from './../tools/Responsive';
import MainImage from '../img/my.jpg'
const Dashboard: React.FC<{ }> = () => {
  return (
    <DashboardWrapper>
      <div>
        <MyImage src={MainImage} alt="my-image" />
      </div>
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.main`
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
    ${Responsive.mobile} {
      height: auto;
      padding-top: 20px;
    }
`;
const MyImage = styled.img`
  height: 300px;
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
  opacity: 0.8;
`;

export default Dashboard