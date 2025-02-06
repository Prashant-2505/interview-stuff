const search_bar = document.getElementById("search_bar");
const list = document.getElementById("list");
let search_key = "";
let data = {};
let filteredData = [];

// Wrap the debounce function properly and bind it to the `searchdata` function
const debouncedSearch = debounce(searchdata, 500);

search_bar.addEventListener("keyup", () => {
  search_key = search_bar.value;
  debouncedSearch(search_key);
});

async function getData() {
  try {
    const res = await fetch("https://dummyjson.com/users?limit=20");
    if (!res.ok) {
      throw new Error("Error in getting data");
    }
    data = await res.json();
    filteredData = data.users; // Initialize filtered data
    displayData(data.users);
  } catch (error) {
    console.error(error.message);
  }
}

function searchdata(key) {
  if (key.trim() === "") {
    displayData(data.users);
    return;
  }

  filteredData = data?.users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(key.toLowerCase()) ||
      user.lastName.toLowerCase().includes(key.toLowerCase())
    );
  });

  displayData(filteredData);
}

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args); 
    }, delay);
  };
}

function displayData(users) {
  list.innerHTML = "";

  if (users.length > 0) {
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
      list.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No results found";
    list.appendChild(li);
  }
}

getData();
