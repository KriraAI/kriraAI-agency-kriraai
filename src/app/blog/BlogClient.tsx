// 'use client';
// import React, { useState } from 'react';
// import SingleBlog from "@/components/Blog/SingleBlog";
// import { SiteBlog } from "@/types/blog";
// import SectionTitle from "@/components/Common/SectionTitle";

// type BlogClientProps = {
//   blogData: SiteBlog[];
//   error: string | null;
// };

// const BlogClient: React.FC<BlogClientProps> = ({ blogData, error }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 6;

//   // Pagination Logic
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
//   const totalPages = Math.ceil(blogData.length / blogsPerPage);

//   const handleClick = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//     scrollToTop();
//   };

//   const scrollToTop = () => {
//     if (typeof window !== 'undefined') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   if (error) {
//     return (
      
//       <section
//         id="blog"
//         className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 items-center"
//       >
//         <div className="container">
//           <div className="text-center">
//             <p className="text-red-500 dark:text-red-400">{error}</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="blog"
//       className="py-16 md:py-20 lg:py-28 lg:px-36 space-x-12"
//     >
//       <div className="container md:mt-2 xs:mt-16">
//         <SectionTitle
//           title="Our Latest Blogs"
//           paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
//           center
//         />


//         <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mt-10">
//           {currentBlogs.map((blog) => (
//             <div key={blog.id} className="w-full">
//               <SingleBlog blog={blog} />
//             </div>
//           ))}
//         </div>

//         <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
//           <div className="w-full px-8">
//             <ul className="flex items-center justify-center pt-8">
//               <li className="mx-1">
//                 <button
//                   onClick={() => handleClick(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:opacity-50"
//                 >
//                   Prev
//                 </button>
//               </li>
//               {[...Array(totalPages)].map((_, index) => (
//                 <li key={index} className="mx-1">
//                   <button
//                     onClick={() => handleClick(index + 1)}
//                     className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
//                       currentPage === index + 1
//                         ? 'bg-primary text-white'
//                         : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//               <li className="mx-1">
//                 <button
//                   onClick={() => handleClick(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

      
//     </section>

    
//   );
// };



// export default BlogClient;

'use client';
import React, { useState, useEffect } from 'react';
import SingleBlog from "@/components/Blog/SingleBlog";
import { SiteBlog } from "@/types/blog";
import SectionTitle from "@/components/Common/SectionTitle";

type BlogClientProps = {
  blogData: SiteBlog[];
  error: string | null;
};

const BlogClient: React.FC<BlogClientProps> = ({ blogData, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [popupOpen, setPopupOpen] = useState(false);
  const blogsPerPage = 6;

  // Show popup every 3 minutes
  useEffect(() => {
    // Show first time after 3 minutes
    const interval = setInterval(() => {
      setPopupOpen(true);
    }, 180000); // 3 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (error) {
    return (
      <section
        id="blog"
        className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 items-center"
      >
        <div className="container">
          <div className="text-center">
            <p className="text-red-500 dark:text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className="py-16 md:py-20 lg:py-28 lg:px-36 space-x-12"
    >
      <div className="container md:mt-2 xs:mt-16">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        {/* Popup modal */}
        {popupOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setPopupOpen(false)}
          >
            <div
              className="bg-white rounded-lg p-6 max-w-md w-11/12 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4">Popup Title</h2>
              <p className="mb-6">Don’t Miss Our Latest Stories!</p>
              <button
                onClick={() => setPopupOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mt-10">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
          <div className="w-full px-8">
            <ul className="flex items-center justify-center pt-8">
              <li className="mx-1">
                <button
                  onClick={() => handleClick(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:opacity-50"
                >
                  Prev
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className="mx-1">
                  <button
                    onClick={() => handleClick(index + 1)}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                      currentPage === index + 1
                        ? 'bg-primary text-white'
                        : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="mx-1">
                <button
                  onClick={() => handleClick(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:opacity-50"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogClient;
