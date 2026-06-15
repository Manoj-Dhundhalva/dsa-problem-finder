import { memo } from "react";
import dayjs from "dayjs";
import { utils } from "@/utils";
import type { TFilterState } from "../../types";
import { DatePicker, Flex } from "antd";
import { MinusOutlined } from "@ant-design/icons";

type TProps = {
  startTime: TFilterState["startTime"];
  onChange: (updater: (prev: TFilterState["startTime"]) => TFilterState["startTime"]) => void;
};

function StartTimeField({ startTime, onChange }: TProps) {
  return (
    <Flex align="center" gap={12}>
      <Flex align="center">
        <DatePicker
          style={{ minWidth: "240px" }}
          format="DD-MM-YYYY"
          value={dayjs.unix(startTime[0])}
          onChange={(date) => {
            const epoch = date?.unix() ?? utils.date.getEpochSecondsForDate("2010-01-01T00:00:00Z");
            onChange((prev) => [epoch, prev[1]]);
          }}
          allowClear={false}
        />
      </Flex>

      <Flex align="center">
        <MinusOutlined style={{ color: "var(--ant-color-border)" }} />
      </Flex>

      <Flex align="center">
        <DatePicker
          style={{ minWidth: "240px" }}
          format="DD-MM-YYYY"
          value={dayjs.unix(startTime[1])}
          onChange={(date) => {
            const epoch = date?.unix() ?? utils.date.getCurrentEpochSeconds();
            onChange((prev) => [prev[0], epoch]);
          }}
          allowClear={false}
        />
      </Flex>
    </Flex>
  );
}

export default memo(StartTimeField);
