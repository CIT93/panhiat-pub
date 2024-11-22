import {FORM, TBL} from "./global.js";
import { cfpData, saveLS } from "./storage.js";

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0)
  const tableRef = document.getElementById("table-id");
  let newRow = tableRef.insertRow(tableRef.rows.length);
  let newCell = newRow.insertCell(0);
  let newCell_1 = newRow.insertCell(0);
  let newCell_2 = newRow.insertCell(0);
  let newCell_3 = newRow.insertCell(0);
  let newCell_4 = newRow.insertCell(0);
  let newLabl = document.createTextNode(`Average Footprint`);
  let newText = document.createTextNode(`${Math.floor(reduceTotal / data.length)}`);
  newCell_1.appendChild(newLabl);
  newCell.appendChild(newText);
}

const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Food", "Footprint", "Action"];
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
  saveLS(data);
  renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
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
    FORM[1].value = obj.first;
    FORM[2].value = obj.Last;
    FORM[3].value = obj.houseMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.foodChoice;
    onUpdate(index, data);
  });
  return td;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  cfpData.forEach( (obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"]
    
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);

      })  
     
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(data);
  }
}

export { renderTbl };