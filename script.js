const fetchBtn = document.querySelector("#btn");
const quote = document.querySelector("#text");
const author = document.querySelector("#author");
const url = 'https://programming-quotes-api.herokuapp.com/quotes/random';


fetchBtn.addEventListener("click", ()=>{
  parseJSON = (res) => {
    return res.json();
  }
  
  updateQuote = (data) => {
    quote.innerText = data["en"];
    author.innerText = data["author"];
  }
  
  handleErrors = (res) => {
    if(!res.ok)
      throw Error(res.status);
    return res;
  }
  
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateQuote);
})