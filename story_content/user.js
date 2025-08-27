window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script2 = function()
{
  var player = GetPlayer();
var output = `
  <html>
  <head>
    <title>Placement Summary</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      h1 { color: #0D1B2A; }
      table { border-collapse: collapse; width: 100%; margin-top: 20px; }
      th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
      th { background-color: #1B9AAA; color: white; }
      tr:nth-child(even) { background-color: #F1F1F1; }

      td.name { width: 20%; }
      td.placement { width: 15%; }
      td.notes {
        width: 35%;
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal;
      }
      td.readiness, td.risk, td.impact, td.mobility { width: 10%; }
    </style>
  </head>
  <body>
    <h1>Placement Summary</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Placement</th>
        <th>Justification</th>
        <th>Readiness</th>
        <th>Risk</th>
        <th>Impact</th>
        <th>Mobility</th>
      </tr>
`;

for (let i = 1; i <= 20; i++) {
  let name = player.GetVar("TM" + i);
  if (name.trim() !== "") {
    let box = player.GetVar("TM" + i + "_Box") || "";
    let notes = player.GetVar("TM" + i + "_Justification") || "";
    let readiness = player.GetVar("TM" + i + "_RL") || "";
    let risk = player.GetVar("TM" + i + "_Risk") || "";
    let impact = player.GetVar("TM" + i + "_Impact") || "";
    let mobility = player.GetVar("TM" + i + "_Mobility") || "";

    output += `
      <tr>
        <td class="name">${name}</td>
        <td class="placement">${box}</td>
        <td class="notes">${notes}</td>
        <td class="readiness">${readiness}</td>
        <td class="risk">${risk}</td>
        <td class="impact">${impact}</td>
        <td class="mobility">${mobility}</td>
      </tr>
    `;
  }
}

output += `
    </table>
  </body>
  </html>
`;

var win = window.open("", "Team Summary", "width=900,height=700");
win.document.write(output);
win.document.close();
win.focus();
setTimeout(function() {
  win.print();
}, 500);
}

};
