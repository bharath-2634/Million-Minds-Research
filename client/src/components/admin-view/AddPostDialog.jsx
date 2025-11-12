import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddPostDialog = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    paperName: '',
    publicationLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      paperName: '',
      publicationLink: '',
    });

    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-poppins">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white rounded-t-3xl">
          <h2 className="text-2xl font-bold text-[#131D2D]">Add New Publication</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Paper Name */}
          <div className="space-y-3">
            <label htmlFor="paperName" className="text-sm font-semibold text-gray-700">
              Name of the Paper *
            </label>
            <input
              type="text"
              id="paperName"
              name="paperName"
              value={formData.paperName}
              onChange={handleChange}
              placeholder="Enter the paper title"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
            />
          </div>

          {/* Publication Link */}
          <div className="space-y-3">
            <label htmlFor="publicationLink" className="text-sm font-semibold text-gray-700">
              Link of the Publication *
            </label>
            <input
              type="url"
              id="publicationLink"
              name="publicationLink"
              value={formData.publicationLink}
              onChange={handleChange}
              placeholder="https://example.com/publication"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40B47C] focus:border-transparent transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#40B47C] text-white font-semibold rounded-full hover:bg-[#6EC59B] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Add Publication
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostDialog;
