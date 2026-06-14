import { memo } from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles["page-not-found"]}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={[
          <Button type="primary" key="home" onClick={() => navigate("/")}>
            Back Home
          </Button>,
          <Button key="back" onClick={() => navigate(-1)}>
            Go Back
          </Button>,
        ]}
      />
    </div>
  );
}

export default memo(PageNotFound);
