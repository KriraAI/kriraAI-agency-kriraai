"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db, storage } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


export default function NewBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();      

  useEffect(() => {  
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn"); 
    if (isLoggedIn !== "true") {  
      router.push("/admin/login");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Upload image");

    try {
      setLoading(true);
      const imageRef = ref(storage, `blogs/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageURL = await getDownloadURL(imageRef);

      await addDoc(collection(db, "blogs"), {
        title,
        content,
        imageURL,
        createdAt: serverTimestamp(),
      });

      router.push("/admin/dashboard");
    } catch (err) {
      alert("Failed to post blog");

    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl mx-auto space-y-4 ">
      <h1 className="text-2xl font-bold mt-20">New Blog Post</h1>
      <input
        className="w-full border p-2"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2 h-40"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        required
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        type="submit"
        disabled={loading}
      >
        {loading ? "Posting..." : "Post"}
      </button>
    </form>
  );
}




