import React from "react";
import styled from "styled-components";

const CardFeatures = ({ title, description, icon }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="icon-wrapper">{icon}</div>
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;

  .card {
    position: relative;
    width: 260px;
    height: 180px;
    background: linear-gradient(-45deg, #ffffff 0%, #7F1D1D 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 12px;
    color: #777;
    line-height: 1.4;
  }

  .card:hover .icon-wrapper {
    scale: 0;
    transform: rotate(-45deg);
  }
`;

export default CardFeatures;
