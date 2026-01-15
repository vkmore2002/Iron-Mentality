// src/pages/Workouts.jsx
import { useState } from "react";
import PlanHeader from "../Components/workouts/PlanHeader";
import DaysSelector from "../Components/workouts/DaysSelector";
import DayCard from "../Components/workouts/DayCard";
import WorkoutOverview from "../Components/workouts/WorkoutOverview";

const Workouts = () => {
  const [daysPerWeek, setDaysPerWeek] = useState(0);
  const [schedule, setSchedule] = useState([]);

  const handleDaysChange = (days) => {
    setDaysPerWeek(days);

    const generatedDays = Array.from({ length: days }, (_, i) => ({
      day: `Day ${i + 1}`,
      muscles: [],
      exercises: [],
    }));

    setSchedule(generatedDays);
  };

  const toggleMuscle = (dayIndex, muscle) => {
    setSchedule((prev) =>
      prev.map((day, index) =>
        index !== dayIndex
          ? day
          : {
              ...day,
              muscles: day.muscles.includes(muscle)
                ? day.muscles.filter((m) => m !== muscle)
                : [...day.muscles, muscle],
            }
      )
    );
  };

  const addExercise = (dayIndex, exercise) => {
    setSchedule((prev) =>
      prev.map((day, index) =>
        index !== dayIndex
          ? day
          : { ...day, exercises: [...day.exercises, exercise] }
      )
    );
  };

  const removeExercise = (dayIndex, exerciseId) => {
    setSchedule((prev) =>
      prev.map((day, index) =>
        index !== dayIndex
          ? day
          : {
              ...day,
              exercises: day.exercises.filter((ex) => ex.id !== exerciseId),
            }
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl">
        <PlanHeader />

        <DaysSelector daysPerWeek={daysPerWeek} onSelect={handleDaysChange} />

        {schedule.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {schedule.map((day, index) => (
                <DayCard
                  key={index}
                  day={day}
                  index={index}
                  onToggleMuscle={toggleMuscle}
                  onAddExercise={addExercise}
                  onRemoveExercise={removeExercise}
                />
              ))}
            </div>

            <WorkoutOverview schedule={schedule} />
          </>
        )}
      </div>
    </div>
  );
};

export default Workouts;
