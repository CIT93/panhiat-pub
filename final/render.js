import { choreData, TBL, FORM } from "./global.js";

function display(choreData) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  choreData.forEach(obj => {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Displaying Array of Objects`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on ${obj.first} and ${obj.last}`;
    const newP = document.createElement("p");
    newP.textContent = `Inputs of ${obj.day} and energy level: ${obj.level}`;
    newP.textContent += ` The energy score is ${obj.energy} to do ${obj.chore} and ${obj.kidsActivities}.`;

    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);

    const nH2 = document.createElement("h2");
    nH2.textContent = `Displaying form inputs`;
    const p = document.createElement("p");
    p.textContent = `User selected ${obj.day} and gave an energy level of ${obj.level}`;
    output.appendChild(nH2);
    output.appendChild(p);
  });
}


function renderTableHeading() {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id");

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = [
    "Name",
    "Energy Score",
    "Chore",
    "Kids Activities",
    "Action"
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
};


function renderTblBtn(obj, index, data) {
  const td = document.createElement("td");

  const bntEdit = document.createElement("button");
  bntEdit.textContent = "Edit";
  bntEdit.addEventListener("click", () => {
    FORM[1].value = obj.first;
    FORM[2].value = obj.last;
    FORM[3].value = obj.day;
    FORM[4].value = obj.energy;
    onUpdate(index, data);
  });

  const bntDel = document.createElement("button");
  bntDel.textContent = "Delete";
  bntDel.addEventListener("click", () => {
    onUpdate(index, data);
  });

  td.appendChild(bntEdit);
  td.appendChild(bntDel);
  return td;
}


function renderTableData(data) {
  const tbody = document.createElement("tbody");

  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    ["first", "energy", "chore", "kidsActivities"].forEach(key => {
      if (obj[key]) {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      }
    });

    const actionTd = renderTblBtn(obj, index, data);
    tr.appendChild(actionTd);
    tbody.appendChild(tr);
  });

  return tbody;
}


const renderTbl = data => {
  TBL.innerHTML = "";

  if (data.length !== 0) {
    const table = renderTableHeading();
    const tbody = renderTableData(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
};

export { display, renderTbl };
