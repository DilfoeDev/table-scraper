const puppeteer = require("puppeteer");
const scraper = require("./scraper-function");


(async () => {                                   //runs an asynchronous function to call scraper and createChart
  let browser;
  let page;

  try {
    browser = await puppeteer.launch({
      headless: true                        //option to launch browser in headless mode true or false (opens a browser window or not)
    });

    page = await browser.newPage();

    
    await scraper(browser, page); //executes the scraper function


  } catch (error) {                          //catches any errors ...
    console.log(error.stack || error);      //...and logs in console
  }


 await browser.close();              //close browser window

 const createChart = require("./chart-function"); //declares createChart Function later on so it does not break, as it is only required just before createChart is called
 
await createChart();  //createChart called to create output image file after scraper has created json file

})();

