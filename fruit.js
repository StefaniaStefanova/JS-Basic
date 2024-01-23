function solve(type, weight, price) {
    const pricepergram = price / 1000;
    const totalprice = weight * pricepergram;
    console.log(`I need $${totalprice.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${type}.`);
}