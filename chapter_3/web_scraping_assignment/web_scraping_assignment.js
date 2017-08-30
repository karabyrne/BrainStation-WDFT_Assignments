// Set up a web scraper by going through Web Scraping with NodeJS

var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.reddit.com/?count=25&after=t3_6lqu24";

// Use your web scraper to scrape the front page of Reddit
// Output to the console a list of all the titles of all of the articles on the Reddit homepage.
  
// request(url, function (error, response, body) {
//   if (!error) {
//     var $ = cheerio.load(body),
//       titles = $(".title").text();

//     console.log(titles);
//   } else {
//     console.log("We’ve encountered an error: " + error);
//   }
// });

// Once this is working, try scraping through the first 3 pages of Reddit, scraping each page separately. 
// Console.log "Page 1", "Page 2" and "Page 3" as part of each scraping function. Which result returned first? 
// Run your code again -- did your results return in the same order?

function webscraper(url, pageNumber){
    request(url, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body),
            titles = $(".title").text();

            console.log("page " + pageNumber + ":" + titles);
        } else {
            console.log("We’ve encountered an error: " + error);
        }
    })
};

// webscraper("https://www.reddit.com");

// webscraper("https://www.reddit.com/?count=25&after=t3_6lqu24");

// webscraper("https://www.reddit.com/?count=50&after=t3_6ls1m1");

var redditArray = ["https://www.reddit.com", "https://www.reddit.com/?count=25&after", "https://www.reddit.com/?count=50&after"];

for(let i = 0; i < redditArray.length; i++){
    webscraper(redditArray[i], i+1)
};