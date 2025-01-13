import React from "react";
import SplitText from "@/components/ui/SplitText";
export default function WelcomeSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const handleScrollToContent = () => {
    const contentSection = document.getElementById("welcome-content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SplitText
        text="Hạt giống của sự văn minh"
        className="text-6xl font-semibold text-center text-white"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <h3 className="text-white my-4 mb-6 italic ">
        Một dự án của môn học MLN111 do nhóm Dominators K17 thực hiện
      </h3>
      <button className="p-[3px] relative" onClick={handleScrollToContent}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Khám phá ngay
        </div>
      </button>
    </>
  );
}
