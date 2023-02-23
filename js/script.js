console.log("rodando...");

//https://app.rebrandly.com/
//link da documentação do site: https://developers.rebrandly.com/docs
//api key: 5e249c34c72b4d25bc1e59ce546f9ea7


const shortenerButton = document.querySelector("[data-shortener]");

shortenerButton.addEventListener("click",shortenerUrl);


function shortenerUrl(){
  //validar se o link existe
  let url = document.querySelector("[data-input-url]").value;

  if(!url){
    alert("Insira uma url no formulário");
    return;
  }


  //encurtar o link

  //headers
  let headers = {
    "Content-Type": "application/json",
    "apiKey": "5e249c34c72b4d25bc1e59ce546f9ea7"
  }

  //dados
  let requestLink = {
    destination: url,
    domain: {fullName: "rebrand.ly"}
  }

  fetch("https://api.rebrandly.com/v1/links", {
    method:"POST",
    headers:headers,
    body: JSON.stringify(requestLink)
  }).then(res=> res.json()).then(json => {
    console.log(json);
    let input = document.querySelector("[data-input-url]");
    input.value = json.shortUrl;
  })

}