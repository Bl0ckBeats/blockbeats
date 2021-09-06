import React from 'react';
import { GradientButton } from '../../GradientButton';

export const LandingHero = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 70,
        paddingLeft: 20,
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <h2>
          BUILT ON{' '}
          <span style={{ marginLeft: 10 }}>
            <img
              style={{
                paddingBottom: 2,
              }}
              src="/solana-full-logo.svg"
              width="150"
            />
          </span>
        </h2>
      </div>
      <div>
        <h1
          style={{
            fontSize: 128,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Next Gen <br /> Music.
        </h1>
      </div>
      <div>
        <GradientButton
          text={'Mint V1'}
          onClick={() => console.log('TODO change me')}
        />
        <button
          style={{
            borderImageSource: `url('/background-gradient.svg')`,
          }}
          className="explore-blockbeats-btn"
        >
          Explore Blockbeats{' '}
          <span>
            <img src="/small-equalizer-icon.svg" width="26" />
          </span>
        </button>
      </div>
    </div>
  );
};
