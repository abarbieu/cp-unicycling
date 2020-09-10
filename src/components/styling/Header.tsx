import React from 'react';
type MyProps = { children: React.ReactNode };

export default function Header (props: MyProps) {
  return (
    <div>
      <h1 style={{ color: 'black' }}>{props.children}</h1>
    </div>
  );
}
