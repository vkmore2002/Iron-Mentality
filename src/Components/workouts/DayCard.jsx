// src/components/workouts/DayCard.jsx
import MuscleSelector from "./MuscleSelector";
import ExerciseList from "./ExerciseList";

const DayCard = ({
  day,
  index,
  onToggleMuscle,
  onAddExercise,
  onRemoveExercise,
}) => {
  return (
    <div
      className="bg-gradient-to-br from-neutral-900 to-neutral-950
             border border-neutral-800/60 
             rounded-3xl p-6"
    >
      <h3 className="text-lg font-semibold mb-3 tracking-wide">{day.day}</h3>

      <MuscleSelector
        selected={day.muscles}
        onToggle={(muscle) => onToggleMuscle(index, muscle)}
      />

      {day.muscles.length > 0 && (
        <p className="text-sm text-gray-400 mt-4">
          Training: {day.muscles.join(", ")}
        </p>
      )}

      <ExerciseList
        exercises={day.exercises}
        onAdd={(exercise) => onAddExercise(index, exercise)}
        onRemove={(id) => onRemoveExercise(index, id)}
      />
    </div>
  );
};

export default DayCard;
