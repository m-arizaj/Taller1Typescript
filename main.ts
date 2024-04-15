import { Serie } from './Serie.js';
import { dataCourses } from './data.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;

renderCoursesInTable(dataCourses);
calculateAndRenderAverage(dataCourses);

function renderCoursesInTable(series: Serie[]): void {
    let totalSeasons = 0;
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                               <td>${c.name}</td>
                               <td>${c.channel}</td>
                               <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        totalSeasons += c.seasons;
    });
}

function calculateAndRenderAverage(series: Serie[]): void {
    let totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
    let averageSeasons = totalSeasons / series.length;

    let trAverage = document.createElement("tr");
    trAverage.innerHTML = `<td colspan="4">Average Seasons:</td>
                           <td>${averageSeasons.toFixed(2)}</td>`;
    seriesTbody.appendChild(trAverage);
}
