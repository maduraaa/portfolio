import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Colors from './../tools/Colors';
import Fonts from './../tools/Fonts';


const Header: React.FC<{}> = () => {

    return (
        <HeaderWrapper>
            <Name to='/'>Levan Madurashvili</Name>
            <Nav>
                <Ul>
                    <Li>
                        <Link to='/'>Dashboard</Link>
                    </Li>
                    <Li>
                        <Link to='/about'>About</Link>
                    </Li>
                    <Li>
                        <Link to='/projects'>Projects</Link>
                    </Li>
                    <Li>
                        <Link to='/contact'>Contact</Link>
                    </Li>
                </Ul>
            </Nav>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Name = styled(NavLink)`
    font-size: 25px;
    color: ${Colors.White};
    font-family: ${Fonts.Roboto};
    text-decoration: none;
    margin-left: 150px;
`;
const Nav = styled.nav`
    margin-right: 120px ;
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Li = styled.li`
    list-style: none;
`;
const Link = styled(NavLink)`
    color: ${Colors.White};
    text-decoration: none;
    padding: 5px 10px;
    margin: 0px 20px;
    font-size: 18px;
    font-family: ${Fonts.Roboto};
    font-weight: normal;
`;


export default Header