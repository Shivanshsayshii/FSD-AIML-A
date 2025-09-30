function login() {
    console.log("Logging in...");
    // Simulate immediate login
    console.log("Logged in!");
    return "UserToken123";
}

function getData(token) {
    console.log("Fetching data with token:", token);
    // Simulate immediate data fetch
    console.log("Data fetched!");
    return { name: "John Doe", score: 95 };
}

function DisplayData(data) {
    console.log("Displaying data...");
    // Simulate immediate display
    console.log("User:", data.name, "Score:", data.score);
}

function AttemptTest() {
    console.log("Attempting test...");
    // Simulate immediate test attempt
    console.log("Test attempted!");
    return true;
}

function logout() {
    console.log("Logging out...");
    // Simulate immediate logout
    console.log("Logged out!");
}

// Main synchronous flow
function main() {
    const token = login();
    const data = getData(token);
    DisplayData(data);
    AttemptTest();
    logout();
    console.log("call other app");
}

main();