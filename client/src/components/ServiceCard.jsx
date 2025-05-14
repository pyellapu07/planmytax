const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-secondary text-primary p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;