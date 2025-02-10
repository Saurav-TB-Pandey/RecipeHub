"use client";
import React from "react";
import { ChefHat } from "lucide-react";
import { useRouter } from "next/navigation";
const ProjectInfo = () => {
  const router = useRouter();

  const handleClick = () => router.push("/");

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
      <ChefHat size={24} className="text-primary" />
      <span className="text-xl font-bold">RecipeHub</span>
    </div>
  );
};

export default ProjectInfo;
