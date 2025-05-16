import { Card, Typography } from "@material-tailwind/react";
import {
  PlusCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  ArchiveBoxIcon,
  ChartBarIcon,
  InboxIcon,
  ChatBubbleLeftRightIcon,
  ExclamationCircleIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

const dashboardCards = [
  {
    title: "Create Tension",
    description: "Start a new tension request.",
    icon: <PlusCircleIcon className="w-6 h-6 text-green-600" />,
    onClick: () => {
      console.log("Navigate to Create Tension");
    },
  },
  {
    title: "Processed Tensions",
    description: "View already processed tensions.",
    icon: <CheckCircleIcon className="w-6 h-6 text-blue-600" />,
    onClick: () => {
      console.log("Navigate to Processed Tensions");
    },
  },
  {
    title: "Pending Review",
    description: "Tensions waiting for review.",
    icon: <ClockIcon className="w-6 h-6 text-yellow-600" />,
    onClick: () => {
      console.log("Navigate to Pending Review");
    },
  },
  {
    title: "Resolved Tensions",
    description: "See resolved tensions.",
    icon: <ArchiveBoxIcon className="w-6 h-6 text-gray-600" />,
    onClick: () => {
      console.log("Navigate to Resolved Tensions");
    },
  },
  {
    title: "All Tensions",
    description: "Browse all raised tensions.",
    icon: <ChartBarIcon className="w-6 h-6 text-purple-600" />,
    onClick: () => {
      console.log("Navigate to All Tensions");
    },
  },
  {
    title: "Proposal Inbox",
    description: "Access tension proposals assigned to you.",
    icon: <InboxIcon className="w-6 h-6 text-indigo-600" />,
    onClick: () => {
      console.log("Navigate to Proposal Inbox");
    },
  },
  {
    title: "Quick Discussion",
    description: "Join quick chats related to tensions.",
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-teal-600" />,
    onClick: () => {
      console.log("Navigate to Quick Discussion");
    },
  },
  {
    title: "My Tensions Not Processed (Admin)",
    description: "Admin view for unprocessed tensions.",
    icon: <ExclamationCircleIcon className="w-6 h-6 text-red-600" />,
    onClick: () => {
      console.log("Navigate to Admin Unprocessed Tensions");
    },
  },
  {
    title: "Tension Reports",
    description: "Detailed analytics and export reports.",
    icon: <DocumentChartBarIcon className="w-6 h-6 text-orange-600" />,
    onClick: () => {
      console.log("Navigate to Tension Reports");
    },
  },
];

export default function TensionDashboard() {
  return (
    <div className="p-6">
      <Typography variant="h4" className="mb-6 text-blue-gray-800">
        Tension Management Dashboard
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <Card
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition cursor-pointer"
            onClick={card.onClick}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-blue-50 p-2 rounded-full">{card.icon}</div>
              <Typography variant="h6" className="text-blue-gray-900">
                {card.title}
              </Typography>
            </div>
            <Typography variant="small" className="text-gray-600 text-sm">
              {card.description}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
}
