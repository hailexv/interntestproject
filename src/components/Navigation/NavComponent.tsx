import * as React from "react";
import {Flex,Text} from "rebass";
import {navBarStyle,navBarBrandStyle} from "./NavStyle";

export default function Navbar() {
    return (
        <Flex px={2} sx={navBarStyle}>
            <Text p={5}  sx={navBarBrandStyle}>Title</Text>
        </Flex>

    )
}