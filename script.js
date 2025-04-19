

function insert_Row() {
    //Write your code here
    const table = document.getElementById("sampleTable");

    // Create a new row
    const newRow = table.insertRow(0); // 0 means insert at the top

    // Create two new cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the text for each cell
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";




  
  
}