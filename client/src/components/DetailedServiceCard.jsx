import React from "react";
import { Link } from "react-router-dom";

const DetailedServiceCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-200 transition">
        <div className="text-4xl text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default DetailedServiceCard;
