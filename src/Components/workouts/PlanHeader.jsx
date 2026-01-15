// src/components/workouts/PlanHeader.jsx
const PlanHeader = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-2">Workouts</h1>
      <p className="text-gray-400 mb-6">Design your own training plan.</p>

      <input
        type="text"
        placeholder="Workout plan name..."
        className="w-full max-w-xl bg-neutral-900 text-white px-5 py-3 rounded-xl 
                   outline-none border border-neutral-800 
                   placeholder-gray-500 focus:border-gray-500"
      />
    </div>
  );
};

export default PlanHeader;
