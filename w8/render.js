const TBL = document.getElementById("tab-data");


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
  
    const td = document.createElement("td");
  
    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
  
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button")
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", function(e){
    console.log("hello from inside the del button");
    console.log(e)
    const row = data.obj;
    data.splice(index, 1)
    renderTbl(data); 
  })
  btnEdit.addEventListener("click", function(e) {
    const inputData = Foam[i];
    const newValue = inputData.value = "";
    const index = e.target.getAttribute(td); 
    index[index].value = newValue;
    renderTbl(data);
  })
  return td;
}

function renderTblBody(data, FORM) {
  const tBody = document.createElement("tbody");
  data.forEach(function(data, index){
    const tr = document.createElement("tr");
    console.log(index)
    for (const [key, value] of Object.entries(data)) {
      
      if (key !== "lastName" && key !== "houseHPts" && key !== "homeZPts") {
      console.log("built td")
      const td = document.createElement("td");
      td.textContent = value; // Set the text content to the value from the object
      tr.appendChild(td);
      }
    }
    const td = renderTblBtn(index, data, FORM);
    tr.appendChild(td);
    tBody.appendChild(tr);
  });
  return tBody; 
}
   
function renderTbl(data, FORM) {
    const table = renderTblHeading();
    const tBody = renderTblBody(data);
    table.appendChild(tBody);
    TBL.appendChild(table);
}
    
  export {renderTbl}

  


