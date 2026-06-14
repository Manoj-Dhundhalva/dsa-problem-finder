import { Result, Button } from "antd";
import styles from "./styles.module.scss";

type TProps = {
  error: unknown;
  resetErrorBoundary: () => void;
};

function ErrorFallback({ error }: TProps) {
  const message = error instanceof Error ? error.message : "Something went wrong";

  return (
    <div className={styles["error-fallback"]}>
      <Result
        status="500"
        title="Something went wrong"
        subTitle={message}
        extra={[
          <Button type="primary" key="refresh" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>,
        ]}
      />
    </div>
  );
}

export default ErrorFallback;
