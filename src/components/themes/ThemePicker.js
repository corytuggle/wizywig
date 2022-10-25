export const ThemePicker = (event) => {

//                          0         1         2         3     
  const wizywigHome =   ['826F98', 'A59CBA', '375397', 'F6F7F5']
  const oceanSpray =    ['104666', '5EB3DC', 'D4DBE7', '121B26']
  const pumpkinPatch =  ['F4F5F0', '5C7753', 'F47F38', '0B0C0D']
  const rockQuarry =    ['59544B', '89938B', 'DABBA5', '2D2E2C']
  const fruitSalad =    ['8CB61D', '3B7855', 'C23D43', 'E5FFAE']
  const wildFlowers =   ['7AB598', 'AD658E', '2D1838', 'E2BC79']

  var pageBg = document.getElementById("page");
  var editorBox = document.getElementById("container");
  // var progressBar = document.getElementById("progress-bar");
  // var progressBarData = document.getElementById("progress-bar").getElementsByClassName("probar::before")[0];
  var editorBg = document.getElementById("container").getElementsByClassName("ql-editor")[0];
  var editorTxtCol = document.getElementById("container").getElementsByClassName("ql-editor")[0];
  var countBG = document.getElementById("counter");
  var countTxtCol = document.getElementById("counter");

  var id = event.target.getAttribute('id')
  if (id === 'wizywig-home') {
    pageBg.style.backgroundColor = "#" + wizywigHome[0];
    editorBox.style.backgroundColor = "#" + wizywigHome[1];
    // progressBar.style.backgroundColor = "#" + wizywigHome[0];
    // progressBarData.style.backgroundColor = "#" + wizywigHome[0];
    editorBg.style.backgroundColor = "#" + wizywigHome[2];
    countBG.style.backgroundColor = "#" + wizywigHome[2];
    editorTxtCol.style.color = "#" + wizywigHome[3];
    countTxtCol.style.color = "#" + wizywigHome[3];

  }
  else if (id === 'ocean-spray') {
    pageBg.style.backgroundColor = "#" + oceanSpray[0];
    editorBox.style.backgroundColor = "#" + oceanSpray[1];
    // progressBar.style.backgroundColor = "#" + oceanSpray[0];
    // progressBarData.style.backgroundColor = "#" + oceanSpray[0];
    editorBg.style.backgroundColor = "#" + oceanSpray[2];
    countBG.style.backgroundColor = "#" + oceanSpray[2];
    editorTxtCol.style.color = "#" + oceanSpray[3];
    countTxtCol.style.color = "#" + oceanSpray[3];
  }
  else if (id === 'pumpkin-patch') {
    pageBg.style.backgroundColor = "#" + pumpkinPatch[0];
    editorBox.style.backgroundColor = "#" + pumpkinPatch[1];
    // progressBar.style.backgroundColor = "#" + pumpkinPatch[0];
    // progressBarData.style.backgroundColor = "#" + pumpkinPatch[0];
    editorBg.style.backgroundColor = "#" + pumpkinPatch[2];
    countBG.style.backgroundColor = "#" + pumpkinPatch[2];
    editorTxtCol.style.color = "#" + pumpkinPatch[3];
    countTxtCol.style.color = "#" + pumpkinPatch[3];
  }
  else if (id === 'rock-quarry') {
    pageBg.style.backgroundColor = "#" + rockQuarry[0];
    editorBox.style.backgroundColor = "#" + rockQuarry[1];
    // progressBar.style.backgroundColor = "#" + rockQuarry[0];
    // progressBarData.style.backgroundColor = "#" + rockQuarry[0];
    editorBg.style.backgroundColor = "#" + rockQuarry[2];
    countBG.style.backgroundColor = "#" + rockQuarry[2];
    editorTxtCol.style.color = "#" + rockQuarry[3];
    countTxtCol.style.color = "#" + rockQuarry[3];
  }
  else if (id === 'fruit-salad') {
    pageBg.style.backgroundColor = "#" + fruitSalad[0];
    editorBox.style.backgroundColor = "#" + fruitSalad[1];
    // progressBar.style.backgroundColor = "#" + fruitSalad[0];
    // progressBarData.style.backgroundColor = "#" + fruitSalad[0];
    editorBg.style.backgroundColor = "#" + fruitSalad[2];
    countBG.style.backgroundColor = "#" + fruitSalad[2];
    editorTxtCol.style.color = "#" + fruitSalad[3];
    countTxtCol.style.color = "#" + fruitSalad[3];
  }
  else if (id === 'wild-flowers') {
    pageBg.style.backgroundColor = "#" + wildFlowers[0];
    editorBox.style.backgroundColor = "#" + wildFlowers[1];
    // progressBar.style.backgroundColor = "#" + wildFlowers[0];
    // progressBarData.style.backgroundColor = "#" + wildFlowers[0];
    editorBg.style.backgroundColor = "#" + wildFlowers[2];
    countBG.style.backgroundColor = "#" + wildFlowers[2];
    editorTxtCol.style.color = "#" + wildFlowers[3];
    countTxtCol.style.color = "#" + wildFlowers[3];
  }
}
