function solve(cars) {
    function getCarsByBrand(brand) {
        let filteredCars = cars.filter(car => car.brand == brand);
        return filteredCars;
    }

    function addCar(id, brand, model, year, price, inStock) {
        let newCar = {id, brand, model, year, price, inStock}
        cars.push(newCar);
        return cars;
    }

    function getCarById(id) {
        let filteredCarById = cars.find(car => car.id === id);
        if(filteredCarById)
        {
            return filteredCarById;
        }
        else
        {
            return `Car with ID ${id} not found`;
        }
    }

    function removeCarById(id) {
        const initialLegth = cars.length;
        cars = cars.filter(car => car.id !== id);
        
        if(initialLegth == cars.length)
        {
            return `Car with ID ${id} not found`;
        }
        else
        {
            return cars;
        }
    }

    function updateCarPrice(id, newPrice) {
        const searchedCarToBeUpdated = cars.find(car => car.id === id);

        if(searchedCarToBeUpdated)
        {
            searchedCarToBeUpdated.price = newPrice;
            return cars;
        }
        else
        {
            return `Car with ID ${id} not found`;
        }
    }

    function updateCarStock(id, inStock) {
        const searchedCarToBeUpdated = cars.find(car => car.id === id);

        if(searchedCarToBeUpdated)
        {
            searchedCarToBeUpdated.inStock = inStock;
            return cars;
        }
        else
        {
            return `Car with ID ${id} not found`;
        }
    }

    return {
        getCarsByBrand,
        addCar,
        getCarById,
        removeCarById,
        updateCarPrice,
        updateCarStock
    };
}

let cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020, price: 20000, inStock: true },
    { id: 2, brand: "Honda", model: "Civic", year: 2019, price: 22000, inStock: true },
    { id: 3, brand: "Ford", model: "Mustang", year: 2021, price: 35000, inStock: false }
  ];

  const dealership = solve(cars);
  //console.log(JSON.stringify(dealership.getCarsByBrand("Toyota")));
  //console.log(JSON.stringify(dealership.addCar(4, "Tesla", "Model S", 2022, 80000, true)));
  //console.log(JSON.stringify(dealership.getCarById(2)));
  //console.log(JSON.stringify(dealership.removeCarById(3)));
  //console.log(JSON.stringify(dealership.updateCarPrice(1, 85000)));
  //console.log(JSON.stringify(dealership.updateCarStock(1, true)));
  
  
  
  
  
  
