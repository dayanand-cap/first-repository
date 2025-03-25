"use client";
import { useParams } from "next/navigation";
export default function Home() {
    const params = useParams();
    return (
      <div>
        Second custom page...
        {JSON.stringify(params)}
      </div>
    );
  }
  