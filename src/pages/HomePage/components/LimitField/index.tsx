import { memo } from "react";
import type { TFilterState } from "../../types";
import { InputNumber } from "antd";

type TProps = {
  limit: TFilterState["limit"];
  onChange: (updater: (prev: TFilterState["limit"]) => TFilterState["limit"]) => void;
};

function LimitField({ limit, onChange }: TProps) {
  return (
    <InputNumber
      style={{ minWidth: "240px" }}
      min={0}
      defaultValue={0}
      placeholder="e.g. 20"
      value={limit}
      onChange={(value) => {
        if (value != null) onChange(() => value);
      }}
    />
  );
}

export default memo(LimitField);
