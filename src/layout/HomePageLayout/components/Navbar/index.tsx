import { memo } from "react";
import { Logo, ThemeToggle } from "./components";
import { Flex } from "antd";

function Navbar() {
  return (
    <Flex align="center" justify="space-between">
      <Logo />
      <ThemeToggle />
    </Flex>
  );
}

export default memo(Navbar);
