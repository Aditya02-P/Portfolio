
const url = "https://hpl-auction.onrender.com/api/auth/admin-login";

const payload = {
  username: "er",
  password: "q34"
};


setInterval(()=>{fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(async response => {
    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", data);
  })
  .catch(error => {
    console.error("Request failed:", error);
  });
},500)
