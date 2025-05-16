import { Input, Select, Option } from "@material-tailwind/react";

export function TensionFilter({
  searchText,
  setSearchText,
  filterStatus,
  setFilterStatus,
  filterImpact,
  setFilterImpact,
  filterPriority,
  setFilterPriority,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-2">
      <div className="w-full md:w-1/3">
        <Input
          label="Search Tensions"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="w-full md:w-1/4">
        <Select
          label="Status"
          value={filterStatus}
          onChange={(val) => setFilterStatus(val || "")}
        >
          <Option value="">All</Option>
          <Option value="Active">Active</Option>
          <Option value="Resolved">Resolved</Option>
          <Option value="Inactive">Inactive</Option>
        </Select>
      </div>

      <div className="w-full md:w-1/4">
        <Select
          label="Impact"
          value={filterImpact}
          onChange={(val) => setFilterImpact(val || "")}
        >
          <Option value="">All</Option>
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </div>

      <div className="w-full md:w-1/4">
        <Select
          label="Priority"
          value={filterPriority}
          onChange={(val) => setFilterPriority(val || "")}
        >
          <Option value="">All</Option>
          <Option value="Urgent">Urgent</Option>
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </div>
    </div>
  );
}

export default TensionFilter;
