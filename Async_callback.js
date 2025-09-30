// Async callback: 
// Simulate async login with callback
function login(callback) {
    console.log("Logging in...");
    setTimeout(() => {
        console.log("Logged in!");
        callback("UserToken123");
    }, 1000);
}

// Simulate async data fetch with callback
function getData(token, callback) {
    console.log("Fetching data with token:", token);
    setTimeout(() => {
        console.log("Data fetched!");
        callback({ name: "John Doe", score: 95 });
    }, 1000);
}

// Simulate async display with callback
function DisplayData(data, callback) {
    console.log("Displaying data...");
    setTimeout(() => {
        console.log("User:", data.name, "Score:", data.score);
        callback();
    }, 500);
}

// Simulate async test attempt with callback
function AttemptTest(callback) {
    console.log("Attempting test...");
    setTimeout(() => {
        console.log("Test attempted!");
        callback(true);
    }, 1000);
}

// Simulate async logout with callback
function logout(callback) {
    console.log("Logging out...");
    setTimeout(() => {
        console.log("Logged out!");
        callback();
    }, 500);
}

// Main flow using callbacks
function main() {
    login(function(token) {
        getData(token, function(data) {
            DisplayData(data, function() {
                AttemptTest(function() {
                    logout(function() {
                        console.log("call other app");
                    });
                });
            });
        });
    });
}

main();