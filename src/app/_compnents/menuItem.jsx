

const MenuItem = ({ image, name, description }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-4 mb-4 flex">
        <img src={image} alt={name} className="w-24 h-24 object-cover mr-4 rounded-md" />
        <div>
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default MenuItem;
  