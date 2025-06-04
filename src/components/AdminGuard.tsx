// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/firebaseConfig";

// export default function AdminGuard({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (!user || user.email !== "youradmin@example.com") {
//         router.push("/");
//       } else {
//         setLoading(false);
//       }
//     });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   return <>{children}</>;
// }
