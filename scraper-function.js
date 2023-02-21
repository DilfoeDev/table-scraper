const writeFileSync = require("fs").writeFileSync;


const scraper = async (browser, page) => {                                                  //browser not need to be passed in, but good practice if needed in the function later on                   
const url = "https://en.wikipedia.org/wiki/2022_Commonwealth_Games_medal_table" ; //url input

await page.goto(url, { waitUntil: "domcontentloaded" }); //waits until the dom content is loaded

  

        const tableData = await page.evaluate(() =>
            Array.from(document.querySelectorAll("tbody").item(1).querySelectorAll("tbody > tr")).map(i => [               //selects the second table found on the page and iterates by table row
                i.querySelector("th:nth-child(2)") ? i.querySelector("th:nth-child(2)").innerText : i.querySelector("th:nth-child(1)").innerText,                 //selects each table header innerText in 2nd Column in table body, in some cases th is the first child in the table and hence a ternary is used to remedy this, where the selector will select first child in stead of second
                i.querySelector("td:nth-child(3)") ? i.querySelector("td:nth-child(3)").innerText : null                  //selects each table data innerText in 3rd column in table body
            ])
        );

        writeToJson(tableData);                     //writes array to json format
            console.log(tableData);        //logs the result of the array 'tableData'
    }

    

    writeToJson = tableData =>{
        writeFileSync("./data/data.json", JSON.stringify(tableData));  //converts data in array to strings to be stored in JSON format
    };


module.exports = scraper; //export scraper function

