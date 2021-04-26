
async function populateData() {

    const productResponse = await fetch('./data/product-response.json');
    
    const product = await productResponse.json()

    const stockResponse = await fetch('./data/stock-response.json');
    
    const stock = await stockResponse.json()

    // product filtering (name and sku)

    const products = Object.values(product)

     const productData = products.map(element => {

        const sku = element.sku
        const skuDescription = element.name

        return {
            sku,
            skuDescription
        }
    }) 



    // iterate over stock 

    const stocks = Object.entries(stock)

    const isObject = function(val) {
        if (val === null) {
            return false;
        } 
        return (typeof val === 'object')
    }

    const objProps = (obj) => {
        for (let val in obj) {       
             if (isObject(obj[val])) {
                 console.log(val, obj[val])
                 objProps(obj[val])           
            } else {
              //  console.log(val, obj[val])
            }
        }    
    }

    objProps(stock)

    // assign together



    


}

populateData()



















// async function populateData() {

//     


//     const newArray = []
//     newArray.push(data)

//     console.log(newArray[0].skus)

//     const values = newArray[0].skus

//     let table = document.getElementById('myTable');

//     for (let i = 0; i < values.length; i++) {
//         const id = values[i];

//         console.log(id)

//         let row = `<tr>
//             <td>${id}</td>
//             <td>${id}</td>
//             <td>${id}</td>
//             <td>${id}</td>
//             <td>${id}</td>
//             <td>${id}</td>
//         </tr>`


//     table.innerHTML += row

//     }

// }


// // learn about the


// populateData()
        
        

