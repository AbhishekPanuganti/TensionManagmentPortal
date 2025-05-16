import { useState } from "react";
// import { proposalsData, tensionsData } from "@/data";
import TensionFilter from "./TensionFilter";
import TensionCard from "./TensionCard";
import ProposalsTable from "../Proposals/ProposalsTable";
import CreateTensionForm from "./CreateTensionForm";
// formConfig.ts

export const tensionsData = [
  {
    id: 1,
    tensionName: "Budget Overrun in Project X",
    description: "Project X has exceeded its budget by 20%.",
    status: "Active",
    impact: "High",
    priority: "Urgent",
    proposals: [1, 2],
    financialYear: "2024-25",
    forums: "Finance Forum",
    circle: "West",
    product: "Project X",
    customer: "ABC Corp",
    department: "Finance",
    tensionRaiser: "John Doe",
    tensionRaiserDepartment: "Finance",
    tensionDescription: "Project X has exceeded its allocated budget.",
    enabler: "Budget Automation Tool",
    salesValue: 15.5,
    contributionValue: 4.2,
    creationDate: "2024-11-01",
    targetDate: "2025-02-15",
    customerImpact: "Project delays and increased costs",
  },
  {
    id: 2,
    tensionName: "Low Engagement in Remote Teams",
    description: "Remote teams are showing lower engagement scores.",
    status: "Active",
    impact: "Medium",
    priority: "High",
    proposals: [3],
    financialYear: "2024-25",
    forums: "HR Forum",
    circle: "North",
    product: "Engagement Survey",
    customer: "Internal",
    department: "HR",
    tensionRaiser: "Jane Smith",
    tensionRaiserDepartment: "HR",
    tensionDescription: "Decreased productivity and team morale.",
    enabler: "Engagement Platform",
    salesValue: 0,
    contributionValue: 0,
    creationDate: "2024-10-10",
    targetDate: "2025-01-01",
    customerImpact: "Employee dissatisfaction",
  },
  {
    id: 3,
    tensionName: "Tool Redundancy Across Departments",
    description:
      "Multiple departments are using different tools for the same task.",
    status: "Inactive",
    impact: "Low",
    priority: "Medium",
    proposals: [4],
    financialYear: "2024-25",
    forums: "IT Forum",
    circle: "South",
    product: "Tool Suite",
    customer: "Internal",
    department: "IT",
    tensionRaiser: "Akash Mehta",
    tensionRaiserDepartment: "IT",
    tensionDescription: "Tool overlap leads to unnecessary expenses.",
    enabler: "Centralized IT Management",
    salesValue: 0,
    contributionValue: 1.5,
    creationDate: "2024-08-15",
    targetDate: "2025-01-15",
    customerImpact: "Operational inefficiencies",
  },
  {
    id: 4,
    tensionName: "Delay in Product Y Launch",
    description:
      "Product Y launch delayed due to unresolved tech dependencies.",
    status: "Resolved",
    impact: "High",
    priority: "High",
    proposals: [5, 6],
    financialYear: "2024-25",
    forums: "Tech Forum",
    circle: "East",
    product: "Product Y",
    customer: "XYZ Ltd.",
    department: "Technology",
    tensionRaiser: "Priya Nair",
    tensionRaiserDepartment: "Technology",
    tensionDescription: "Pending integration with API X and system Z.",
    enabler: "Technical Dependency Roadmap",
    salesValue: 25.0,
    contributionValue: 8.0,
    creationDate: "2024-09-05",
    targetDate: "2025-03-01",
    customerImpact: "Delayed revenue realization",
  },
  {
    id: 5,
    tensionName: "Budget Overrun in Project X",
    description: "Project X has exceeded its budget by 20%.",
    status: "Active",
    impact: "High",
    priority: "Urgent",
    proposals: [1, 2],
    financialYear: "2024-25",
    forums: "Finance Forum",
    circle: "West",
    product: "Project X",
    customer: "ABC Corp",
    department: "Finance",
    tensionRaiser: "John Doe",
    tensionRaiserDepartment: "Finance",
    tensionDescription: "Same as ID 1",
    enabler: "Budget Automation Tool",
    salesValue: 15.5,
    contributionValue: 4.2,
    creationDate: "2024-11-01",
    targetDate: "2025-02-15",
    customerImpact: "Project delays and increased costs",
  },
  {
    id: 6,
    tensionName: "Low Engagement in Remote Teams",
    description: "Remote teams are showing lower engagement scores.",
    status: "Active",
    impact: "Medium",
    priority: "High",
    proposals: [3],
    financialYear: "2024-25",
    forums: "HR Forum",
    circle: "North",
    product: "Engagement Survey",
    customer: "Internal",
    department: "HR",
    tensionRaiser: "Jane Smith",
    tensionRaiserDepartment: "HR",
    tensionDescription: "Repeated concern from previous quarters.",
    enabler: "Engagement Platform",
    salesValue: 0,
    contributionValue: 0,
    creationDate: "2024-10-10",
    targetDate: "2025-01-01",
    customerImpact: "Employee dissatisfaction",
  },
  {
    id: 7,
    tensionName: "Tool Redundancy Across Departments",
    description:
      "Multiple departments are using different tools for the same task.",
    status: "Inactive",
    impact: "Low",
    priority: "Medium",
    proposals: [4],
    financialYear: "2024-25",
    forums: "IT Forum",
    circle: "South",
    product: "Tool Suite",
    customer: "Internal",
    department: "IT",
    tensionRaiser: "Akash Mehta",
    tensionRaiserDepartment: "IT",
    tensionDescription: "Duplicate of tension ID 3",
    enabler: "Centralized IT Management",
    salesValue: 0,
    contributionValue: 1.5,
    creationDate: "2024-08-15",
    targetDate: "2025-01-15",
    customerImpact: "Operational inefficiencies",
  },
  {
    id: 8,
    tensionName: "Delay in Product Y Launch",
    description:
      "Product Y launch delayed due to unresolved tech dependencies.",
    status: "Resolved",
    impact: "High",
    priority: "High",
    proposals: [5, 6],
    financialYear: "2024-25",
    forums: "Tech Forum",
    circle: "East",
    product: "Product Y",
    customer: "XYZ Ltd.",
    department: "Technology",
    tensionRaiser: "Priya Nair",
    tensionRaiserDepartment: "Technology",
    tensionDescription: "Duplicate of tension ID 4",
    enabler: "Technical Dependency Roadmap",
    salesValue: 25.0,
    contributionValue: 8.0,
    creationDate: "2024-09-05",
    targetDate: "2025-03-01",
    customerImpact: "Delayed revenue realization",
  },
];

