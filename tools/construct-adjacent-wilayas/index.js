/**
 * Ressources:
 * - https://www.researchgate.net/figure/Wilayas-provinces-of-Algeria-7_fig1_290537258
 * - http://www.saravoyages.com/images/carte_algerie.gif
 */
const fs = require('fs');
const { Wilaya } = require('./models');

const AdjacentWilayas = [];

AdjacentWilayas.push(new Wilaya(1, [37, 8, 32, 3, 47, 11]));
AdjacentWilayas.push(new Wilaya(2, [27, 48, 7, 38, 44, 42]));
AdjacentWilayas.push(new Wilaya(3, [32, 47, 17, 14]));
AdjacentWilayas.push(new Wilaya(4, [5, 40, 12, 41, 24, 25, 43]));
AdjacentWilayas.push(new Wilaya(5, [28, 7, 40, 4, 43, 19]));
AdjacentWilayas.push(new Wilaya(6, [15, 10, 34, 19, 18]));
AdjacentWilayas.push(new Wilaya(7, [17, 28, 5, 40, 39, 30]));
AdjacentWilayas.push(new Wilaya(8, [45, 32, 1, 37]));
AdjacentWilayas.push(new Wilaya(9, [42, 16, 10, 26, 44]));
AdjacentWilayas.push(new Wilaya(10, [26, 9, 35, 15, 34, 28]));
AdjacentWilayas.push(new Wilaya(11, [1, 47, 30, 33]));
AdjacentWilayas.push(new Wilaya(12, [39, 40, 4, 41]));
AdjacentWilayas.push(new Wilaya(13, [46, 22, 45]));
AdjacentWilayas.push(new Wilaya(14, [32, 20, 29, 48, 38, 17, 3]));
AdjacentWilayas.push(new Wilaya(15, [10, 35, 6]));
AdjacentWilayas.push(new Wilaya(16, [9, 42, 35]));
AdjacentWilayas.push(new Wilaya(17, [3, 14, 38, 26, 28, 7, 30, 47]));
AdjacentWilayas.push(new Wilaya(18, [43, 19, 6, 21]));
AdjacentWilayas.push(new Wilaya(19, [5, 28, 34, 6, 18, 43]));
AdjacentWilayas.push(new Wilaya(20, [32, 22, 29, 15]));
AdjacentWilayas.push(new Wilaya(21, [25, 18, 23, 24]));
AdjacentWilayas.push(new Wilaya(22, [45, 13, 46, 31, 29, 20, 32]));
AdjacentWilayas.push(new Wilaya(23, [24, 21, 36]));
AdjacentWilayas.push(new Wilaya(24, [4, 25, 21, 23, 36, 41]));
AdjacentWilayas.push(new Wilaya(25, [4, 43, 18, 21, 24]));
AdjacentWilayas.push(new Wilaya(26, [17, 38, 44, 9, 10, 28]));
AdjacentWilayas.push(new Wilaya(27, [31, 29, 48, 2]));
AdjacentWilayas.push(new Wilaya(28, [17, 26, 10, 34, 19, 5, 7]));
AdjacentWilayas.push(new Wilaya(29, [20, 22, 31, 27, 48, 14]));
AdjacentWilayas.push(new Wilaya(30, [47, 39, 33, 11]));
AdjacentWilayas.push(new Wilaya(31, [46, 22, 29, 27]));
AdjacentWilayas.push(new Wilaya(32, [1, 8, 45, 22, 20, 14, 3, 47]));
AdjacentWilayas.push(new Wilaya(33, [11, 30]));
AdjacentWilayas.push(new Wilaya(34, [28, 10, 6, 19]));
AdjacentWilayas.push(new Wilaya(35, [9, 16, 15, 10]));
AdjacentWilayas.push(new Wilaya(36, [41, 24, 23]));
AdjacentWilayas.push(new Wilaya(37, [8, 1]));
AdjacentWilayas.push(new Wilaya(38, [48, 2, 44, 26, 17, 14]));
AdjacentWilayas.push(new Wilaya(39, [30, 7, 40, 12]));
AdjacentWilayas.push(new Wilaya(40, [39, 7, 5, 4, 12]));
AdjacentWilayas.push(new Wilaya(41, [12, 4, 24, 36]));
AdjacentWilayas.push(new Wilaya(42, [44, 2, 16, 9]));
AdjacentWilayas.push(new Wilaya(43, [5, 19, 18, 25, 4]));
AdjacentWilayas.push(new Wilaya(44, [38, 2, 42, 9, 26]));
AdjacentWilayas.push(new Wilaya(45, [13, 22, 32, 8]));
AdjacentWilayas.push(new Wilaya(46, [13, 22, 31]));
AdjacentWilayas.push(new Wilaya(47, [1, 32, 3, 17, 30, 11]));
AdjacentWilayas.push(new Wilaya(48, [29, 27, 2, 38, 14]));

// Print result
// console.log(AdjacentWilayas);
fs.writeFileSync(`${__dirname}/result.json`, JSON.stringify(AdjacentWilayas));
