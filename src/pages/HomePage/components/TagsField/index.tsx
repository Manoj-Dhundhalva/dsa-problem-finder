import { memo, useMemo } from "react";
import { PROBLEM_TAGS } from "../../constants";
import type { TFilterState } from "../../types";
import { Select } from "antd";

type TProps = {
  tags: TFilterState["tags"];
  onChange: (updater: (prev: TFilterState["tags"]) => TFilterState["tags"]) => void;
};

function TagsField({ tags, onChange }: TProps) {
  const tagOptions = useMemo(
    () =>
      Object.values(PROBLEM_TAGS).map((tag) => ({
        value: tag,
        label: tag,
      })),
    [],
  );

  return (
    <Select
      listHeight={600}
      style={{ minWidth: "800px" }}
      mode="multiple"
      showSearch={{ optionFilterProp: "label" }}
      placeholder="Select tags"
      value={tags}
      onChange={(options) => onChange(() => options)}
      options={tagOptions}
      allowClear
    />
  );
}

export default memo(TagsField);
