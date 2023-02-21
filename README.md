# My Solution for Detector Inspector Engineering Challenge - Dillon Foenander

# How-to for scraper tool test app

# In a terminal window run npm start this will;
1. Run scraper-class and find the 2nd table body within the wiki page for 2022 Comm Games provided as a url (Input)
2. Map each table row into an Array named medals
3. Find All innerText data in the second column for country name
4. Find All innerText data in the third column for Gold Medals Won Number
5. write the array to a json file and store it in ./data/medals.json for later use
6. in chart-function, take the data from the json, split into two arrays
7. Generate a chart with chartjs-to-image using data from arrays as labels and datasets
8. Save Image to file (output)

# plan to create graph using chart.js / chartjs-to-image
1. First, create a function (createChart) and export to index.js
2. Extract the country names (x-axis) and medal counts (y-axis) into separate arrays using foreach loop from the json file I created earlier.
3. Create a chart using chartjs-to-image package
4. Use chartjs-to-image to create a bar chart, Specify the data for the chart, including the labels and values for the bars with the seperate arrays created earlier.
5. Finally, save the chart as an image to file, write to disk

# Stack used
1. node.js
2. Libraries/Packages used-     
    chartjs-to-image: to create chart and store as image
    puppeteer: to open a browser for a provided url and scrape data from a table
