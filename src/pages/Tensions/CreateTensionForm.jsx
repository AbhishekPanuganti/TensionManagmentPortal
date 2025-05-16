import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Typography, IconButton } from "@material-tailwind/react";

// Configuration
const tensionFormConfig = [
  { name: "financialYear", label: "Financial Year", type: "text", required: false },
  { name: "forums", label: "Forums", type: "text", required: false },
  { name: "circle", label: "Circle", type: "text", required: false },
  { name: "product", label: "Product", type: "text", required: true },
  { name: "customer", label: "Customer", type: "text", required: false },
  { name: "department", label: "Department", type: "text", required: false },
  { name: "tensionRaiser", label: "Tension Raiser", type: "text", required: false },
  { name: "tensionRaiserDepartment", label: "Tension Raiser Department", type: "text", required: true },
  { name: "tensionDescription", label: "Tension Description", type: "textarea", required: false },
  { name: "enabler", label: "Enabler", type: "text", required: false },
  { name: "salesValue", label: "Sales Value (Rs. Crs)", type: "number", required: false },
  { name: "contributionValue", label: "Contribution Value (Rs. Crs)", type: "number", required: false },
  { name: "creationDate", label: "Creation Date", type: "date", required: false },
  { name: "targetDate", label: "Target Date", type: "date", required: false },
  { name: "customerImpact", label: "Customer Impact", type: "text", required: false },
];

const CreateTensionForm = ({ openTensionForm, setOpenTensionForm }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setOpenTensionForm(false);
  };

  const handleCancel = () => {
    setOpenTensionForm(false);
  };

  // Divide the form fields
  const generalFields = tensionFormConfig.slice(0, 6); // till "department"
  const tensionDetailsFields = tensionFormConfig.slice(6); // from "tensionRaiser" onward

  const renderFields = (fields) => (
    <div className="grid grid-cols-2 gap-4">
      {fields.map(({ name, label, type, required }) => (
        <div key={name} className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {type === "textarea" ? (
            <textarea
              className="w-full border border-gray-300 rounded p-2"
              onChange={(e) => handleChange(name, e.target.value)}
            />
          ) : (
            <input
              type={type}
              className="w-full border border-gray-300 rounded p-2"
              onChange={(e) => handleChange(name, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-[900px] bg-white shadow-lg transition-transform duration-300 flex flex-col ${
        openTensionForm ? "translate-x-0" : "translate-x-[900px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between px-6 pt-8 pb-4 border-b">
        <div>
          <Typography variant="h5" color="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Create Tension
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            Fill in the details to raise a tension.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenTensionForm(false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>

      {/* Form */}
      <form className="px-6 py-4 overflow-y-auto flex-1 space-y-6">
        <div>
          <Typography variant="h6" className="mb-2">General Information</Typography>
          {renderFields(generalFields)}
        </div>

        <div>
          <Typography variant="h6" className="mb-2">Tension Details</Typography>
          {renderFields(tensionDetailsFields)}
        </div>
      </form>

      {/* Footer Buttons */}
      <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex justify-end gap-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-6 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </aside>
  );
};

export default CreateTensionForm;
