import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styled from 'styled-components'


const Layout: React.FC<{}> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Layout