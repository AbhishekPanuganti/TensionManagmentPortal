import { Card, Typography } from "@material-tailwind/react";
import { EyeIcon, UserIcon } from "@heroicons/react/24/outline";

export function TensionCard({ tension, selectedTension, handleTensionSelect }) {
  return (
    <Card
      key={tension.id}
      className={`relative cursor-pointer rounded-lg p-3 border transition-transform duration-300 text-sm ${
        selectedTension?.id === tension.id
          ? "border-blue-500 shadow-lg bg-blue-50"
          : "border-gray-200"
      } hover:scale-[1.01]`}
      onClick={() => handleTensionSelect(tension)}
    >
      {/* Proposal Count Badge */}
      <div className="absolute top-2 right-2 bg-[#084434] text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
        {tension.proposals?.length ?? 0}
      </div>

      {/* Tension Title */}
      <Typography variant="h6" className="font-medium text-blue-gray-800">
        {tension.tensionName}
      </Typography>

      {/* Description */}
      <Typography
        variant="small"
        className="text-blue-gray-600 text-xs mt-1 mb-2"
      >
        {tension.description}
      </Typography>

      {/* Primary Details Grid */}
      <div className="grid grid-cols-2 gap-2 text-xs mb-2">
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
            <span>{tension.proposals?.length ?? 0}</span>
          </div>
        </div>
      </div>

      {/* Additional Metadata Fields */}
      <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
        {tension.financialYear && (
          <div>
            <span className="font-semibold">FY:</span> {tension.financialYear}
          </div>
        )}
        {tension.product && (
          <div>
            <span className="font-semibold">Product:</span> {tension.product}
          </div>
        )}
        {tension.circle && (
          <div>
            <span className="font-semibold">Circle:</span> {tension.circle}
          </div>
        )}
        {tension.customer && (
          <div>
            <span className="font-semibold">Customer:</span> {tension.customer}
          </div>
        )}
        {tension.tensionRaiser && (
          <div className="flex items-center gap-1 text-gray-700 text-xs">
            <span className="font-semibold flex items-center gap-1">
              Raised By:
            </span>
            <span className="flex items-center gap-1">
              <UserIcon className="w-4 h-4 text-gray-500" />
              {tension.tensionRaiser}
            </span>
          </div>
        )}
        {tension.creationDate && (
          <div>
            <span className="font-semibold">Created On:</span>{" "}
            {new Date(tension.creationDate).toLocaleDateString()}
          </div>
        )}
      </div>

      {/* Eye Icon */}
      <div className="absolute bottom-2 right-2 cursor-pointer">
        <button
          size="sm"
          className="absolute bottom-2 right-2 text-blue-600 hover:text-blue-800"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <EyeIcon className="w-4 h-4 mr-1" /> View
        </button>
      </div>
    </Card>
  );
}

export default TensionCard;
