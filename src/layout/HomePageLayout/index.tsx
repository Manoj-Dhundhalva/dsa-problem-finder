import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Layout } from "antd";
import styles from "./styles.module.scss";

function HomePageLayout() {
  return (
    <Layout className={styles["homepage-layout"]}>
      <Layout.Header className={styles["header"]}>
        <Navbar />
      </Layout.Header>
      <Layout.Content className={styles["content"]}>
        <Outlet />
      </Layout.Content>
      <Layout.Footer className={styles["footer"]}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default memo(HomePageLayout);
