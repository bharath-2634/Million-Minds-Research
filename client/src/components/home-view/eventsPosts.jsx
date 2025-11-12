import { getAllPosts } from '@/store/post-slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";
import no_data_found from "../../assets/no_data_found.png";
import paper_bg from "../../assets/paper_data_img.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlogSection = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <section className="py-16 font-poppins w-full">
      <div className="container mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="w-full mb-12 text-center">
          <h2 className="lg:text-[2.6rem] md:text-[2.1rem] text-[1.8rem] font-bold text-primary_nav mt-10">
            Explore Our Published Papers
          </h2>
          <p className="text-gray-600 mt-2">
            Discover insightful publications and research works shared by our contributors.
          </p>
        </div>

        {/* 🟡 No posts fallback */}
        {(!posts || posts.length === 0) ? (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-16 sm:py-20 lg:py-24 bg-white -mt-12"
          >
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src={no_data_found}
                  alt="No publications found"
                  className="lg:w-[80%] md:w-[60%] sm:w-[60%] w-[70%] h-auto object-contain rounded-3xl"
                  onError={(e) => (e.target.style.display = 'none')}
                />
                <p className="lg:text-lg md:text-[1.1rem] text-gray-600 leading-relaxed lg:p-6 md:p-6 sm:px-12 text-center">
                  We haven’t published anything yet — stay tuned for upcoming research!
                </p>
              </div>
            </div>
          </motion.section>
        ) : (
          // 🟢 Grid layout
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.div
                key={post._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center w-full max-w-[420px] mx-auto h-[180px]"
              >
                {/* Card Content */}
                <div className="flex items-center justify-between w-full h-full px-6">
                  
                  {/* Left Image */}
                  <div className="flex items-center justify-center bg-gray-100 rounded-xl p-4 w-[90px] h-[90px]">
                    <img
                      src={paper_bg}
                      alt="Paper Icon"
                      className="w-14 h-14 object-contain opacity-80"
                    />
                  </div>

                  {/* Right Info */}
                  <div className="flex flex-col items-start justify-center flex-grow pl-6">
                    <div className='mb-3'>
                      <h3 className="text-lg font-semibold text-primary_nav  leading-snug">
                        {post.title || "Untitled Paper"}
                      </h3>
                      <h3 className="text-[.9rem] text-slate-400 font-normal text-primary_nav  leading-snug">
                        -by Abiramee Ravi
                      </h3>
                    </div>

                    <button
                      onClick={() => window.open(post.link, "_blank")}
                      className="px-5 py-2 bg-primary text-white rounded text-sm font-medium hover:bg-primary hover:shadow-md transition-all duration-300"
                    >
                      Open now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
