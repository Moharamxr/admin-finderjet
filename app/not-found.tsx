"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to /auth/login after component mounts
        router.push("/auth/login");
    }, [router]);

    return null; // Optionally, you can display a loading indicator here
}
