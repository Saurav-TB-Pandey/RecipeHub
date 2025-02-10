// import CommonButton from "@/components/common/CommonButton";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-base-200">
//       <div className="hero min-h-[calc(100vh-4rem)] bg-base-200">
//         <div className="hero-content text-center">
//           <div className="max-w-md">
//             <h1 className="text-5xl font-bold">Welcome to RecipeHub</h1>
//             <p className="py-6">
//               Discover delicious recipes from around the world. Browse our
//               categories, find your favorite meals, and start cooking like a
//               pro!
//             </p>
//             <CommonButton
//               text="Explore Categories"
//               className="btn btn-primary"
//               navigateTo="/categories"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// app/page.tsx
import CommonButton from "@/components/common/CommonButton";

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-base-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-slate-100/[0.2] bg-[size:20px_20px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/30 blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Content */}
      <div className="hero min-h-[calc(100vh-4rem)] relative">
        <div className="hero-content text-center">
          <div className="max-w-md relative">
            {/* Decorative Food Icons */}
            <div className="absolute -left-16 -top-16 text-3xl opacity-20 animate-bounce delay-300">
              🍳
            </div>
            <div className="absolute -right-16 -bottom-16 text-3xl opacity-20 animate-bounce delay-700">
              🥗
            </div>
            <div className="absolute right-0 -top-8 text-3xl opacity-20 animate-bounce">
              🍕
            </div>

            <div className="animate-fade-up">
              <h1 className="text-5xl font-bold text-base-content mb-2 animate-fade-up">
                Welcome to
              </h1>
              <h1 className="text-6xl font-extrabold text-primary mb-6 animate-fade-up delay-200 hover:scale-105 transition-transform duration-300">
                RecipeHub
              </h1>

              <p className="py-6 text-lg text-base-content/80 animate-fade-up delay-300">
                Discover delicious recipes from around the world. Browse our
                categories, find your favorite meals, and start cooking like a
                pro!
              </p>

              <div className="animate-fade-up delay-500">
                <CommonButton
                  text="Explore Categories"
                  className="btn btn-primary btn-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
                  navigateTo="/categories"
                />
              </div>
            </div>

            {/* Card Decorations */}
            <div className="absolute -z-10 blur-sm opacity-30">
              <div className="absolute -left-32 -top-32 w-24 h-24 bg-primary rounded-lg animate-float" />
              <div className="absolute -right-32 -bottom-32 w-24 h-24 bg-secondary rounded-lg animate-float delay-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
