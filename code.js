function compareStockPrices() {
  // Get active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get the active sheet
  var sheet = spreadsheet.getSheetByName('Sheet1'); // Replace 'Sheet1' with your sheet name
  
  // Get the last row with data
  var lastRow = sheet.getLastRow();
  
  // Get the stock symbols and prices
  var stockSymbols = sheet.getRange('A2:A' + lastRow).getValues().flat();
  var stockPrices = sheet.getRange('B2:B' + lastRow).getValues().flat();
  
  // Generate random values
  var randomValues = [];
  for (var i = 0; i < stockSymbols.length; i++) {
    randomValues.push(Math.random() * 100); // Adjust the range based on your requirements
  }
  
  // Compare prices and generate results
  var results = [];
  for (var i = 0; i < stockSymbols.length; i++) {
    var symbol = stockSymbols[i];
    var price = stockPrices[i];
    var randomValue = randomValues[i];
    
    // Compare prices and generate result
    var result = (price > randomValue) ? 'Higher' : 'Lower';
    
    results.push([symbol, price, randomValue, result]);
  }
  
  // Write results to the sheet
  var resultRange = sheet.getRange(2, 4, results.length, 4);
  resultRange.setValues(results);
}
