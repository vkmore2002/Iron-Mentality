// src/components/workouts/DaysSelector.jsx
const DaysSelector = ({ daysPerWeek, onSelect }) => {
  return (
    <div className="mb-12">
      <h2 className="text-lg font-semibold mb-4">How many days per week?</h2>

      <div className="flex flex-wrap gap-3">
        {[2, 3, 4, 5, 6, 7].map((day) => (
          <button
            key={day}
            onClick={() => onSelect(day)}
            className={`px-6 py-2 rounded-full border transition
              ${
                daysPerWeek === day
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-neutral-700 hover:border-white"
              }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaysSelector;
