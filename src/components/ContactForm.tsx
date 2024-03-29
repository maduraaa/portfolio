import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Colors from '../tools/Colors';
import Fonts from '../tools/Fonts';
import Responsive from '../tools/Responsive';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com'
import RightPopUp from './RightPopUp';

const ContactForm: React.FC<{}> = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    const [message, setMessage] = useState('');
    const [disabledBtn, setDisabledBtn] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [offer, setOffer] = useState('');

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (name.trim().length < 1 || email.trim().length < 1 || offer.trim().length < 1 ) {
            setShowPopUp(true);
            setMessage('Fill in all the fields')
        }else {
            setShowPopUp(false);
            setMessage('')
            emailjs.sendForm(
                'service_2ty866d',
                'template_u66arho',
                e.target,
                'Hq2uHCwaXaQdC-tew'
            ).then(res => {
                setShowPopUp(true);
                setMessage('Successfully sent')
                setDisabledBtn(true)
                console.log(res)
            }).catch(err => {
                setShowPopUp(true);
                setMessage('Try it later')
                console.log(err)
            })
        }
        }



    useEffect(() => {
        setTimeout(() => {
            if (showPopUp === true) {
                setShowPopUp(false)
            }
        }, 5000);
    }, [showPopUp]);

    return (
        <>
            <Wrapper onSubmit={sendEmail} $disabledBtn={disabledBtn}>
                <OfferText>Send an Offer</OfferText>
                <Content>
                    <TextFieldWrapper>
                        <NameInput
                            id="outlined-basic"
                            label="Company Name"
                            name='company-name'
                            variant="outlined"
                            placeholder='Company Name'
                            fullWidth
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            size='medium' />

                        <EmailInput
                            id="outlined-basic"
                            label="Company email"
                            name='company-email'
                            variant="outlined"
                            placeholder='Company email'
                            fullWidth
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size='medium' />
                    </TextFieldWrapper>

                    <SecondWrapper>
                        <TextArea
                            type='text'
                            id="outlined-multiline-static"
                            label="Offer"
                            multiline
                            rows={5}
                            name='company-offer'
                            placeholder='Offer'
                            fullWidth
                            value={offer}
                            onChange={(e) => setOffer(e.target.value)}
                            defaultValue="" />
                    </SecondWrapper>
                </Content>
                <SubmitButton disabled={disabledBtn}>Submit</SubmitButton>
            </Wrapper>
            <RightPopUp show={showPopUp} text={message} />
        </>
    )
}

const Wrapper = styled.form<{ $disabledBtn: boolean }>`
    transition: all 500ms;
    opacity: ${({ $disabledBtn }) => ($disabledBtn ? "0.4" : "1")};
    user-select: ${({ $disabledBtn }) => ($disabledBtn ? "none" : "unset")};
    pointer-events: ${({ $disabledBtn }) => ($disabledBtn ? "none" : "unset")};
`;
const OfferText = styled.div`
    font-size: 25px;
    color: ${Colors.Koromiko};
    font-family: ${Fonts.Roboto};
    margin-bottom: 30px;
`;
const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;
        ${Responsive.mobile} {
            width: 100%;
        }
`;
const NameInput = styled(TextField)`

`;
const EmailInput = styled(TextField)`
    margin-top: 36px !important;
        ${Responsive.mobile} {
            margin-top: 20px !important;
        }
`;
const TextArea = styled(TextField)`

`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
        ${Responsive.mobile} {
            flex-direction: column;
        }
`;
const SubmitButton = styled.button`
    height: 56px;
    padding: 0px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto 30px auto;
    width: 30%;
    border: 1px solid ${Colors.Koromiko};
    background-color: transparent;
    color: ${Colors.Koromiko};
    font-size: 18px;
    font-family: ${Fonts.Roboto};
    border-radius: 13px;
    cursor: pointer;
        &:first {
            border-width: 2px;
        }
    ${Responsive.mobile}{
        margin-top: 20px;
    }
`;
const SecondWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    
        ${Responsive.mobile} {
            width: 100%;
            margin-top: 20px;
        }
`;

export default ContactForm