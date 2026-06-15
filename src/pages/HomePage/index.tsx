import { memo, useState } from "react";
import { DEFAULT_LIMIT, DEFAULT_OFFSET, RATING, SORT_FIELDS, SORT_ORDER } from "./constants";
import { utils } from "@/utils";
import type { TFilterState } from "./types";
import { RatingField, TagsField, StartTimeField } from "./components";
import { Form } from "antd";

function HomePage() {
  const [filterState, setFilterState] = useState<TFilterState>(() => ({
    tags: [],
    ratings: [RATING.MIN, RATING.MAX],
    startTime: [utils.date.getEpochSecondsForDate("2010-01-01T00:00:00Z"), utils.date.getCurrentEpochSeconds()],
    sort: {
      field: SORT_FIELDS.START_TIME,
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
    <Form layout="horizontal" labelCol={{ span: 2 }}>
      <Form.Item label="Tags">
        <TagsField tags={filterState.tags} onChange={handleFieldChange("tags")} />
      </Form.Item>

      <Form.Item label="Ratings">
        <RatingField ratings={filterState.ratings} onChange={handleFieldChange("ratings")} />
      </Form.Item>

      <Form.Item label="Start Time">
        <StartTimeField startTime={filterState.startTime} onChange={handleFieldChange("startTime")} />
      </Form.Item>
    </Form>
  );
}

export default memo(HomePage);
