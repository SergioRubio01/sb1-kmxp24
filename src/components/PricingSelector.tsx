import styled from "styled-components";

const PricingSelector = ({ height = '50px', width = '400px', firstFilterColor = '#ffc000', secondFilterColor = '#212121', option1Name = 'Option 1', option2Name = 'Option 2' }) => {
  return (
    <StyledWrapper height={height} width={width} firstFilterColor={firstFilterColor} secondFilterColor={secondFilterColor}>
      <div id="firstFilter" className="filter-switch">
        <input checked={true} id="option1" name="options" type="radio" />
        <label className="option" htmlFor="option1">
          {option1Name}
        </label>
        <input id="option2" name="options" type="radio" />
        <label className="option" htmlFor="option2">
          {option2Name}
        </label>
        <span className="background" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-switch {
    border: 2px solid ${({ firstFilterColor }) => firstFilterColor};
    border-radius: 30px;
    position: relative;
    display: flex;
    align-items: center;
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    overflow: hidden;
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
    font-weight: 500;
    font-size: 18px;
  }
  .filter-switch .background {
    position: absolute;
    width: 49%;
    height: calc(${({ height }) => height} - 12px);
    background-color: ${({ firstFilterColor }) => firstFilterColor};
    top: 4px;
    left: 4px;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  #option2:checked ~ .background {
    left: 50%;
  }
  #option1:checked + label[for="option1"] {
    color: ${({ secondFilterColor }) => secondFilterColor};
    font-weight: bold;
  }
  #option2:checked + label[for="option2"] {
    color: ${({ secondFilterColor }) => secondFilterColor};
    font-weight: bold;
  }
  #option1:not(:checked) + label[for="option1"],
  #option2:not(:checked) + label[for="option2"] {
    color: #7d7d7d;
  }
`;

export default PricingSelector;