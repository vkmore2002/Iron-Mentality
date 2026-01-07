import { useEffect } from "react";
import { fetchMuscles } from "../api/exerciseDbApi.js";

const TestApi = () => {
  useEffect(() => {
    fetchMuscles()
      .then((data) => console.log("Muscles:", data))
      .catch((err) => console.error(err));
  }, []);

  return <div>Check console</div>;
};

export default TestApi;
