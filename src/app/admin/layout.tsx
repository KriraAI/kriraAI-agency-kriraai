"use client";

 import { useEffect, useState } from "react";
   import { useRouter, usePathname } from "next/navigation";
  import { onAuthStateChanged } from "firebase/auth";
 import { auth } from "../../../firebaseConfig";

const ADMIN_EMAIL = "info@kriraai.com"; 

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
   const router = useRouter();
   const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user && user.email === ADMIN_EMAIL) {
         setAuthenticated(true);
         localStorage.setItem("isAdminLoggedIn", "true"); 
      } else {
          setAuthenticated(false);
          localStorage.removeItem("isAdminLoggedIn");
      } 
        setLoading(false);
    });

      return () => unsubscribe();
  }, []);
 
  if   (pathname === "/admin/login") {

      return <>{children}</>;
  }

  if (loading) return <p>loading...</p>;
 
  if    (!authenticated) {
       router.replace("/admin/login");
      return null;
  }

     return <>{children}</>;
}





