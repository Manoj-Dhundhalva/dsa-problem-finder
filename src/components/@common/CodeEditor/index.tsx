import { memo, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useGlobalState } from "@/contexts/global";
import { utils } from "@/utils";
import { Button, Flex } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type TProps = {
  markdown: string;
  setMarkdown: (data: string) => void;
};

function CodeViewer({ markdown, setMarkdown }: TProps) {
  const {
    state: {
      uiPreferences: { theme },
    },
  } = useGlobalState();

  const [copied, setCopied] = useState(false);

  if (!markdown) return null;

  return (
    <Flex vertical gap={8} className={styles["json-viewer"]}>
      <div className={styles["copy-button-container"]}>
        <Button
          className={styles["copy-button"]}
          icon={copied ? <CheckOutlined /> : <CopyOutlined />}
          onClick={() =>
            utils.browser.copyToClipboard(markdown).then(() => {
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

      <div data-color-mode={theme}>
        <MDEditor value={markdown} onChange={(val) => setMarkdown(val || "")} height={1000} />
      </div>
    </Flex>
  );
}

export default memo(CodeViewer);
