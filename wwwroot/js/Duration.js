function convertToTable() {
    const container = document.getElementById("tableContainer");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Create header cells
    const headerCells = ["Date", "Agents Chatting Duration", "Count", "Duration"];
    headerCells.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    Object.entries(data.records).forEach(([date, record]) => {
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        dateCell.textContent = date;
        row.appendChild(dateCell);

        const agentsChattingDurationCell = document.createElement("td");
        agentsChattingDurationCell.textContent = record.agents_chatting_duration;
        row.appendChild(agentsChattingDurationCell);

        const countCell = document.createElement("td");
        countCell.textContent = record.count;
        row.appendChild(countCell);

        const durationCell = document.createElement("td");
        durationCell.textContent = record.duration;
        row.appendChild(durationCell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);
}
