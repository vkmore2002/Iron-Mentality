import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { fetchExercises } from "../api/exerciseDbApi";
import Footer from "../Components/Footer.jsx";

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
        console.log("Total exercises from API:", data.length);
      } catch (error) {
        console.error("Failed to fetch exercises", error);
      } finally {
        setLoading(false);
      }
    };

    loadExercises();
  }, []);

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(search.toLowerCase());

    let matchesFilter = true;

    if (activeFilter === "arms") {
      matchesFilter =
        exercise.bodyPart === "upper arms" ||
        exercise.bodyPart === "lower arms";
    } else if (activeFilter === "legs") {
      matchesFilter =
        exercise.bodyPart === "upper legs" ||
        exercise.bodyPart === "lower legs";
    } else if (activeFilter === "abs") {
      matchesFilter =
        exercise.target === "abs" || exercise.bodyPart === "waist";
    } else if (activeFilter) {
      matchesFilter =
        exercise.bodyPart === activeFilter || exercise.target === activeFilter;
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">Exercises</h1>
        <p className="text-gray-400 mt-2">Choose your weapon.</p>
        {/* Search (UI only for now) */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search exercises..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-xl bg-zinc-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["abs", "chest", "back", "legs", "arms", "shoulders"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() =>
                    setActiveFilter(activeFilter === filter ? null : filter)
                  }
                  className={`px-5 py-2 rounded-full border transition capitalize
        ${
          activeFilter === filter
            ? "border-cyan-400 text-cyan-400"
            : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
        }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>
        {/* Cards */}
        {loading ? (
          <p className="mt-12 text-gray-400">Loading...</p>
        ) : (
          <Cards exercises={filteredExercises} />
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Exercise;
