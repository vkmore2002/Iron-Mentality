const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const fetchMuscles = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `${BASE_URL}/exercises/targetList`);

    xhr.setRequestHeader("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
    xhr.setRequestHeader("x-rapidapi-host", "exercisedb.p.rapidapi.com");

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          console.log("API response:", data);
          resolve(data);
        } else {
          reject({
            status: xhr.status,
            message: xhr.responseText,
          });
        }
      }
    };

    xhr.onerror = () => {
      reject({ message: "Network Error" });
    };

    xhr.send();
  });
};
