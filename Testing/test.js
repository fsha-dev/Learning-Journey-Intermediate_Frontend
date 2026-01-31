function validation(username, password) {
  if (!username || !password) {
    return { success: false, message: "Username and password are required." };
  }
  if (username.length < 3) {
    return {
      success: false,
      error: "Username must be at least 3 characters long.",
    };
  }
  return { success: true, message: "Validation successful." };
}

console.log("test-1", validation("us", "pass123")); // Expected: {success:false, error: "Username must be at least 3 characters long."}
console.log("test-2", validation("user", "")); // Expected: { success: false, message: "Username and password are required." }
console.log("test-3", validation("user", "pass123")); // Expected: {success:true, message: "Validation successful."}
