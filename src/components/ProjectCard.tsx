import React from 'react'
import styled from 'styled-components';
import Responsive from '../tools/Responsive';
import Colors from '../tools/Colors';
import Fonts from '../tools/Fonts';

const ProjectCard: React.FC<{
    backgroudImage: any;
    link: string;
    title: string;
    linkTitle: string;
}> = ({
    backgroudImage,
    link,
    title,
    linkTitle
}) => {
    return (
        <Wrapper>
            <SlideBox style={{ backgroundImage: "url("+`${backgroudImage}`+")" }} />
            <DescriptionBox >
                <TitleLink href={link} target="_blank">{title}<LinkText>{linkTitle}</LinkText></TitleLink>
            </DescriptionBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: all 300ms;
    width: fit-content;
    margin: 0 auto;
`;
const DescriptionBox = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 40px;
    width: 100%;
    background-color: ${Colors.Koromiko};
    z-index: 2;
    transition: all 300ms;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    border-top: 1px solid ${Colors.Primary};
`;
const SlideBox = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 0px;
    width: 250px;
    height: 300px;
    -webkit-transition: all 2s;
    -o-transition: all 2s;
    -webkit-transition: all 2s;
    transition: all 2s;

        &:hover {
            background-position-y: 100%;
        }
        &:hover ~ ${DescriptionBox} {
            bottom: -50px;
            transition: all 300ms;
        }
`;
const TitleLink = styled.a`
    font-family: ${Fonts.Roboto};
    color: ${Colors.Primary};
    font-size: 15px;
    font-weight: 400;
    text-decoration: none;
`;
const LinkText = styled.span`
    margin-left: 20px;
    font-weight: 500;
    border-bottom: 1px solid ${Colors.Primary};
    text-transform: uppercase;
        &:hover {
            opacity: 0.8;
        }
`;



export default ProjectCard