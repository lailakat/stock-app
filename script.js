// JSON DATA

const url = 'data/stock-response.json';

async function fetchResponse() {

    const response = await fetch(url)
    const data = await response.json()

    let dataArray = Object.values(data)
    
    
    for (values of dataArray) {

        let sku = values.sku;
        let physicalWarehouse = values.physicalWarehouse;
        let logicalWarehouse = values.logicalWarehouse;
        let skuDescription = values.skuDescription;
        let availableToSell = values.availableToSell;
        let physicalStock = values.physicalWarehouse;

        // let table = document.createElement("TABLE")
        // table.getel

        let table = document.getElementById('myTable')
        
        table.innerHTML += 
                `<tr>
                    <td>${sku}</td>
                    <td>${physicalWarehouse}</td>
                    <td>${logicalWarehouse}</td>
                    <td>${skuDescription}</td>
                    <td>${availableToSell}</td>
                    <td>${physicalStock}</td>
                    </tr>
                `
    }

}

fetchResponse()