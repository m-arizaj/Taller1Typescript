import { dataCourses } from './data.js';
var seriesTbody = document.getElementById("series");
renderCoursesInTable(dataCourses);
calculateAndRenderAverage(dataCourses)
function renderCoursesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}

function calculateAndRenderAverage(series) {
    let totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
    let averageSeasons = totalSeasons / series.length;
  
    let trAverage = document.createElement("tr");
    trAverage.innerHTML = `<td colspan="3">Average Seasons:</td>
                           <td>${averageSeasons.toFixed(2)}</td>`;
    seriesTbody.appendChild(trAverage);
  }