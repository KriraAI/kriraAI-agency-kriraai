// import Image from "next/image";
// import Link from "next/link";
// import {SiteBlog} from "@/types/blog";

// const SingleBlog = ({ blog }: { blog: SiteBlog }) => {
//   const { id, title, image, description, author, content, tags, publishDate } = blog;
//   return (
//     <div className="group relative overflow-hidden rounded-3xl bg-white shadow-one duration-300 hover:shadow-two dark:bg-black dark:hover:shadow-gray-dark">
//       <Link
//         href={`/blog/${id}`}
//         className="relative block aspect-[37/22] w-full"
//       >
//         <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
//           {tags[0]}
//         </span>
//         <Image src={image} alt="image" fill />
//       </Link>
//       <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
//         <h2>
//           <Link
//             href={`/blog/${id}`}
//             className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
//           >
//             <div className={"line-clamp-1"}>
//               {title}
//             </div>
//           </Link>
//         </h2>
//         <p className="mb-6 border-b line-clamp-1 border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
//           {description}
//         </p>
//         <div className="flex items-center">
//           <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
//             <div className="mr-4">
//               <div className="relative h-10 w-10 overflow-hidden rounded-full">
//                 <Image src={author.image} alt="author" fill />
//               </div>
//             </div>
//             <div className="w-full">
//               <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
//                 By {author.name}
//               </h4>
//               <p className="text-xs text-body-color">{author.designation}</p>
//             </div>
//           </div>
//           <div className="inline-block">
//             <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
//               Date
//             </h4>
//             <p className="text-xs text-body-color">{publishDate}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleBlog;
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Author {
  name: string;
  designation?: string;
  image?: string;
}

export interface SiteBlog {
  id: string;
  title: string;
  image?: string;
  description?: string;
  author?: Author;
  tags?: string[];
  publishDate?: any; // Firestore Timestamp or Date
}

const formatDate = (timestamp: any) => {
  if (!timestamp) return "No Date";

  if (timestamp instanceof Date) {
    return timestamp.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  if (timestamp?.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return "Invalid Date";
};

const SingleBlog = ({ blog }: { blog: SiteBlog }) => {
  const { id, title, image, description, author, tags, publishDate } = blog;

  const isValidImage =
    typeof image === "string" &&
    (image.startsWith("/") || image.startsWith("http"));

  const isValidAuthorImage =
    author?.image &&
    typeof author.image === "string" &&
    (author.image.startsWith("/") || author.image.startsWith("http"));

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-md duration-300 hover:shadow-lg dark:bg-black">
      <Link href={`/blog/${id}`} className="relative block aspect-[37/22] w-full">
        {tags && tags.length > 0 && (
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
        )}

        {isValidImage ? (
          <Image
            src={image!}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500">
            No Image Available
          </div>
        )}
      </Link>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h2>
          <Link
            href={`/blog/${id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400 sm:text-2xl"
          >
            <div className="line-clamp-1">{title || "Untitled Blog"}</div>
          </Link>
        </h2>

        <p className="mb-6 border-b border-gray-300 pb-6 text-base font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300 line-clamp-1">
          {description || "No description available."}
        </p>

        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-gray-300 pr-5 dark:border-gray-600 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4 relative h-10 w-10 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700">
              {isValidAuthorImage ? (
                <Image
                  src={author!.image!}
                  alt={author!.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-gray-500">
                  N/A
                </span>
              )}
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                By {author?.name || "Unknown Author"}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {author?.designation || "No designation"}
              </p>
            </div>
          </div>
          <div>
            <h4 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Date
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {formatDate(publishDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
