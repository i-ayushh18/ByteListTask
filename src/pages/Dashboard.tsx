import React, { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import Filters from "../components/Filters";
import Header from "../components/Header";
import { type Service } from "../components/ServiceCard";
import rawData from "../data/services.json";

const servicesData = rawData as Service[];


const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [environment, setEnvironment] = useState<"All" | "Dev" | "Stage" | "Prod">("All");
  const [filteredServices, setFilteredServices] = useState<Service[]>(servicesData);

  useEffect(() => {
    const filtered = servicesData.filter((service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEnv = environment === "All" || service.environment === environment;
      return matchesSearch && matchesEnv;
    });
    setFilteredServices(filtered);
  }, [searchTerm, environment]);

  return (
    <div className="max-w-6xl mx-auto p-6 dark:bg-gray-900 min-h-screen">
      <Header />
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        environment={environment}
        setEnvironment={setEnvironment}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
