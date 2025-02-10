interface RecipeInstructionsProps {
  instructions: string;
}

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
  const steps = instructions.split(/\r\n|\n/).filter((step) => step.trim());

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Instructions</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-none">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-content">
                  {index + 1}
                </span>
              </div>
              <p className="flex-1">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeInstructions;
