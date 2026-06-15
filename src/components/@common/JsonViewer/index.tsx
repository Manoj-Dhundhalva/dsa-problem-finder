import { memo, useState } from "react";
import Editor from "@monaco-editor/react";
import { useGlobalState } from "@/contexts/global";
import { THEME } from "@/constants/ui-preferences.contants";
import { utils } from "@/utils";
import { Button, Flex } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type TProps = {
  code: string;
};

function JsonViewer({ code }: TProps) {
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
        defaultLanguage="json"
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
          readOnly: true,
          domReadOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          tabSize: 2,
          scrollbar: {
            alwaysConsumeMouseWheel: false,
          },
        }}
      />
    </Flex>
  );
}

export default memo(JsonViewer);
