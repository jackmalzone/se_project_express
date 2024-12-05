const fetch = require("node-fetch");

async function createTestUser() {
  try {
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test User",
        avatar: "https://example.com/avatar.jpg",
        email: "test@test.com",
        password: "password123",
      }),
    });

    const data = await response.json();
    console.log("User creation response:", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createTestUser();
