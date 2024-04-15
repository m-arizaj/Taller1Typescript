import { Serie } from './Serie.js';
import { dataCourses } from './data.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;

const tarjetaContainer = document.getElementById("tarjetaContainer")!;

renderCoursesInTable(dataCourses);
calculateAndRenderAverage(dataCourses);

function renderCoursesInTable(series: Serie[]): void {
    series.forEach(c => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${c.id}</td>
                            <td><a href="#${c.name}">${c.name}</a></td>
                             <td>${c.channel}</td>
                             <td>${c.seasons}</td>`;
      seriesTbody.appendChild(trElement);
  
      trElement.addEventListener("click", () => mostrarImagen(c));
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

function mostrarImagen(serie: Serie) {
    const tarjetaHTML = `
      <div class="card">
        <div class="card-body">
         <img src= "${serie.image}" style="height: 300px; width: 500px;>
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text"> ${serie.description}</p>
          <a href="${serie.link}"> ${serie.link} </a>
        </div>
      </div>
    `;
  
    tarjetaContainer.innerHTML = tarjetaHTML;
  }
