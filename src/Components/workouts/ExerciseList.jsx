import { useState } from "react";
import AddExerciseForm from "./AddExerciseForm";

const ExerciseList = ({ exercises, onAdd, onRemove }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-gray-300">Exercises</h4>

        <button
          onClick={() => setOpen(!open)}
          className="text-xs text-gray-400 hover:text-white transition"
        >
          {open ? "Close" : "+ Add"}
        </button>
      </div>

      {/* Exercise list */}
      {exercises.length > 0 && (
        <ul className="space-y-2 mb-4">
          {exercises.map((ex) => (
            <li
              key={ex.id}
              className="flex justify-between items-center 
                         bg-neutral-800/70 px-3 py-2 rounded-lg"
            >
              <span className="text-sm text-gray-200">
                {ex.name}
                <span className="text-gray-400">
                  {" "}
                  — {ex.sets}×{ex.reps}
                </span>
              </span>

              <button
                onClick={() => onRemove(ex.id)}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Add form */}
      {open && <AddExerciseForm onAdd={onAdd} />}
    </div>
  );
};

export default ExerciseList;
