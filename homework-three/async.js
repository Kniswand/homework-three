//Async function
async function addImgs() {
    // API call
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20");
    const data = await response.json();
    return data.message; 
  }
  
addImgs()
  .then((images) => {
    const body = document.getElementsByTagName('body')[0];
//For each loop that adds every picture
    images.forEach((images) => {
        //Creates image elements
      let img = document.createElement("img");
      //Turns the image urls from the API call into things that can turn into elements
      img.src = images;
      //For each
      body.appendChild(img);
    });
  })