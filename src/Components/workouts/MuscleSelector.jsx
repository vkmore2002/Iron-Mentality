// src/components/workouts/MuscleSelector.jsx
import { MUSCLES } from "../../data/muscles";

const MuscleSelector = ({ selected, onToggle }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {MUSCLES.map((muscle) => {
        const active = selected.includes(muscle);

        return (
          <button
            key={muscle}
            onClick={() => onToggle(muscle)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
              ${
                active
                  ? "bg-black text-gray-300 border-neutral-700 hover:border-white"
                  : "bg-neutral-900 text-gray-400 border-neutral-700 hover:text-white hover:border-neutral-500"
              }`}
          >
            {muscle}
          </button>
        );
      })}
    </div>
  );
};

export default MuscleSelector;
