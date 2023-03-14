import React from 'react';

export interface IButtonProps {
  onClick: () => void;
  className?: string;
  text?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
} //ref : ChatGPT