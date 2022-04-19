import React, { useState } from "react";

import "./App.css";

// First approach - Interface
// interface AChildComponent {
//   title: string;
//   body: string;
// }

// Second approach - Interface - Replace the body directly into the props
// Ideal if you have a couple of inputs & will not reuse the interface again.

// interface ChildComponent {
//   title: string;
//   body: string;
// }
interface BoxProps {
  children: React.ReactNode;
}

function Box({ children, ...styles }: BoxProps & React.CSSProperties) {
  return <div style={styles}>{children}</div>;
}

function Button({
  children,
  styles, 
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  styles:React.CSSProperties) {
  return (
    <>
      <button style={styles}{...rest}>{children}</button>
    </>
  );
}

interface ChildComponentProps {
  title: string;
  body: string;
  children: React.ReactNode;
}

function ChildComponent({ title, body, children }: ChildComponentProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>

      <Box display="flex" backgroundColor="red">
        This is a box child component
      </Box>

      <hr />

      <Button styles ={{backgroundColor:"green"}}>This is a button</Button>

      <div>{children}</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ChildComponent
        title="This is a title"
        body="This is the body"
        children={undefined}
      />
    </div>
  );
}

export default App;
