// import { useState } from "react";
// import { Card, Typography, Button, CardBody } from "@material-tailwind/react";

// // Sample data for Tensions
// export const tensionsData = [
//   {
//     id: 1,
//     tensionName: "Tension A",
//     description: "Detailed description of Tension A. Information related to this tension can be displayed here.",
//     impact: "High",
//     priority: "Urgent",
//     status: "Active",
//     createdBy: "John Doe",
//     createdOn: "2025-05-01"
//   },
//   {
//     id: 2,
//     tensionName: "Tension B",
//     description: "Detailed description of Tension B. Information related to this tension can be displayed here.",
//     impact: "Medium",
//     priority: "Medium",
//     status: "Resolved",
//     createdBy: "Jane Doe",
//     createdOn: "2025-05-05"
//   },
//   {
//     id: 3,
//     tensionName: "Tension C",
//     description: "Detailed description of Tension C. Information related to this tension can be displayed here.",
//     impact: "Low",
//     priority: "Low",
//     status: "Inactive",
//     createdBy: "Alice Smith",
//     createdOn: "2025-04-30"
//   },
//   {
//     id: 4,
//     tensionName: "Tension D",
//     description: "Detailed description of Tension D. Information related to this tension can be displayed here.",
//     impact: "High",
//     priority: "High",
//     status: "Active",
//     createdBy: "Bob Brown",
//     createdOn: "2025-05-02"
//   }
// ];

// // Sample data for Proposals
// export const proposalsData = [
//   {
//     id: 1,
//     proposalName: "Proposal 1",
//     tensionName: "Tension A",
//     status: "Approved",
//     createdOn: "2025-05-01"
//   },
//   {
//     id: 2,
//     proposalName: "Proposal 2",
//     tensionName: "Tension B",
//     status: "Pending",
//     createdOn: "2025-05-05"
//   },
//   {
//     id: 3,
//     proposalName: "Proposal 3",
//     tensionName: "Tension C",
//     status: "Rejected",
//     createdOn: "2025-04-30"
//   },
//   {
//     id: 4,
//     proposalName: "Proposal 4",
//     tensionName: "Tension A",
//     status: "Approved",
//     createdOn: "2025-05-02"
//   },
//   {
//     id: 5,
//     proposalName: "Proposal 5",
//     tensionName: "Tension D",
//     status: "Pending",
//     createdOn: "2025-05-10"
//   }
// ];

// export function TensionManagement2() {
//   const [selectedTension, setSelectedTension] = useState(null);

//   const handleTensionSelect = (tension) => {
//     setSelectedTension(tension);
//   };

//   // Filter proposals based on selected tension
//   const filteredProposals = selectedTension
//     ? proposalsData.filter(
//         (proposal) => proposal.tensionName === selectedTension.tensionName
//       )
//     : [];

//   // Utility to assign color based on the key type
//   const getColor = (keyType) => {
//     switch (keyType) {
//       case "status":
//         return selectedTension?.status === "Active"
//           ? "bg-green-100"
//           : selectedTension?.status === "Inactive"
//           ? "bg-red-100"
//           : "bg-gray-100";
//       case "impact":
//         return selectedTension?.impact === "High"
//           ? "bg-orange-100"
//           : selectedTension?.impact === "Medium"
//           ? "bg-yellow-100"
//           : "bg-blue-100";
//       case "priority":
//         return selectedTension?.priority === "Urgent"
//           ? "bg-red-200"
//           : selectedTension?.priority === "High"
//           ? "bg-yellow-200"
//           : "bg-green-200";
//       default:
//         return "";
//     }
//   };

//   // Inside TensionManagement2 component

// return (
//     <div className="mt-12 mb-8 flex gap-8">
//       {/* Tensions Section */}
//       <div className="w-full md:w-2/5 h-[70vh] overflow-y-auto pr-2">
//         <div className="flex flex-col gap-6 p-2">
//           {tensionsData.map((tension) => (
//             <Card
//               key={tension.id}
//               className={`cursor-pointer rounded-lg p-5 border transition-transform duration-300 ${
//                 selectedTension?.id === tension.id
//                   ? "border-blue-500 shadow-md"
//                   : "border-gray-200"
//               } hover:scale-[1.02]`}
//               onClick={() => handleTensionSelect(tension)}
//             >
//               <Typography variant="h6" className="font-semibold mb-2 text-blue-gray-800">
//                 {tension.tensionName}
//               </Typography>
  
