var addMsg = new Promise(async(resolve, reject) => {
        // API call
        const response = await fetch("https://api.quotable.io/quotes?limit=20");
        const results = await response.json();
        //Promise resolve and reject
        resolve(results);
        reject();
        return results;
})

  addMsg
  .then((data) => {
    data.results.forEach((quote) => {
      //console.log(data); (UNUSED)
      //Create paragraph tags for the quotes to go in
      let Msg = document.createElement("p");
      // Finds and prints the value to the page (Uses jQuery caused I couldn't figure out how to do it with hard HTML)
      Msg.innerHTML = `"${quote.content}"<br>-${"<i>" + quote.author + "</i>"}`;
      //Appends the child
      document.getElementsByTagName('body')[0].appendChild(Msg);
    });
  })