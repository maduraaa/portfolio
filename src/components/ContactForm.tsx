import React from 'react'
import styled from 'styled-components';
import Colors from '../tools/Colors';
import Fonts from '../tools/Fonts';
import Responsive from '../tools/Responsive';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com'


const ContactForm: React.FC<{}> = () => {

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_2ty866d', 
            'template_u66arho', 
            e.target, 
            'Hq2uHCwaXaQdC-tew'
        ).then(res => {
            console.log(res)
        }).catch(err => {
            console.log('erroria ' + err)
        })
    }

    return (
        <Wrapper onSubmit={sendEmail}>
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
                        size='medium' />

                    <EmailInput
                        id="outlined-basic"
                        label="Company email"
                        name='company-email'
                        variant="outlined"
                        placeholder='Company email'
                        fullWidth
                        type='email'
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
                        defaultValue="" />
                </SecondWrapper>
            </Content>
            <SubmitButton>Submit</SubmitButton>

        </Wrapper>
    )
}

const Wrapper = styled.form`

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