import React from 'react';

export interface ButtonProps {
  /**
   * ボタンのラベル
   */
  label: string;
  /**
   * プライマリかセカンダリか
   */
  variant?: 'primary' | 'secondary';
  /**
   * ボタンのサイズ
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * クリック時のハンドラー
   */
  onClick?: () => void;
}

/**
 * シンプルなボタンコンポーネント
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  onClick,
}) => {
  const baseStyles = 'font-semibold rounded cursor-pointer border-0 inline-block leading-none';
  
  const variantStyles = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700',
    secondary: 'text-gray-900 bg-transparent border border-gray-300 hover:bg-gray-100',
  };
  
  const sizeStyles = {
    small: 'text-xs py-2 px-4',
    medium: 'text-sm py-3 px-5',
    large: 'text-base py-4 px-6',
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
