import React from "react";

type Props = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  environment: "All" | "Dev" | "Stage" | "Prod";
  setEnvironment: React.Dispatch<
    React.SetStateAction<"All" | "Dev" | "Stage" | "Prod">
  >;
};

const Filters: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  environment,
  setEnvironment,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search services..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded px-3 py-2 flex-grow
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <select
        value={environment}
        onChange={(e) => setEnvironment(e.target.value as Props["environment"])}
        className="border rounded px-3 py-2
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="All">All Environments</option>
        <option value="Dev">Dev</option>
        <option value="Stage">Stage</option>
        <option value="Prod">Prod</option>
      </select>
    </div>
  );
};

export default Filters;
