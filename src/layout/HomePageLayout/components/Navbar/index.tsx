import { memo } from "react";
import { ThemeToggle } from "./components";

function Navbar() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}

export default memo(Navbar);
