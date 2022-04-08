import React from 'react';

interface IBlockNoteProps {
  children: React.ReactNode;
  type?: string;
}

export const BlockNote: React.FC<IBlockNoteProps> = ({ type, children }) => {
  return (
    <div
      className={`p-2 m-3 text-sm rounded italic ${
        type === 'warning'
          ? 'bg-orange-200 text-orange-600'
          : type === 'error'
          ? 'bg-red-200 text-red-600'
          : 'bg-gray-200 text-gray-600'
      }`}
    >
      {children}
    </div>
  );
};
