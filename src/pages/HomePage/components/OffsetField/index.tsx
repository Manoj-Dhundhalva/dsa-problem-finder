import { memo } from "react";
import type { TFilterState } from "../../types";
import { InputNumber } from "antd";

type TProps = {
  offset: TFilterState["offset"];
  onChange: (updater: (prev: TFilterState["offset"]) => TFilterState["offset"]) => void;
};

function OffsetField({ offset, onChange }: TProps) {
  return (
    <InputNumber
      style={{ minWidth: "240px" }}
      min={0}
      defaultValue={0}
      placeholder="e.g. 20"
      value={offset}
      onChange={(value) => {
        if (value != null) onChange(() => value);
      }}
    />
  );
}

export default memo(OffsetField);
