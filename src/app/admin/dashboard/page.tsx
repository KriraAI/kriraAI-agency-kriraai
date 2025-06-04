"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import Sidebar from "@/components/admin/Sidebar";

import Image from "next/image";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../../../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ADMIN_EMAIL = "info@kriraai.com";

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userName, setUserName] = useState("Admin");
  const router = useRouter();

 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
        router.replace("/admin/login");
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/admin/login");
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl = "";

      if (imageFile) {
       
        const imageRef = ref(storage, `blogs/${Date.now()}-${imageFile.name}`);
    
        await uploadBytes(imageRef, imageFile);
     
        imageUrl = await getDownloadURL(imageRef);
      }

      
      const slug = title.toLowerCase().replace(/\s+/g, "-");

    
      await addDoc(collection(db, "blogs"), {
        title,
        description,
        
        content: { blocks: [{ type: "paragraph", data: { text: content } }] },
        image: imageUrl,
        slug,
        createdAt: serverTimestamp(),
      });

    
      setTitle("");
      setDescription("");
      setContent("");
      setImageFile(null);

      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Something went wrong while adding the blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900" />
      </div>
    );

  if (!isAuthorized) return null;

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 mt-10">
      <Sidebar />

      <div className="flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold">{userName}</p>
              <p className="text-sm text-gray-500">My Account</p>
            </div>
            <Image
              src="/default-profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-6">
          {/* Blog creation form */}
          {/* <section className="mt-10">
            <h2 className="text-xl font-bold mb-4">Create New Blog</h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-6 rounded shadow max-w-xl"
            >
              <input
                type="text"
                placeholder="Title"
                className="border p-2 rounded w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Short Description"
                className="border p-2 rounded w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <textarea
                placeholder="Content (paragraph)"
                className="border p-2 rounded w-full min-h-[120px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {isSubmitting ? "Publishing..." : "Publish Blog"}
              </button>
            </form>
          </section> */}
        </main>
      </div>
    </div>
  );
}
