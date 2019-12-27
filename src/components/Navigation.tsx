import * as React from "react";
import { space, width, fontSize, color } from 'styled-system';
import styled, { ThemeProvider } from 'styled-components';
import theme from "./theme";

export class Navigation extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Box bg="orange" fontSize={24} width={200} p={20} m="50px auto">
                    This is a Box
                </Box>
            </ThemeProvider>
        );
    }
}

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
