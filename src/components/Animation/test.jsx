import React from 'react';
import styled from 'styled-components';

const CenteredRotatingObject = () => (
    <Wrapper>
        <div className="rotator"></div>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    background: #181818;

    .rotator {
        width: 120px;
        height: 60px;
        background: #ff0000;
        border-radius: 8px;
        animation: spin-rect 2s linear infinite;
        box-shadow: 0 0 16px 2px #ff000088;
    }

    @keyframes spin-rect {
        to {
            transform: rotate(360deg);
        }
    }
`;

export default CenteredRotatingObject;