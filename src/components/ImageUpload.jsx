import React from "react";
import { Upload, X } from "lucide-react";

const ImageUpload = ({ type, label, onImageUpload, image, onRemoveImage }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        onImageUpload(type, file);
      } else {
        alert("Please select only image files");
      }
    }
  };

  if (image) {
    return (
      <div className="relative">
        <div className="bg-white/50 backdrop-blur-sm border-2 border-indigo-300 rounded-2xl p-4">
          <div className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`${label} preview`}
              className="w-full h-48 object-cover rounded-xl"
            />
            <button
              onClick={() =>
                onRemoveImage(type === "front" ? "frontImage" : "backImage")
              }
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mt-3 text-center">
            {label}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="cursor-pointer">
      <div
        className="bg-white/50 backdrop-blur-sm border-2 border-dashed border-indigo-300 rounded-2xl p-8 text-center"
        onClick={() => document.getElementById(`${type}-upload`).click()}
      >
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-2xl w-fit mx-auto mb-4">
          <Upload className="w-8 h-8 text-indigo-600" />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{label}</h3>
        <p className="text-gray-600">Click to upload image</p>
      </div>

      <input
        id={`${type}-upload`}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
