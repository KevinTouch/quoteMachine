// Variable Declaration
const fetchBtn = document.querySelector("#btn");
const quote = document.querySelector("#text");
const author = document.querySelector("#author");
const url = 'https://programming-quotes-api.herokuapp.com/quotes/random';


// Function Declaration
const setBg = () => {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  document.body.style.backgroundColor = randomColor;
  document.querySelector(".btn-outline-primary").style.color = randomColor;
  document.querySelector(".btn-outline-primary").style.borderColor = randomColor;
  document.querySelectorAll(".fab").forEach((icon)=>{
    icon.style.color = randomColor;
  });

  // $(".btn-outline-primary").hover(function(){
  //   $(this).css("background-color", "white");
  // });

}


const getQuote = () => {
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
}

const setIconHref = () => {
  const quoteText = $("#text").text();
  const twitter = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quoteText;
  const tumblr = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + quoteText;

  $("#twitter").attr("href", twitter);
  $("#tumblr" ).attr("href", tumblr);

}


// Event Listeners
fetchBtn.addEventListener("click", ()=>{
  getQuote();
  setBg();
});



// functions to set initially
getQuote();
setBg();
setIconHref();

