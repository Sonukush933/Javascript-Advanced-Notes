// Real world scenario 


async function fetchData() {
    const [data1, data2, data3] = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve("Data 1"), 1000)),
        new Promise(resolve => setTimeout(() => resolve("Data 2"), 1000)),
        new Promise(resolve => setTimeout(() => resolve("Data 3"), 1000))
    ]);

    console.log(data1);  // Output after 2 seconds: "Data 1"
    console.log(data2);  // Output after 2 seconds: "Data 2"
    console.log(data3);  // Output after 2 seconds: "Data 2"
}
fetchData();


async function fetchAndProcessData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log("Fetched Data:", data);

        // Process the data
        const processedData = data.map(item => item.value * 2);
        console.log("Processed Data:", processedData);

        // Update the UI (hypothetical example)
        // updateUI(processedData);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchAndProcessData();

// Best Practices
// Avoid Mixing Promises and Callbacks: Stick to either Promises or async/await in your codebase to keep it consistent.
// Error Handling: Always use try/catch with async/await to handle errors gracefully.
// Use Promise.all for Parallel Execution: When independent asynchronous tasks can be executed in parallel, use Promise.all to save time.
// Limit await in Loops: Avoid using await inside loops when tasks can be performed in parallel; instead, use Promise.all.