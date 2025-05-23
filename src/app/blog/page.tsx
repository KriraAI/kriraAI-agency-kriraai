import React from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { SiteBlog } from "@/types/blog";
import BlogClient from "@/app/blog/BlogClient";

const fetchBlogData = async (): Promise<{ blogData: SiteBlog[], error: string | null }> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogSnapshot = await getDocs(blogsCollection);
    const blogList = blogSnapshot.docs.map((doc): SiteBlog => {
      const data = doc.data() as DocumentData;
      const id = doc.id;
      return {
        id: id,
        title: data.title,
        description: data.description,
        image: data.image,
        author: {
          name: data.author.name,
          image: data.author.image,
          designation: data.author.designation,
        },
        content: data.content,
        tags: data.tags,
        publishDate: data.publishDate,
      };
    });

    return { blogData: blogList, error: null };
  } catch (err) {
    return { blogData: [], error: 'Failed to fetch blog data. Please try again later.' };
  }
};

const Blog = async () => {
  const { blogData, error } = await fetchBlogData();

  return <BlogClient blogData={blogData} error={error} />;
};

export default Blog;


