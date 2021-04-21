// JSON DATA

async function fetchRequest() {

    const response = await fetch ("data/stock-request.json")
    const keys = await response.json()

    const response2 = await fetch ("data/stock-response.json")
    const values = await response2.json()

    

    let table = document.getElementById('myTable')

    for (let value in keys.skus) {

        let obj = keys.skus[value]
    
        // map obj keys with obj values here somehow 
        
        
        console.log(values.UK1.BOOHOO)

        let row = `<tr>
                        <td>${obj}</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>`

            table.innerHTML += row

        console.log(obj)
    }

}



fetchRequest()

