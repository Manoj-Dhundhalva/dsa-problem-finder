import { message } from "antd";

export class BrowserUtils {
  private static instance: BrowserUtils;

  private constructor() {}

  static getInstance(): BrowserUtils {
    if (!BrowserUtils.instance) {
      BrowserUtils.instance = new BrowserUtils();
    }
    return BrowserUtils.instance;
  }

  copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      message.success("Copied to clipboard");
      return true;
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        const success = document.execCommand("copy");

        document.body.removeChild(textarea);

        if (success) {
          message.success("Copied to clipboard");
        } else {
          message.error("Failed to copy");
        }

        return success;
      } catch {
        message.error("Failed to copy");
        return false;
      }
    }
  };
}
