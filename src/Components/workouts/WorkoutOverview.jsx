// src/components/workouts/WorkoutOverview.jsx
const WorkoutOverview = ({ schedule }) => {
  if (!schedule.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-2">Weekly Workout Plan</h2>
      <p className="text-gray-400 mb-6">
        Your complete training split at a glance.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-neutral-800 rounded-xl overflow-hidden">
          <thead className="bg-neutral-900">
            <tr>
              <th className="text-left px-4 py-3 border-b border-neutral-800">
                Day
              </th>
              <th className="text-left px-4 py-3 border-b border-neutral-800">
                Muscles
              </th>
              <th className="text-left px-4 py-3 border-b border-neutral-800">
                Exercises
              </th>
            </tr>
          </thead>

          <tbody>
            {schedule.map((day, index) => (
              <tr
                key={index}
                className="border-b border-neutral-800 hover:bg-neutral-900 transition"
              >
                <td className="px-4 py-3 font-medium">{day.day}</td>

                <td className="px-4 py-3 text-gray-300">
                  {day.muscles.length > 0 ? day.muscles.join(", ") : "—"}
                </td>

                <td className="px-4 py-3 text-gray-400 text-sm">
                  {day.exercises.length > 0
                    ? day.exercises.map((ex, i) => (
                        <span key={ex.id}>
                          {ex.name} ({ex.sets}×{ex.reps})
                          {i !== day.exercises.length - 1 && ", "}
                        </span>
                      ))
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkoutOverview;
