import { memo, useState } from "react";
import Editor from "@monaco-editor/react";
import { useGlobalState } from "@/contexts/global";
import { THEME } from "@/constants/ui-preferences.contants";
import { EDITOR_LANGUAGE } from "./constants";
import { utils } from "@/utils";
import type { TEditorLanguage } from "./types";
import { Button, Flex } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type TProps = {
  code: string;
  language?: TEditorLanguage;
};

function CodeViewer({ code, language = EDITOR_LANGUAGE.JAVASCRIPT }: TProps) {
  const {
    state: {
      uiPreferences: { theme },
    },
  } = useGlobalState();

  const isDarkMode = theme === THEME.DARK;

  const [height, setHeight] = useState("200px");
  const [copied, setCopied] = useState(false);

  return (
    <Flex vertical gap={8} className={styles["json-viewer"]}>
      <div className={styles["copy-button-container"]}>
        <Button
          className={styles["copy-button"]}
          icon={copied ? <CheckOutlined /> : <CopyOutlined />}
          onClick={() =>
            utils.browser.copyToClipboard(code).then(() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            })
          }
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <Editor
        height={height}
        defaultLanguage={language}
        value={code}
        theme={isDarkMode ? "vs-dark" : "vs-light"}
        onMount={(editor) => {
          const updateHeight = () => {
            const contentHeight = Math.min(editor.getContentHeight(), 1000);

            setHeight(`${contentHeight}px`);

            editor.layout({
              width: editor.getLayoutInfo().width,
              height: contentHeight,
            });
          };

          updateHeight();

          editor.onDidContentSizeChange(() => {
            updateHeight();
          });
        }}
        options={{
          fontFamily: "Martian Mono",
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
          scrollBeyondLastLine: false,
          tabSize: 2,
        }}
      />
    </Flex>
  );
}

export default memo(CodeViewer);
