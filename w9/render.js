import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";


function renderTblHeading(data) {
  TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = [
      "Name",
      "Household",
      "HouseSize",
      "Footprint",
      "Action",
    ];  
    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
  
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

function onUpdate(index, data){
  data.splice(index, 1)
  saveLS(data);
  renderTbl(data); 
}

function renderTblBtn(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button")
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function(e){
    onUpdate(index, data);
  })
  btnEdit.addEventListener("click", function(e) {
    console.log(FORM);
    FORM[1].value = obj.firstName;
    FORM[2].value = obj.lastName;
    FORM[3].value = obj.members;
    FORM[4].value = obj.size;
    onUpdate(index, data)
  })
  return td;
}

function renderTblBody(data) {
  const tBody = document.createElement("tbody");
  data.forEach(function(obj, index){
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      
      if (key !== "lastName" && key !== "houseHPts" && key !== "homeZPts") {
      const td = document.createElement("td");
      td.textContent = value; // Set the text content to the value from the object
      tr.appendChild(td);
      }
    }
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tBody.appendChild(tr);
  });
  return tBody; 
}
   
function renderTbl(data) {
  TBL.innerHTML = "";
  if(data.length !== 0) {
    const table = renderTblHeading();
    const tBody = renderTblBody(data);
    table.appendChild(tBody);
    TBL.appendChild(table);
  } 
    
}
    
  export {renderTbl}

  


