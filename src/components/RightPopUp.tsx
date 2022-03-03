import React, { useState } from 'react'
import styled from 'styled-components';
import Fonts from '../tools/Fonts';
import Responsive from '../tools/Responsive';
import Colors from '../tools/Colors';

const RightPopUp: React.FC<{
    show: boolean;
    text: string;
}> = ({
    show = false,
    text
}) => {
    
        return (
            <>
                {show === true ?
                    <Wrapper $show={show}>
                        {text}
                    </Wrapper>
                    : null}
            </>
        )
    }


const Wrapper = styled.div<{ $show: boolean }>`
    background-color: ${Colors.Koromiko};
    color: ${Colors.Primary};
    position: fixed;
    transition: all 300ms;
    right: ${({ $show }) => ($show ? "0" : "-100%")};
    right: 0;
    top: 120px;
    z-index: 5;
    height: 50px;
    width: fit-content;
    min-width: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 20px;
    font-size: 16px;
    font-family: ${Fonts.Roboto};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    -webkit-box-shadow: 0px -1px 3px 0px ${Colors.Secondary};
    -moz-box-shadow: 0px -1px 3px 0px ${Colors.Secondary};
    box-shadow: 0px -1px 3px 0px ${Colors.Secondary};
    user-select: none;
    pointer-events: none;
        ${Responsive.mobile} {
            top: 10px;
            min-width: 200px;
        }
`;


export default RightPopUp