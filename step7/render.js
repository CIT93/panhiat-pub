import { choreData, TBL, FORM } from "./global.js";

function display(choreData) {
    const output = document.getElementById("output");

    for (let obj of choreData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Displaying Array of obj`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on ${obj.first} and ${obj.last} `;
    const newP = document.createElement("p"); 
    newP.textContent = `Inputs of ${obj.day} and energy level: ${obj.level}`;
    newP.textContent += ` The energy score is ${obj.energy} to do ${obj.chore} and ${obj.kidsActivities}.`;
    output.appendChild(newH2)
    output.appendChild(newH3)
    output.appendChild(newP)


    const nH2 = document.createElement("h2");
    nH2.textContent = `Displaying form inputs`;
    const p = document.createElement("p");
    p.textContent = `User selected ${obj.day} and gave a energy level of ${obj.level}`;
    output.appendChild(nH2);
    output.appendChild(p);
    }
    
    return output
}


function renderTableHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = [
      "Name",
      "Energy Score",
      "Chore",
      "Kids Activities",
      "Action",
    ];
  
    headingTextArr.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
  
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }


const onUpdate = (index, data) => {
    data.splice(index, 1);
    renderTbl(data);
}
  
function renderTblBtn(obj, index, data) {
    const td = document.createElement("td");
    const bntEdit = document.createElement("button");
    const bntDel = document.createElement("button");
    bntEdit.textContent = "Edit";
    bntDel.textContent = "Delete";
    td.appendChild(bntEdit);
    td.appendChild(bntDel);
    bntDel.addEventListener(`click`, e => {
      onUpdate(index, data);
    })
  
    bntEdit.addEventListener(`click`, e => {
      FORM[1].value = obj.firstname;
      FORM[2].value = obj.lastname;
      FORM[3].value = obj.weekDay;
      FORM[4].value = obj.energy;
      onUpdate(index, data);
    });
    return td;
  }

function renderTableData(data) {
  TBL.innerHTML = "";
  const table = renderTableHeading();
  const tbody = document.createElement("tbody");

  data.forEach(function(obj, index) {
      console.log(index);
      const tr = document.createElement("tr");

      // Loop through each key-value pair in obj
      for (const [key, value] of Object.entries(obj)) {
          console.log(`key ${key} value ${value}`);

          // Check if key matches any of the required fields
          if (key === "first" || key === "energy" || key === "chore" || key === "kidsActivities") {
              const td = document.createElement("td");
              td.textContent = value;
              tr.appendChild(td);
          }
      }

      // Create the Action buttons cell
      const td = renderTblBtn(obj, index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
  });

  
  table.appendChild(tbody);
  TBL.appendChild(table);
  return tbody;
}
   

const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length !== 0) {
      //const table = renderTableHeading();
      // const table = 
      const tbody = renderTableData(data);
//table.appendChild(tbody);
      TBL.appendChild(table);
    }
    
  }
  

export {display, renderTbl}