export const proposalsData = [
  {
    id: 1,
    proposalName: "Allocate Additional Budget for Project X",
    tensionName: "Budget Overrun in Project X",
    status: "Pending",
    createdOn: "2025-05-01",
  },
  {
    id: 2,
    proposalName: "Reduce Scope of Phase 2",
    tensionName: "Budget Overrun in Project X",
    status: "Approved",
    createdOn: "2025-05-03",
  },
  {
    id: 3,
    proposalName: "Initiate Weekly Virtual Hangouts",
    tensionName: "Low Engagement in Remote Teams",
    status: "Implemented",
    createdOn: "2025-04-25",
  },
  {
    id: 4,
    proposalName: "Create Unified Tooling Policy",
    tensionName: "Tool Redundancy Across Departments",
    status: "Rejected",
    createdOn: "2025-03-20",
  },
  {
    id: 5,
    proposalName: "Hire External Consultants",
    tensionName: "Delay in Product Y Launch",
    status: "Approved",
    createdOn: "2025-04-10",
  },
  {
    id: 6,
    proposalName: "Restructure Development Timeline",
    tensionName: "Delay in Product Y Launch",
    status: "Pending",
    createdOn: "2025-04-12",
  },
];

export function TensionManagement() {
  const [selectedTension, setSelectedTension] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterImpact, setFilterImpact] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const handleTensionSelect = (tension) => {
    setSelectedTension(tension);
  };

  const filteredTensions = tensionsData.filter((tension) => {
    return (
      (searchText === "" ||
        tension.tensionName.toLowerCase().includes(searchText.toLowerCase()) ||
        tension.description.toLowerCase().includes(searchText.toLowerCase())) &&
      (filterStatus === "" || tension.status === filterStatus) &&
      (filterImpact === "" || tension.impact === filterImpact) &&
      (filterPriority === "" || tension.priority === filterPriority)
    );
  });

  const filteredProposals = selectedTension
    ? proposalsData.filter(
        (proposal) => proposal.tensionName === selectedTension.tensionName,
      )
    : [];
  const [showForm, setShowForm] = useState(false);
  const [openTensionForm, setOpenTensionForm] = useState(false);

  return (
    <div className="mb-8 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-4 pl-2">
        <h2 className="text-xl font-semibold text-gray-800">
          Tensions & Proposals Overview
        </h2>
        <button
          onClick={() => setOpenTensionForm(true)}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Create Tension
        </button>
      </div>
      <TensionFilter
        searchText={searchText}
        setSearchText={setSearchText}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterImpact={filterImpact}
        setFilterImpact={setFilterImpact}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />

      <div className="flex flex-col md:flex-row gap-1">
        <div className="w-full md:w-2/5 h-[70vh] overflow-y-auto p-2 space-y-2">
          {filteredTensions.map((tension) => (
            <TensionCard
              key={tension.id}
              tension={tension}
              selectedTension={selectedTension}
              handleTensionSelect={handleTensionSelect}
            />
          ))}
        </div>

        <div className="w-full md:w-3/5 flex flex-col gap-2 p-2">
          {selectedTension ? (
            <ProposalsTable filteredProposals={filteredProposals} />
          ) : (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 p-6 text-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-6h13M9 5h13m-4 4v6M3 17h.01M3 13h.01M3 9h.01M3 5h.01"
                />
              </svg>
              <p className="text-gray-600 text-lg font-medium">
                Select a tension to see related proposals
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Choose a tension from the list to explore the linked proposals
                and their details.
              </p>
            </div>
          )}
        </div>
      </div>
      <CreateTensionForm
        openTensionForm={openTensionForm}
        setOpenTensionForm={setOpenTensionForm}
      />
    </div>
  );
}

export default TensionManagement;
