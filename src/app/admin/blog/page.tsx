'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';

type Blog = {
  id: string;
  title: string;
  publishDate: any; 
};

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const blogsCol = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogsCol);
    //   const blogList = blogSnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...(doc.data() as Blog),
    //   }));
    const blogList = blogSnapshot.docs.map((doc) => {
  const data = doc.data() as Omit<Blog, 'id'>; 
  return {
    id: doc.id,  
    ...data,
  };
});

      setBlogs(blogList);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await deleteDoc(doc(db, 'blogs', id));
      await fetchBlogs(); 
    } catch (error) {
      alert('Failed to delete blog. Please try again.');
      console.error('Delete error:', error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Blogs</h1>
        <Link
          href="/admin/blog/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Blog
        </Link>
      </div>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <ul className="space-y-4">
          {blogs.length === 0 && <p>No blogs found.</p>}
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="border p-4 rounded hover:shadow-md transition flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-500">
                  Published:{' '}
                  {blog.publishDate
                    ? typeof blog.publishDate.toDate === 'function'
                      ? blog.publishDate.toDate().getFullYear()
                      : blog.publishDate instanceof Date
                      ? blog.publishDate.getFullYear()
                      : 'Invalid date'
                    : 'Unknown'}
                </p>
              </div>

              <button
                onClick={() => handleDelete(blog.id)}
                disabled={deletingId === blog.id}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 disabled:bg-red-300"
              >
                {deletingId === blog.id ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
