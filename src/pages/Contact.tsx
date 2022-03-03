import styled from 'styled-components';
import Responsive from '../tools/Responsive';
import GoogleMap from '../components/Map';
import { Container } from '../tools/GlobalStyle';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <Container>
      <ContactdWrapper>
        <MapWrapper>
          <ContactForm />
          <GoogleMap />
        </MapWrapper>
      </ContactdWrapper>
    </Container>
  )
}


const ContactdWrapper = styled.div`
  min-height: calc(100vh - 180px);
  display: flex;
  padding-top: 50px;
  padding-bottom: 100px;
    ${Responsive.mobile} {
      height: auto;
      padding-top: 20px;
    }
`;
const MapWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Contact