import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import AddPostDialog from '@/components/admin-view/AddPostDialog';
import { addPost } from '@/store/post-slice';
import PostsDashboard from './posts';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [openPostDia, setOpenPostDia] = useState(false);

  // --- post handlers ---
  const handleAddPost = async (newPost) => {
    const result = await dispatch(addPost(newPost));
    if (result.payload?.success) {
      setOpenPostDia(false);
      toast.success('Post added successfully!');
    } else {
      toast.error(result.payload?.message || 'Failed to add post');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-0 gap-8 font-poppins">
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center gap-3 p-4 md:p-12 mt-6">
        <h2 className="text-xl md:text-2xl font-medium text-primary_nav text-center">
          Manage Paper Data
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-[60%] p-4 rounded">
          <button
            onClick={() => setOpenPostDia(true)}
            className="flex items-center gap-2 px-4 py-3 bg-primary_nav text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
          >
            <Plus className="w-6 h-6" />
            Add Data
          </button>
        </div>
      </div>

      {/* Posts Section */}
      <div className="w-[90%] bg-white rounded-3xl shadow-xl mb-8 p-8 text-center">
        <PostsDashboard />
      </div>

      {/* Add Post Dialog */}
      <AddPostDialog
        isOpen={openPostDia}
        onClose={() => setOpenPostDia(false)}
        onAdd={handleAddPost}
      />
    </div>
  );
};

export default Dashboard;
