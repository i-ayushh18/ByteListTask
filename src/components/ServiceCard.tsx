import React, { type JSX } from "react";
import { IconCheck, IconX, IconAlertTriangle } from "@tabler/icons-react";

export type Service = {
  id: number;
  name: string;
  status: "Running" | "Down" | "Unknown";
  environment: "Dev" | "Stage" | "Prod";
  lastDeployed: string;
};

type Props = {
  service: Service;
};

const statusIcons: Record<Service["status"], JSX.Element> = {
  Running: <IconCheck size={18} className="text-green-500" />,
  Down: <IconX size={18} className="text-red-500" />,
  Unknown: <IconAlertTriangle size={18} className="text-gray-400" />,
};

const ServiceCard: React.FC<Props> = ({ service }) => {
  const { name, status, environment, lastDeployed } = service;
  const formattedDate = new Date(lastDeployed).toLocaleString();

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-lg transform transition hover:-translate-y-1 hover:scale-105 duration-200">
      <h2 className="text-lg font-semibold mb-2 dark:text-white">{name}</h2>
      <div className="flex items-center space-x-2 mb-1">
        {statusIcons[status]}
        <span className="dark:text-gray-200">{status}</span>
      </div>
      <div className="text-sm mb-1 dark:text-gray-300">
        <strong>Environment:</strong> {environment}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400">
        <strong>Last Deployed:</strong> {formattedDate}
      </div>
    </div>
  );
};

export default ServiceCard;
