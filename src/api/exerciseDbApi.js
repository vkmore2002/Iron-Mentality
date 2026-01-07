const BASE_URL = "https://exercisedb.p.rapidapi.com";

const HEADERS = {
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
  "x-rapidapi-host": "exercisedb.p.rapidapi.com",
};

export const fetchMuscles = async () => {
  const response = await fetch(`${BASE_URL}/exercises/targetList`, {
    headers: HEADERS,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch muscle list");
  }

  return response.json();
};

export const fetchExercises = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // ✅ ONE REQUEST ONLY
    xhr.open("GET", `${BASE_URL}/exercises?limit=30`);

    xhr.setRequestHeader("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
    xhr.setRequestHeader("x-rapidapi-host", "exercisedb.p.rapidapi.com");

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          console.error("API error:", xhr.status, xhr.responseText);
          reject("Failed to fetch exercises");
        }
      }
    };

    xhr.onerror = () => reject("Network error");

    xhr.send();
  });
};

export const fetchExerciseImage = (exerciseId, resolution = "720") => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `${BASE_URL}/image?exerciseId=${exerciseId}&resolution=${resolution}`
    );

    xhr.responseType = "blob";
    xhr.setRequestHeader("x-rapidapi-key", HEADERS["x-rapidapi-key"]);
    xhr.setRequestHeader("x-rapidapi-host", HEADERS["x-rapidapi-host"]);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const imageUrl = URL.createObjectURL(xhr.response);
        resolve(imageUrl);
      } else {
        reject("Failed to load exercise image");
      }
    };

    xhr.onerror = () => reject("Network error while loading image");

    xhr.send();
  });
};
