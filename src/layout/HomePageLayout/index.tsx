import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Layout } from "antd";

function HomePageLayout() {
  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default memo(HomePageLayout);
