var myArray = [
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    }, 
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '30',
        'physicalStock': 'X'
    }, 
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    }, 
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    }, 
    {      'sku': 'AAA12345-123-123',
    'physicalWarehouse': 'Wellingborough',
    'logicalWarehouse': 'Coast',
    'skuDescription': 'A pretty dress',
    'availableToSell': '50',
    'physicalStock': 'X'
    },
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    },
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    },
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    },
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    },
    {
        'sku': 'AAA12345-123-123',
        'physicalWarehouse': 'Wellingborough',
        'logicalWarehouse': 'Coast',
        'skuDescription': 'A pretty dress',
        'availableToSell': '50',
        'physicalStock': 'X'
    }
]

buildTable(myArray)

function buildTable(data) {
    
    let table = document.getElementById('myTable');
    

    for (let i = 0; i < data.length; i++ ) {
        let row = `<tr>
                        <td>${data[i].sku}</td>
                        <td>${data[i].physicalWarehouse}</td>
                        <td>${data[i].logicalWarehouse}</td>
                        <td>${data[i].skuDescription}</td>
                        <td>${data[i].availableToSell}</td>
                        <td>${data[i].physicalStock}</td>
                    </tr>`

                    table.innerHTML += row
    }
}




