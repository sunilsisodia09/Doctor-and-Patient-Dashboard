import { useState } from "react";

const FoodScanner = () => {
  const [image, setImage] = useState(null);

  const imageHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h2 className="text-3xl font-bold mb-6">
        Food Scanner
      </h2>

      <input
        type="file"
        onChange={imageHandler}
        className="mb-6"
      />

      {image && (
        <img
          src={image}
          alt="food"
          className="w-64 h-64 object-cover rounded-xl"
        />
      )}
    </div>
  );
};

export default FoodScanner;