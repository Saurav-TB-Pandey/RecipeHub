"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CommonButtonProps } from "@/utils/types/dataTypes";
import { ArrowLeft } from "lucide-react";

const CommonButton = ({ text, className, navigateTo }: CommonButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (navigateTo === "back") {
      router.back();
    } else {
      router.push(navigateTo);
    }
  };

  return (
    <>
      {navigateTo === "back" && (
        <div className="btn btn-ghost gap-2 mb-0" onClick={handleClick}>
          <ArrowLeft size={20} />
          {text}
        </div>
      )}
      {navigateTo !== "back" && (
        <button className={className} onClick={handleClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default CommonButton;
