function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Callback executed after data fetch");
});



