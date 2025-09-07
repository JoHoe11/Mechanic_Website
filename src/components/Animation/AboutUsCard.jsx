import React from 'react';
import styled from 'styled-components';

const WorkerCard = ({ name, credentials, imageSrc, Knowledge }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="card-content">
                    <div className="worker-image" style={{ backgroundImage: `url(${imageSrc})` }}></div>
                    <div className="worker-info">
                        <h4>{name}</h4>
                        <p className="Cred">{credentials}</p>
                        <p className="Know">{Knowledge}</p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .card {
        position: relative;
        width: 402px;
        height: 602px;
        border-radius: 10px;
        overflow: hidden;
        align-items: center;
        justify-content: center;
    }

    /* This is the animated border */
    .card::before {
        content: '';
        width: 120px;
        top: 50%; left: 50%;
        position: absolute;
        height: 1200px;
        background: linear-gradient(90deg, transparent, #ff0000, #ff0000, #ff0000, #ff0000, transparent);
        border-radius: 8px;
        transform: translate(-50%, -50%);
        animation: spin-rect 12s linear infinite;
        z-index: 1;
        opacity: 1;
        transition: opacity 0.3s;
    }

    .card:hover::before {
        opacity: 0;
    }

    /* This is the inner content container */
    .card-content {
        position: absolute;
        width: 99%;
        height: 99%;
        top: 50%;
        left: 50%;
        background: #000000;
        transform: translate(-50%, -50%);
        border-radius: 8px;
        z-index: 2;
        display: flex;
        flex-direction: column;
    }

    /* Worker image styling */
    .worker-image {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 3;
        filter: grayscale(100%) opacity(0.1);
        transition: filter 0.3s;
        border-radius: 10px;
    }

    .worker-image:hover {
        filter: none;
        z-index: 5;
        border-radius: 20px;
    }

    /* Worker info section */
    .worker-info {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 15px;
        text-align: center;
        z-index: 4;
    }

    .worker-info h4 {
        color: white;
        font-size: 40px;
        margin: 0 0 5px 0;
        font-weight: bold;
        font-family: 'Kameron', serif;
    }

    .worker-info .Cred {
        color: red;
        font-size: 24px;
        margin: 0;
        font-family: 'Coiny', system-ui;
    }

    .worker-info .Know {
        color: white;
        font-size: 24px;
        margin: 0;
        font-family: 'Coiny', system-ui;
    }

    /* Animation for the rotating border */
    @keyframes spin-rect {
        to { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;

export default WorkerCard;