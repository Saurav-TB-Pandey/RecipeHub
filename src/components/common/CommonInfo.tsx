import { ArrowLeft, ChefHat } from "lucide-react";
import Link from "next/link";
import React from "react";
import CommonButton from "./CommonButton";

interface CommonInfoProps {
  type: string;
  goBackText: string;
  title?: string;
  description?: string;
  navigateTo?: string;
}

const CommonInfo = ({
  navigateTo,
  title,
  description,
  goBackText,
  type,
}: CommonInfoProps) => {
  return (
    <>
      {type === "recipeInfo" && (
        <CommonButton
          className="btn btn-ghost gap-2 mb-6"
          text={goBackText}
          navigateTo="back"
        />
      )}
      {["meals", "categories"].includes(type) && (
        <>
          <Link href={navigateTo || "/"} className="btn btn-ghost gap-2 mb-6">
            <ArrowLeft size={20} />
            {goBackText}
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              {type === "meals" && (
                <ChefHat size={32} className="text-primary" />
              )}
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
            </div>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default CommonInfo;
