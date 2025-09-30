function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged in successfully");
      resolve();
    }, 1000); // simulate delay
  });
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching user data...");
      resolve({ name: "Yash", course: "FSD", score: 0 });
    }, 1000);
  });
}

function displayData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Displaying Data:");
      console.log(`Name: ${data.name}`);
      console.log(`Course: ${data.course}`);
      console.log(`Score: ${data.score}`);
      resolve(data);
    }, 1000);
  });
}

function attemptTest(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User is attempting the test...");
      data.score = 95; // simulate score update
      console.log("Test completed, new score:", data.score);
      resolve(data);
    }, 1000);
  });
}

function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged out successfully");
      resolve();
    }, 1000);
  });
}

// ---------- Promise Execution ----------
console.log("=== Promise Execution Start ===");

login()
  .then(() => getData())
  .then((userData) => displayData(userData).then(() => userData))
  .then((userData) => attemptTest(userData))
  .then((userData) => logout().then(() => userData))
  .then(() => {
    console.log("call other app");
    console.log("=== Promise Execution End ===");
  })
  .catch((err) => console.error("Error:", err));
