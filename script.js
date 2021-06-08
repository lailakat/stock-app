async function populateData() {
    const productResponse = await fetch("/data/product-response.json");
    const products = await productResponse.json();
    const stockResponse = await fetch("/data/stock-response.json");
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
              tableData.push({
                sku: sku,
                warehouse: warehouse,
                brand: brandKey,
                skuDescription: products[sku].name,
                availableQuantity:
                  brandsObj[brandKey].skus[sku].availableQuantity,
                physicalQuantity: brandsObj[brandKey].skus[sku].physicalQuantity,
              });
            }
          }
        }
      }
    }
    // create table
    if (tableData.length > 0) {
      let table = document.getElementById("myTable");
      const tablesCreation = (tables) => {
        table.innerHTML = "";
        for (let i = 0; i < tables.length; i++) {
          let row = `<tr>
                              <td>${tables[i].sku}</td>
                              <td>${tables[i].warehouse}</td>
                              <td>${tables[i].brand}</td>
                              <td>${tables[i].skuDescription}</td>
                              <td>${tables[i].availableQuantity}</td>
                              <td>${tables[i].physicalQuantity}</td>
                          </tr>`;
          table.innerHTML += row;
        }
      };
      // filter search table
      const searchBar = document.getElementById("myInput");
      searchBar.addEventListener("keyup", (e) => {
        const searchString = e.target.value;
        const filteredCharacters = tableData.filter((character) => {
          return character.sku.includes(searchString);
        });
        tablesCreation(filteredCharacters);
      });
      tablesCreation(tableData);
    }
  }
  
  populateData();
        

