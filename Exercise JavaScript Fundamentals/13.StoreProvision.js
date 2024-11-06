function storeProvision(currentStockArray, orderArray)
{
    let store = {};

    for (let i = 0; i < currentStockArray.length; i+=2)
    {
        let productName = currentStockArray[i];
        let productQuantity = Number(currentStockArray[i+1]);

        store[productName] = productQuantity;
    }

    for (let i = 0; i < orderArray.length; i+=2)
    {
        let productName = orderArray[i];
        let productQuantity = Number(orderArray[i+1]);

        if (store.hasOwnProperty(productName))
        {
            store[productName] += productQuantity;
        }
        else
        {
            store[productName] = productQuantity;
        }
    }

    for (let product in store) 
    {
        console.log(`${product} -> ${store[product]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )