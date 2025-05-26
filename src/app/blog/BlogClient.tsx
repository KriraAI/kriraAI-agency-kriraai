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


'use client';
import React, { useState, useEffect } from 'react';
import SingleBlog from "@/components/Blog/SingleBlog";
import { SiteBlog } from "@/types/blog";
import SectionTitle from "@/components/Common/SectionTitle";
import { useRouter } from 'next/navigation';

type BlogClientProps = {
  blogData: SiteBlog[];
  error: string | null;
};

const BlogClient: React.FC<BlogClientProps> = ({ blogData, error }) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [popupOpen, setPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const blogsPerPage = 6;

  // popup every 3 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setPopupOpen(true);
    }, 180000);
    return () => clearInterval(interval);
  }, []);

  // filter to search
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (error) {
    return (
      <section id="blog" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 items-center">
        <div className="container">
          <div className="text-center">
            <p className="text-red-500 dark:text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 md:py-20 lg:py-28 lg:px-36 space-x-12">
      <div className="container md:mt-2 xs:mt-16">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        {/* Search and button  */}
        <div className="flex justify-center md:justify-evenly mt-2 mb-10 gap-4 relative z-20">
          <div className="relative w-full md:w-3/4">
            <input
              type="text"
              placeholder="Search Blog"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pr-20 border border-gray-300 rounded-lg"
            />
            <button
              onClick={() => {
                const matchedBlog = blogData.find(
                  (blog) => blog.title.toLowerCase() === searchTerm.toLowerCase()
                );

                if (matchedBlog) {
                  router.push(`/blog/${matchedBlog.id}`);
                } else {
                  alert("Blog not found");
                  scrollToTop();
                }
              }}
              className="absolute right-1 top-1 bottom-1 my-auto px-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition"
            >
              Search
            </button>

            {/* Suggestion Dropdown */}
            {searchTerm && filteredBlogs.length > 0 && (
              <ul className="absolute z-50 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-md">
                {filteredBlogs.slice(0, 3).map((blog) => (
                  <li
                    key={blog.id}
                    onClick={() => router.push(`/blog/${blog.id}`)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {blog.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

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
              <h2 className="text-xl font-semibold mb-4">Don’t Miss a Post!</h2>
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

        {/* Blog Grid */}
        {currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mt-10">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No blog posts match your search.</p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
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
        )}
      </div>
    </section>
  );
};

export default BlogClient;