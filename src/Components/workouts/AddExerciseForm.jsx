// src/components/workouts/AddExerciseForm.jsx
import { useState } from "react";

const AddExerciseForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [rest, setRest] = useState("");

  const handleSubmit = () => {
    if (!name || !sets || !reps) return;

    onAdd({
      id: crypto.randomUUID(),
      name,
      sets,
      reps,
      rest,
    });

    setName("");
    setSets("");
    setReps("");
    setRest("");
  };

  return (
    <div className="mt-4 space-y-3">
      <input
        placeholder="Exercise name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-neutral-800 text-white px-3 py-2 rounded-lg border border-neutral-700 outline-none"
      />

      <div className="grid grid-cols-3 gap-2">
        <input
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="bg-neutral-800 text-white px-3 py-2 rounded-lg border border-neutral-700 outline-none"
        />
        <input
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="bg-neutral-800 text-white px-3 py-2 rounded-lg border border-neutral-700 outline-none"
        />
        <input
          placeholder="Rest (sec)"
          value={rest}
          onChange={(e) => setRest(e.target.value)}
          className="bg-neutral-800 text-white px-3 py-2 rounded-lg border border-neutral-700 outline-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-white text-black py-2 rounded-lg font-medium"
      >
        Add Exercise
      </button>
    </div>
  );
};

export default AddExerciseForm;
