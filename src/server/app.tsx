import * as React from "react";
import { createGlobalStyle, styled, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 16px;
    height: 100%;
    width: 100%;
    font-family: "Lucida Console", "Courier New", monospace;
    background-color: black;
    color: white;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  background: ${(props) => props.primary ? "#F7DF1E" : "transparent"};
  color: ${(props) => props.primary ? "black" : "#F7DF1E"};
  font-size: 1rem;
  margin: 16px 16px 0 0;
  padding: 8px 16px;
  border: 2px solid #F7DF1E;
  border-radius: 3px;
`;

export function App({ styles }: { styles?: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SSR</title>
        {styles}
      </head>
      <body>
        <ThemeProvider theme={{}}>
          <GlobalStyle />
          <div>
            Interactions are available after 5 seconds, see browser logs for
            details.
          </div>
          <Button
            onClick={() => alert('Clicked on hydrated "Default" button.')}
          >
            Default
          </Button>
          <Button
            primary
            onClick={() => alert('Clicked on hydrated "Primary" button.')}
          >
            Primary
          </Button>
        </ThemeProvider>
      </body>
    </html>
  );
}
