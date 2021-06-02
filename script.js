async function populateData() {
    const productResponse = await fetch('/data/product-response.json');
    const products = await productResponse.json();
    const stockResponse = await fetch('/data/stock-response.json');
    const stocks = await stockResponse.json();

    let tableData = [];



    // create table data
    if (stocks.physicalWarehouses) {
        for (let warehouse in stocks.physicalWarehouses) {
            let physicalWarehouses = stocks.physicalWarehouses[warehouse];
            for (var warehouseKey in physicalWarehouses) {
                let brandsObj = physicalWarehouses[warehouseKey];
                for (var brandKey in brandsObj) {
                    // Loop through any SKU objects to build table data
                    for (var sku in brandsObj[brandKey].skus) {

                        
                        console.log(sku)


                        tableData.push({
                            sku: sku,
                            warehouse: warehouse,
                            brand: brandKey,
                            skuDescription: products[sku].name,
                            availableQuantity: brandsObj[brandKey].skus[sku].availableQuantity,
                            physicalQuantity: brandsObj[brandKey].skus[sku].physicalQuantity
                        });
                    }
                }
            }
        }
    }

    // create table
    if (tableData.length > 0) {
        let table = document.getElementById('myTable');

        for (let i = 0; i < tableData.length; i++) {

            let row = `<tr>
                        <td>${tableData[i].sku}</td>
                        <td>${tableData[i].warehouse}</td>
                        <td>${tableData[i].brand}</td>
                        <td>${tableData[i].skuDescription}</td>
                        <td>${tableData[i].availableQuantity}</td>
                        <td>${tableData[i].physicalQuantity}</td>
                    </tr>`

            table.innerHTML += row
        }
    }
}



populateData()
        

