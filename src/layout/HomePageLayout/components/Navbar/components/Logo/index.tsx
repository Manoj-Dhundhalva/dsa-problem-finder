import { memo } from "react";
import { Typography } from "antd";

function Logo() {
  return <Typography.Title level={3}>DSA Problem Finder</Typography.Title>;
}

export default memo(Logo);
