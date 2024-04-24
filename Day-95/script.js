// script.js
document.addEventListener("DOMContentLoaded", () => {
    const csvFileInput = document.getElementById("csvFileInput");
    const exportButton = document.getElementById("exportButton");
    const dataTable = document.getElementById("dataTable");
  
    csvFileInput.addEventListener("change", handleFileUpload);
    exportButton.addEventListener("click", exportData);
  
    function handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split("\n").map((row) => row.split(","));
  
        renderTable(rows);
      };
  
      reader.readAsText(file);
    }
  
    function renderTable(rows) {
      dataTable.innerHTML = "";
  
      for (let i = 0; i < rows.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < rows[i].length; j++) {
          let td = document.createElement("td");
          td.textContent = rows[i][j];
          tr.appendChild(td);
        }
        dataTable.appendChild(tr);
      }
    }
  
    function exportData() {
      const rows = document.querySelectorAll("#dataTable tr");
      let csvContent = "";
  
      rows.forEach((row) => {
        let cols = row.querySelectorAll("td");
        let rowContent = "";
  
        cols.forEach((col) => {
          rowContent += col.textContent + ",";
        });
  
        csvContent += rowContent.slice(0, -1) + "\n";
      });
  
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "exported_data.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
  });
  