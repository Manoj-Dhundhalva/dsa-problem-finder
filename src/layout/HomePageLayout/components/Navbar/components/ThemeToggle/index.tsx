import { memo } from "react";
import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useGlobalState } from "@/contexts/global";
import { THEME, type TTheme } from "@/constants/ui-preferences.contants";

function ThemeToggle() {
  const {
    state: {
      uiPreferences: { theme },
    },
    setState,
  } = useGlobalState();

  const setTheme = (theme: TTheme) => {
    setState((prev) => ({
      ...prev,
      uiPreferences: {
        ...prev.uiPreferences,
        theme,
      },
    }));
  };

  if (theme === THEME.DARK) {
    return (
      <Button
        color="default"
        shape="circle"
        variant="solid"
        icon={<SunOutlined />}
        onClick={() => setTheme(THEME.LIGHT)}
      />
    );
  }

  return (
    <Button
      color="default"
      shape="circle"
      variant="solid"
      icon={<MoonOutlined />}
      onClick={() => setTheme(THEME.DARK)}
    />
  );
}

export default memo(ThemeToggle);
