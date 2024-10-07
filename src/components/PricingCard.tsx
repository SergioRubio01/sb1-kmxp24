import styled from "styled-components";
import CoolButton_2 from "./CoolButton_2";

const PricingCard = ({backgroundColor, title='', description='', price='', description2=''}) => {
  return (
    <StyledWrapper backgroundColor={backgroundColor}>
      <div className="card">
        <h1>{title}</h1>
        <span>{description}</span>
        <span>{price}</span>
        <span>{description2}</span>
        <div>
          <CoolButton_2 height='3rem' href='/login' paddingX={'6rem'}>Get Started</CoolButton_2>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  width: 330px;
  border-radius: 10px;
  background: ${({ backgroundColor }) => backgroundColor || "lightgray"};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
}
`;

export default PricingCard;
