const objectToCsv = function (data) {

    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    for (const row of data) {
        const values = headers.map(header => {
            const val = row[header]
            return `"${val}"`;
        });
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
};

const data =[prompt("Enter the name: "),prompt("Enter the last name:"),prompt("Enter the AGE: ")]
const csvData = objectToCsv(data);
console.log(csvData); 
