async function fetchData() {
  try {
    const fetch = await import("node-fetch").then((module) => module.default);
    const url = "https://www.google.com";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.text();
    console.log("Data fetched successfully:");
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
