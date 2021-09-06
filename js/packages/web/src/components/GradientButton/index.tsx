import React from 'react';

interface GradientButtonProps {
  text: string;
  onClick: () => void;
}

export const GradientButton = ({ text, onClick }: GradientButtonProps) => {
  return (
    <button className="gradient-btn" onClick={onClick}>
      {text}
    </button>
  );
};
