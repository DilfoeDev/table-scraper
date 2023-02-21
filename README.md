# My Solution for Detector Inspector Engineering Challenge - Dillon Foenander

# How-to for scraper tool test app
1. In a terminal window cd to project root directory run npm install for node modules and npm start this will;
2. Run scraper-class and find the 2nd table body within the wiki page for 2022 Comm Games provided as a url (Input)
3. Map each table row into an Array named tableData
4. Find All innerText data in the second column for country name
5. Find All innerText data in the third column for Gold Medals Won Number
6. write the array to a json file and store it in ./data/data.json for later use
7. in chart-function, take the data from the json, split into two arrays
8. Generate a chart with chartjs-to-image using data from arrays as labels and datasets
9. Save Image graph.png to file - ./data in project directory (output)

# plan to create graph using chartjs-to-image
1. First, create a function (createChart) and export to index.js
2. Extract the country names (x-axis) and gold medal counts (y-axis) into separate arrays using foreach loop from the json file I created earlier.
3. Create a chart using chartjs-to-image package
4. Use chartjs-to-image to create a bar chart, Specify the data for the chart, including the labels and values for the bars with the seperate arrays created earlier.
5. Finally, save the chart as an image to file, write to disk

# Stack used
1. node.js
2. Libraries/Packages used-     
    chartjs-to-image: to create chart and store as image
    puppeteer: to open a browser for a provided url and scrape data from a table
