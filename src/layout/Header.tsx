import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Colors from './../tools/Colors';
import Fonts from './../tools/Fonts';
import { Container } from "../tools/GlobalStyle"
import Responsive from '../tools/Responsive';
import { MdDashboard } from 'react-icons/md';
import { SiInformatica } from 'react-icons/si';
import { FaProjectDiagram } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';




const Header: React.FC<{}> = () => {

    return (
        <Container>
            <HeaderWrapper>
                <Name to='/'>Levan Madurashvili</Name>
                <Nav>
                    <Ul>
                        <Li>
                            <Link to='/'>Dashboard
                                <DashboardIcon color={Colors.Koromiko} />
                            </Link>
                        </Li>
                        <Li>
                            <Link to='/about'>About
                                <AboutIcon color={Colors.Koromiko} />
                            </Link>
                        </Li>
                        <Li>
                            <Link to='/projects'>Projects
                                <ProjectIcon color={Colors.Koromiko} />
                            </Link>
                        </Li>
                        <Li>
                            <Link to='/contact'>Contact
                                <ContactIcon color={Colors.Koromiko} />
                            </Link>
                        </Li>
                    </Ul>
                </Nav>
            </HeaderWrapper>
        </Container>
    )
}

const shine = keyframes`
  from {
    -webkit-mask-position: 150%;
  }
  to {
    -webkit-mask-position: -50%;
  }
`;
const HeaderWrapper = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
        ${Responsive.mobile}{
            position: fixed;
            bottom: 0;
            left: 0;
            height: 70px;
            -webkit-box-shadow: 0px -1px 3px 0px rgba(255,194,92,1);
            -moz-box-shadow: 0px -1px 3px 0px rgba(255,194,92,1);
            box-shadow: 0px -1px 3px 0px rgba(255,194,92,1);
            border-top-right-radius: 17px;
            border-top-left-radius: 17px;
            background-color: ${Colors.Primary};
        }
`;
const Name = styled(NavLink)`
    font-size: 25px;
    color: ${Colors.Koromiko};
    font-family: ${Fonts.Roboto};
    text-decoration: none;
    padding: 5px;
    -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
    -webkit-mask-size: 200%;
    animation: ${shine} 2s infinite;
    ${Responsive.tablet} {
        font-size: 20px;
    }
    ${Responsive.mobile}{
        display: none;
    }
`;
const Nav = styled.nav`

    ${Responsive.mobile}{
        width: 100%;
    }
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
const Li = styled.li`
    list-style: none;
        &:last-child {
           a {
               margin-right: 0px;
           }
        }
`;
const Link = styled(NavLink)`
    color: ${Colors.Koromiko};
    text-decoration: none;
    padding: 5px 10px;
    margin: 0px 20px;
    font-size: 18px;
    font-family: ${Fonts.Roboto};
    font-weight: normal;
    position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            display: inline-block;
            height: 1em;
            width: 100%;
            border-bottom: 1px solid;
            margin-top: 10px;
            opacity: 0;
            -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
            transition: opacity 0.35s, transform 0.35s;
            -webkit-transform: scale(0,1);
            transform: scale(0,1);
        }
        &:hover::after {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }

    ${Responsive.tablet}{
        margin: 0px 5px;
        font-size: 16px;
    }
    ${Responsive.mobile}{
        margin: 0px;
        font-size: 15px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
            &::after {
                content: unset;
            }
            &:hover {
                opacity: 0.9;
            }
    }
`;
const DashboardIcon = styled(MdDashboard)`
    display: none;
    font-size: 20px;
    margin-bottom: 8px;
        ${Responsive.mobile}{
            display: block;
        }
`;
const AboutIcon = styled(SiInformatica)`
    display: none;
    font-size: 20px;
    margin-bottom: 8px;
        ${Responsive.mobile}{
            display: block;
        }
`;
const ProjectIcon = styled(FaProjectDiagram)`
    display: none;
    font-size: 20px;
    margin-bottom: 8px;
        ${Responsive.mobile}{
            display: block;
        }
`;
const ContactIcon = styled(RiContactsFill)`
    display: none;
    font-size: 20px;
    margin-bottom: 8px;
        ${Responsive.mobile}{
            display: block;
        }
`;


export default Header 