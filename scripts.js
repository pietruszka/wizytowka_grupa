const app = document.getElementById("root");
const projects_container = document.createElement("div");
projects_container.setAttribute("class", "projects_container");
app.appendChild(projects_container);
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://wakatime.com/api/v1/users/current/projects", true);
request.setRequestHeader(
  "Authorization",
  "Basic " + btoa("c2a4e8f7-04c1-4a5d-b584-83faa5d38507")
);
request.onload = function () {
    // Begin accessing JSON data here
    var mydata = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        mydata.data.forEach(project => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            const h1 = document.createElement('h1');
            h1.textContent = project.name;
            projects_container.appendChild(card);
            card.appendChild(h1);
        }); 
    } else {
        console.log('error');
    }    
}



var connection = new XMLHttpRequest();
connection.open(
    "GET",
    "https://wakatime.com/share/@75e55da2-cc8d-4880-8b09-4d169a5c13bc/9397f500-9877-4faf-9f1f-507d37a1471d.json",
    true
);
connection.setRequestHeader(
    "Authorization",
    "Basic " + btoa("c2a4e8f7-04c1-4a5d-b584-83faa5d38507")
);
connection.onload = function () {
    // Begin accessing JSON data here
    var jsonConverted = JSON.parse(this.response);
    console.log(jsonConverted.data[0].name);
    console.log(jsonConverted);
    data = jsonConverted["data"];
    var setdata = { datasets: [{ data: [data[0]["percent"], data[1]["percent"], data[2]["percent"], data[3]["percent"]], backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"], label: "My dataset" }], labels: [data[0]["name"], data[1]["name"], data[2]["name"], data[3]["name"]] }; // for legend
    var ctx = document.getElementById("myChart");
    new Chart(ctx, {
      data: setdata,
      type: "polarArea",
      options: {
        title: {
          display: true,
          fontFamily: "Roboto, sans-serif",
          fontSize: 40,
          text: "Used technologies",
          fontColor: '#000',
          padding: 10
        }
      }
    });
}   
connection.send();