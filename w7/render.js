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
  
  function renderTbl(data) {
    const table = renderTblHeading();
    //start coding challenge for tbody.
    const tBody = document.createElement("tbody");
    const tr = document.createElement("tr");
    //const trTextArr = ["pan", 3, "large", 20, "Edit", "Del"];
    // const trTextArr = 
    
    data.forEach(function (dataObj) {
      const tr = document.createElement("tr")
      const tdName = document.createElement("td");
      tdName.textContent = dataObj.firstName;
      const tdTotal = document.createElement("td");
      tdTotal.textContent = dataObj.cfpTotal;
      tr.appendChild(tdName);
      tr.appendChild(tdTotal);
      tBody.appendChild(tr);
      // const trTextArr = ["firstName", "lastName", "member", "size", "houseHPTs", "HomeZPts"];
      
      // const trTextArr = datObj
      // trTextArr.forEach(function(text) {
      //   tdBody.textContent = dataObj[text];
      //   tr.appendChild(td);
      // })

   
      
    });
  
  
    const td = document.createElement("td");
    // const btnEdit = document.createElement("button");
    // const btnDel = document.createElement("button");
    // btnEdit.textContent = "Edit";
    // btnDel.textContent = "Del";
    // td.appendChild(btnEdit);
    // td.appendChild(btnDel);
    tr.appendChild(td);
    tBody.appendChild(tr);
    table.appendChild(tBody);
    TBL.appendChild(table);
  
  }

  export { renderTbl}