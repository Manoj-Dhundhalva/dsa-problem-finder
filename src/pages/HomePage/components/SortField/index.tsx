import { memo } from "react";
import { SORT_FIELDS, SORT_ORDER } from "../../constants";
import type { TFilterState, TSortOrder } from "../../types";
import { Button, Flex, Select } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

type TProps = {
  sort: TFilterState["sort"];
  onChange: (updater: (prev: TFilterState["sort"]) => TFilterState["sort"]) => void;
};

function SortField({ sort, onChange }: TProps) {
  const sortFieldOptions = Object.values(SORT_FIELDS);

  const setSortOrder = (order: TSortOrder) => {
    onChange((prev) => ({ ...prev, order }));
  };

  const renderSortOrderBtn = () => {
    if (sort.order === SORT_ORDER.DESC) {
      return (
        <Button
          className={styles["order-button"]}
          style={{ minWidth: "140px" }}
          iconPlacement="end"
          icon={<ArrowDownOutlined />}
          onClick={() => setSortOrder(SORT_ORDER.ASC)}
        >
          Desc
        </Button>
      );
    }

    return (
      <Button
        className={styles["order-button"]}
        style={{ minWidth: "140px" }}
        iconPlacement="end"
        icon={<ArrowUpOutlined />}
        onClick={() => setSortOrder(SORT_ORDER.DESC)}
      >
        Asc
      </Button>
    );
  };

  return (
    <Flex align="center" gap={12} className={styles["sort-field"]}>
      <Flex align="center">
        <Select
          style={{ minWidth: "240px" }}
          showSearch={{ optionFilterProp: "label" }}
          placeholder="Select sort field"
          value={sort.field}
          onChange={(option) => onChange((prev) => ({ ...prev, field: option }))}
          options={sortFieldOptions}
        />
      </Flex>

      <Flex align="center">{renderSortOrderBtn()}</Flex>
    </Flex>
  );
}

export default memo(SortField);
