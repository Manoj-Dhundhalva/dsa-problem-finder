import { memo, useMemo } from "react";
import { RATING } from "../../constants";
import type { TOption } from "@/types/option.types";
import type { TFilterState } from "../../types";
import { Flex, Select } from "antd";
import { MinusOutlined } from "@ant-design/icons";

type TProps = {
  ratings: TFilterState["ratings"];
  onChange: (updater: (prev: TFilterState["ratings"]) => TFilterState["ratings"]) => void;
};

function RatingField({ ratings, onChange }: TProps) {
  const ratingsOptions = useMemo(() => {
    const start = RATING.MIN;
    const end = RATING.MAX;
    const step = 100;

    const result: TOption<number, number>[] = [];

    for (let i = start; i <= end; i += step) {
      result.push({ value: i, label: i });
    }

    return result;
  }, []);

  return (
    <Flex align="center" gap={12}>
      <Flex align="center">
        <Select
          style={{ minWidth: "240px" }}
          showSearch={{ optionFilterProp: "label" }}
          placeholder="Select min rating"
          value={ratings[0]}
          onChange={(option) => onChange((prev) => [option, prev[1]])}
          options={ratingsOptions}
        />
      </Flex>

      <Flex align="center">
        <MinusOutlined style={{ color: "var(--ant-color-border)" }} />
      </Flex>

      <Flex align="center">
        <Select
          style={{ minWidth: "240px" }}
          showSearch={{ optionFilterProp: "label" }}
          placeholder="Select max rating"
          value={ratings[1]}
          onChange={(option) => onChange((prev) => [prev[0], option])}
          options={ratingsOptions}
        />
      </Flex>
    </Flex>
  );
}

export default memo(RatingField);
