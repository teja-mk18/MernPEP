const renderSuggestions = (data) => {
  const { results } = data;
  const rootElem = document.getElementById("search-suggestions");
  rootElem.innerText = "";
  results.forEach((txt) => {
    const newPara = document.createElement("p");
    newPara.innerText = txt;
    rootElem.appendChild(newPara);
  });
};

const handleSearchSuggestions = (e) => {
  const searchText = e.target.value;

  const request = fetch(
    `https://youtube138.p.rapidapi.com/auto-complete/?q=${searchText}&hl=en&gl=IN`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "be5c8578d7msh5b3a4ab971d61f8p15cf70jsnf90ca0868fd9",
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
      },
    }
  );

  request
    .then((response) => {
      const pr2 = response.json();
      pr2.then((data) => {
        renderSuggestions(data);
      });
    })
    .catch((err) => {
      alert(`Error in search autocomplete: ${err.message}`);
      console.log(`Error in search autocomplete: ${err.message}`, err);
    });
};

let timeoutId = null;

const handleSearchSuggestionSmart = (e) => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    handleSearchSuggestions(e);
  }, 1000);
};
