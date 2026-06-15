import { memo, useState } from "react";
import { DEFAULT_LIMIT, DEFAULT_OFFSET, RATING, SORT_FIELDS, SORT_ORDER } from "./constants";
import { utils } from "@/utils";
import type { TFilterState } from "./types";
import { JsonViewer } from "@/components/@common";
import { RatingField, TagsField, StartTimeField, SortField, OffsetField, LimitField } from "./components";
import { Flex, Form } from "antd";

function HomePage() {
  const [filterState, setFilterState] = useState<TFilterState>(() => ({
    tags: [],
    ratings: [RATING.MIN, RATING.MAX],
    startTime: [utils.date.getEpochSecondsForDate("2010-01-01T00:00:00Z"), utils.date.getCurrentEpochSeconds()],
    sort: {
      field: SORT_FIELDS.START_TIME.value,
      order: SORT_ORDER.DESC,
    },
    offset: DEFAULT_OFFSET,
    limit: DEFAULT_LIMIT,
  }));

  const handleFieldChange =
    <K extends keyof TFilterState>(key: K) =>
    (updater: (value: TFilterState[K]) => TFilterState[K]) => {
      setFilterState((prev) => ({
        ...prev,
        [key]: updater(prev[key]),
      }));
    };

  return (
    <Flex vertical>
      <Form layout="horizontal" labelCol={{ span: 2 }} labelAlign="left">
        <Form.Item label="Tags">
          <TagsField tags={filterState.tags} onChange={handleFieldChange("tags")} />
        </Form.Item>

        <Form.Item label="Ratings">
          <RatingField ratings={filterState.ratings} onChange={handleFieldChange("ratings")} />
        </Form.Item>

        <Form.Item label="Start Time">
          <StartTimeField startTime={filterState.startTime} onChange={handleFieldChange("startTime")} />
        </Form.Item>

        <Form.Item label="Sort By">
          <SortField sort={filterState.sort} onChange={handleFieldChange("sort")} />
        </Form.Item>

        <Form.Item label="Offset">
          <OffsetField offset={filterState.offset} onChange={handleFieldChange("offset")} />
        </Form.Item>

        <Form.Item label="Limit">
          <LimitField limit={filterState.limit} onChange={handleFieldChange("limit")} />
        </Form.Item>
      </Form>

      <JsonViewer code={JSON.stringify(filterState, null, 2)} />
    </Flex>
  );
}

export default memo(HomePage);
