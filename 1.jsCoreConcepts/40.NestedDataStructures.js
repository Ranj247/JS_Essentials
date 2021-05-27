/*
It is possible and common to nest data structures inside one another. This is common in all programming languages and gives developers a way to create complex arrangements of data, in particular in API development. As you know by now, the two main data structures you'll work with are arrays and objects. There are four ways to nest these structures:

An array as an array value
An object as an array value
An array as an object property
An object as an object property
You can mix and match the above arrangements however you want, and you should become comfortable identifying the individual nested structures since it will be helpful later in your development career not only in JavaScript but in many other languages as well. You should also make it a point to memorize these two key concepts:

Array values are accessed by their index in the array in square brackets
Object values are accessed by their property (key) names using dot notation
If you can easily identify an array (enclosed in [square brackets]) and an object (enclosed in {curly braces}), as well as remember the two key points above, you'll find it quite easy to navigate nested data structures. Here is a complex one repesenting a company with their financial statements for example:
*/

let company = {
  name: 'Apple, Inc',
  founded: 1976,
  financials: {
    incomeStatement: {
      years: [2020, 2019, 2018],
      revenue: [125, 120, 115],
      costs: [100, 100, 100],
      profit: [25, 20, 15]
    },
    balanceSheet: {
      years: [2020, 2019, 2018],
      assets: [200, 190, 180],
      liabilties: [100, 95, 90],
      equity: [100, 95, 90]
    },
    cashFlow: {
      years: [2020, 2019, 2018],
      operating: [75, 65, 55],
      investing: [22, 20, 18],
      financing: [-94, -80, -75]    
    }
  },
  competitors: ['Microsoft', 'Amazon', 'Samsung']
}

console.log(company.name);
console.log(company.competitors);
console.log(company.competitors[0]);
console.log(company.financials.incomeStatement.years);
console.log(company.financials.incomeStatement.revenue[0]);

/*
The syntax is consistent in the above. Objects are always property: value pairs, separated by commas and enclosed in curly braces. Arrays are always comma separated lists enclosed in square brackets. You can mix dot notation and array indexing together to access any property or index no matter where it lies in the data structure. Try changing the above code in JavaScript Tutor and try to access some of the other values to get used to navigating around these structures. Can you find Apple's third competitor? What about utilizing Math.max() or Math.min() within one of the financial arrays to find their highest profit? How would you find the highest profit's associated year? It's not critical you solve all these problems right now, but consider the approaches you might take to solve them.
*/