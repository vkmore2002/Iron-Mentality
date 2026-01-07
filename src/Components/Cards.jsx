import { useEffect, useState } from "react";
import { fetchExerciseImage } from "../api/exerciseDbApi.js";

const CardItem = ({ exercise }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    let mounted = true;

    fetchExerciseImage(exercise.id, "720")
      .then((img) => {
        if (mounted) setImage(img);
      })
      .catch(() => {
        setImage(null);
      });

    return () => {
      mounted = false;
    };
  }, [exercise.id]);

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition">
      <div className="h-40 bg-zinc-800 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={exercise.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500 text-sm">Loading image...</span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold capitalize">{exercise.name}</h3>
        <p className="text-sm text-gray-400 mt-1 capitalize">
          {exercise.target} • {exercise.equipment}
        </p>
      </div>
    </div>
  );
};

const Cards = ({ exercises }) => {
  if (!exercises || exercises.length === 0) {
    return <p className="text-gray-400 mt-12">Loading exercises...</p>;
  }

  return (
    <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {exercises.slice(0, 30).map((exercise) => (
        <CardItem key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default Cards;
