import { dataCourses } from './data.js';
var seriesTbody = document.getElementById("series");
renderCoursesInTable(dataCourses);
calculateAndRenderAverage(dataCourses)
function renderCoursesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                          <td><a href=\"#").concat(c.name, "\">").concat(c.name, "</a></td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function () { return mostrarImagen(c); });
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

  function mostrarImagen(serie) {
    var tarjetaHTML = "\n    <div class=\"card\">\n      <div class=\"card-body\">\n       <img src= \"".concat(serie.image, "\" style=\"height: 300px; width: 500px;>\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\"> ").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\"> ").concat(serie.link, " </a>\n      </div>\n    </div>\n  ");
    tarjetaContainer.innerHTML = tarjetaHTML;
}