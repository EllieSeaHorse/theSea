import React from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import { Triangle } from 'react-loader-spinner'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Triangle color="#AA3949" css={override} size={100} />
        </div>
    );
};

export default LoadingSpinner;
