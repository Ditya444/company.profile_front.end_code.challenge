

const Testimonial = ({ name, position, comment }) => {
    return (
      <div className="bg-blue-500 text-white shadow-md rounded-md p-4 mb-4">
        <p className=" text-gray-300 italic mb-2">{comment}</p>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-400">{position}</p>
      </div>
    );
  };
  
  export default Testimonial;
  