//               <Typography variant="small" className="mb-4 text-blue-gray-600 text-sm">
//                 {tension.description}
//               </Typography>
  
//               {/* Key Metadata */}
//               <div className="grid grid-cols-2 gap-2 text-sm">
//                 <div className="flex flex-col gap-2">
//                   <div className="flex items-center gap-1 text-gray-700">
//                     <span className="font-semibold">Status:</span>
//                     <span
//                       className={`${
//                         tension.status === "Active"
//                           ? "text-green-600"
//                           : tension.status === "Inactive"
//                           ? "text-red-500"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {tension.status}
//                     </span>
//                   </div>
  
//                   <div className="flex items-center gap-1 text-gray-700">
//                     <span className="font-semibold">Impact:</span>
//                     <span
//                       className={`${
//                         tension.impact === "High"
//                           ? "text-orange-600"
//                           : tension.impact === "Medium"
//                           ? "text-yellow-700"
//                           : "text-blue-600"
//                       }`}
//                     >
//                       {tension.impact}
//                     </span>
//                   </div>
//                 </div>
  
//                 <div className="flex flex-col gap-2">
//                   <div className="flex items-center gap-1 text-gray-700">
//                     <span className="font-semibold">Priority:</span>
//                     <span
//                       className={`${
//                         tension.priority === "Urgent"
//                           ? "text-red-600"
//                           : tension.priority === "High"
//                           ? "text-yellow-700"
//                           : "text-green-600"
//                       }`}
//                     >
//                       {tension.priority}
//                     </span>
//                   </div>
  
//                   <div className="flex items-center gap-1 text-gray-700">
//                     <span className="font-semibold">Proposals:</span>{" "}
//                     <span>{proposalsData.filter(p => p.tensionName === tension.tensionName).length}</span>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
  
