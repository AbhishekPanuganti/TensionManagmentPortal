import {
  Button,
  Card,
  CardBody,
  Typography,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@material-tailwind/react";
import { useState, useMemo } from "react";

export function ProposalsTable({ filteredProposals }) {
  const [sortConfig, setSortConfig] = useState({
    key: "createdOn",
    direction: "desc",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedProposals = useMemo(() => {
    return [...filteredProposals].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredProposals, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedProposals.filter((proposal) =>
      proposal.proposalName.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [sortedProposals, searchTerm]);

  return (
    <Card className="w-full shadow-lg rounded-lg bg-white">
      <CardBody className="overflow-x-auto px-4 pt-6 pb-6">
        {/* Top Row: Title, Search, and Add Button */}
        <div className="flex flex-col md:flex-row  justify-end items-end md:items-center gap-4 w-full mb-2 ">
          <div className="w-full md:w-auto flex items-center gap-3">
            <div className="w-full md:w-64">
              <Input
                type="text"
                label="Search proposals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="!w-full"
                containerProps={{ className: "!min-w-0" }}
              />
            </div>
            <button
              onClick={() => alert("Add new proposal")}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
            >
              Add Proposal
            </button>
          </div>
        </div>

        {/* Table */}
        {filteredData.length === 0 ? (
          <div className="text-center text-gray-500 py-4">
            No proposals found
          </div>
        ) : (
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-green-700 text-white">
              <tr>
                {["Proposal", "Tension", "Status", "Created On", "Actions"].map(
                  (header) => (
                    <th
                      key={header}
                      onClick={() =>
                        header !== "Actions" && handleSort(header.toLowerCase())
                      }
                      className={`p-3 font-semibold cursor-pointer ${
                        header !== "Actions"
                          ? "hover:bg-green-800 transition-colors"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        {header}
                        {header !== "Actions" &&
                          sortConfig.key === header.toLowerCase() && (
                            <span className="ml-1 text-xs">
                              {sortConfig.direction === "asc" ? "▲" : "▼"}
                            </span>
                          )}
                      </div>
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {filteredData.map(
                ({ id, proposalName, tensionName, status, createdOn }) => (
                  <tr
                    key={id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-3">{proposalName}</td>
                    <td className="p-3">{tensionName}</td>
                    <td className="p-3 font-medium text-gray-800">{status}</td>
                    <td className="p-3 text-gray-500">{createdOn}</td>
                    <td className="p-3">
                      <button
                        onClick={() => alert("View Proposal")}
                        className="text-[#ffbf00] border border-[#ffbf00] px-3 py-1 rounded-md text-sm"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        )}
      </CardBody>
    </Card>
  );
}

export default ProposalsTable;