//       {/* Proposals Section */}
//       <div className="w-full md:w-3/5 flex flex-col gap-6">
//         {selectedTension ? (
//           <>
//             <Card className="w-full">
//               <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
//                 <table className="w-full table-auto">
//                   <thead>
//                     <tr>
//                       {["Proposal", "Tension", "Status", "Created On", "Actions"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b py-3 px-5 text-left text-sm font-bold text-blue-gray-500"
//                         >
//                           <Typography variant="small" className="uppercase">
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredProposals.map(({ id, proposalName, tensionName, status, createdOn }) => (
//                       <tr key={id} className="hover:bg-blue-50">
//                         <td className="py-3 px-5 border-b font-medium text-blue-gray-700">
//                           {proposalName}
//                         </td>
//                         <td className="py-3 px-5 border-b">{tensionName}</td>
//                         <td className="py-3 px-5 border-b font-semibold text-gray-800">{status}</td>
//                         <td className="py-3 px-5 border-b text-sm text-gray-600">{createdOn}</td>
//                         <td className="py-3 px-5 border-b">
//                           <Button
//                             size="sm"
//                             color="blue"
//                             variant="outlined"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               alert("View proposal details");
//                             }}
//                           >
//                             View
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
  
//             <div className="flex justify-end">
//               <Button color="blue" onClick={() => alert("Create New Proposal")}>
//                 Create Proposal
//               </Button>
//             </div>
//           </>
//         ) : (
//           <Card>
//             <CardBody>
//               <Typography variant="h6" className="text-center text-blue-gray-700">
//                 Select a tension to view associated proposals.
//               </Typography>
//             </CardBody>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
  
// }

// export default TensionManagement2;
import { useState } from "react";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

export const tensionsData = [
    {
      id: 1,
      tensionName: "Login Performance",
      description: "Slow response time observed during user login on Mondays.",
      impact: "High",
      priority: "Urgent",
      status: "Active",
      createdBy: "Ankit Jain",
      createdOn: "2025-04-22"
    },
    {
      id: 2,
      tensionName: "Data Sync Delay",
      description: "CRM data sync with Sales DB is delayed by 4+ hours.",
      impact: "Medium",
      priority: "High",
      status: "Active",
      createdBy: "Nidhi Sharma",
      createdOn: "2025-05-05"
    },
    {
      id: 3,
      tensionName: "Email Notification Failure",
      description: "Some users not receiving approval email notifications.",
      impact: "High",
      priority: "Medium",
      status: "Resolved",
      createdBy: "Rahul Mehta",
      createdOn: "2025-05-01"
    },
    {
      id: 4,
      tensionName: "Dashboard UI Glitch",
      description: "Sidebar occasionally overlaps content on resize.",
      impact: "Low",
      priority: "Low",
      status: "Inactive",
      createdBy: "Sakshi Kapoor",
      createdOn: "2025-04-18"
    },
    {
      id: 5,
      tensionName: "Report Export Timeout",
      description: "Large Excel reports timing out after 1 minute.",
      impact: "Medium",
      priority: "Medium",
      status: "Active",
      createdBy: "Mohit Aggarwal",
      createdOn: "2025-05-07"
    },
    {
      id: 6,
      tensionName: "Password Reset Loop",
      description: "Users stuck in password reset flow due to validation error.",
      impact: "High",
      priority: "Urgent",
      status: "Resolved",
      createdBy: "Neha Suri",
      createdOn: "2025-05-09"
    },
    {
      id: 7,
      tensionName: "Permission Denied Error",
      description: "Error 403 when accessing confidential document folders.",
      impact: "High",
      priority: "High",
      status: "Active",
      createdBy: "Aditya Rao",
      createdOn: "2025-05-10"
    },
    {
      id: 8,
      tensionName: "Form Validation Bug",
      description: "Forms not validating required fields correctly on Edge browser.",
      impact: "Medium",
      priority: "Low",
      status: "Inactive",
      createdBy: "Divya Sharma",
      createdOn: "2025-04-28"
    }
  ];
  export const proposalsData = [
    {
      id: 101,
      proposalName: "Optimize Login API",
      tensionName: "Login Performance",
      status: "Approved",
      createdOn: "2025-04-25"
    },
    {
      id: 102,
      proposalName: "Introduce Async Sync Jobs",
      tensionName: "Data Sync Delay",
      status: "Pending",
      createdOn: "2025-05-06"
    },
    {
      id: 103,
      proposalName: "Switch to SendGrid",
      tensionName: "Email Notification Failure",
      status: "Rejected",
      createdOn: "2025-05-02"
    },
    {
      id: 104,
      proposalName: "Responsive Sidebar Fix",
      tensionName: "Dashboard UI Glitch",
      status: "Approved",
      createdOn: "2025-04-20"
    },
    {
      id: 105,
      proposalName: "Increase Export Timeout",
      tensionName: "Report Export Timeout",
      status: "Pending",
      createdOn: "2025-05-08"
    },
    {
      id: 106,
      proposalName: "Update Password Flow",
      tensionName: "Password Reset Loop",
      status: "Approved",
      createdOn: "2025-05-10"
    },
    {
      id: 107,
      proposalName: "Review Folder Permissions",
      tensionName: "Permission Denied Error",
      status: "Pending",
      createdOn: "2025-05-11"
    },
    {
      id: 108,
      proposalName: "Polyfill for Validation",
      tensionName: "Form Validation Bug",
      status: "Rejected",
      createdOn: "2025-04-29"
    },
    {
      id: 109,
      proposalName: "Add Edge Compatibility Check",
      tensionName: "Form Validation Bug",
      status: "Approved",
      createdOn: "2025-05-01"
    }
  ];
    
export function TensionManagement2() {
  const [selectedTension, setSelectedTension] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterImpact, setFilterImpact] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const handleTensionSelect = (tension) => {
    setSelectedTension(tension);
  };

  // Filtered tensions based on filters
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
        (proposal) => proposal.tensionName === selectedTension.tensionName
      )
    : [];

  return (
    <div className="mt-12 mb-8 flex flex-col gap-6">
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 px-2">
        <Input
          label="Search Tensions"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="md:w-1/3"
        />
        <Select label="Status" value={filterStatus} onChange={(val) => setFilterStatus(val || "")}>
          <Option value="">All</Option>
          <Option value="Active">Active</Option>
          <Option value="Resolved">Resolved</Option>
          <Option value="Inactive">Inactive</Option>
        </Select>
        <Select label="Impact" value={filterImpact} onChange={(val) => setFilterImpact(val || "")}>
          <Option value="">All</Option>
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
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

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tensions Section */}
        <div className="w-full md:w-2/5 h-[70vh] overflow-y-auto pr-2">
          <div className="flex flex-col gap-4 p-2">
            {filteredTensions.map((tension) => (
              <Card
                key={tension.id}
                className={`cursor-pointer rounded-lg p-5  border transition-transform duration-300 text-sm ${
                  selectedTension?.id === tension.id
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200"
                } hover:scale-[1.01]`}
                onClick={() => handleTensionSelect(tension)}
              >
                <Typography variant="h6" className="font-medium text-blue-gray-800">
                  {tension.tensionName}
                </Typography>

                <Typography variant="small" className="text-blue-gray-600 text-xs mt-1 mb-2">
                  {tension.description}
                </Typography>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-gray-700">
                      <span className="font-semibold">Status:</span>
                      <span
                        className={`${
                          tension.status === "Active"
                            ? "text-green-600"
                            : tension.status === "Inactive"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {tension.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700">
                      <span className="font-semibold">Impact:</span>
                      <span
                        className={`${
                          tension.impact === "High"
                            ? "text-orange-600"
                            : tension.impact === "Medium"
                            ? "text-yellow-700"
                            : "text-blue-600"
                        }`}
                      >
                        {tension.impact}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-gray-700">
                      <span className="font-semibold">Priority:</span>
                      <span
                        className={`${
                          tension.priority === "Urgent"
                            ? "text-red-600"
                            : tension.priority === "High"
                            ? "text-yellow-700"
                            : "text-green-600"
                        }`}
                      >
                        {tension.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700">
                      <span className="font-semibold">Proposals:</span>
                      <span>
                        {proposalsData.filter(
                          (p) => p.tensionName === tension.tensionName
                        ).length}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Proposals Section */}
        <div className="w-full md:w-3/5 flex flex-col gap-6">
          {selectedTension ? (
            <>
              <Card className="w-full">
                <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        {["Proposal", "Tension", "Status", "Created On", "Actions"].map((el) => (
                          <th
                            key={el}
                            className="border-b py-3 px-5 text-left text-sm font-bold text-blue-gray-500"
                          >
                            <Typography variant="small" className="uppercase">
                              {el}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProposals.map(
                        ({ id, proposalName, tensionName, status, createdOn }) => (
                          <tr key={id} className="hover:bg-blue-50">
                            <td className="py-3 px-5 border-b font-medium text-blue-gray-700">
                              {proposalName}
                            </td>
                            <td className="py-3 px-5 border-b">{tensionName}</td>
                            <td className="py-3 px-5 border-b font-semibold text-gray-800">
                              {status}
                            </td>
                            <td className="py-3 px-5 border-b text-sm text-gray-600">
                              {createdOn}
                            </td>
                            <td className="py-3 px-5 border-b">
                              <Button
                                size="sm"
                                color="#ffbf00"
                                variant="outlined"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  alert("View proposal details");
                                }}
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </CardBody>
              </Card>

              <div className="flex justify-end">
                <Button color="blue" onClick={() => alert("Create New Proposal")}>
                  Create Proposal
                </Button>
              </div>
            </>
          ) : (
            <Card>
              <CardBody>
                <Typography variant="h6" className="text-center text-blue-gray-700">
                  Select a tension to view associated proposals.
                </Typography>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default TensionManagement2;
