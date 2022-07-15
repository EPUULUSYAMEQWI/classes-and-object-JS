class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit;
        this.quantity=quantity;
        this.fruitPriceList={"Orange":30, "Pineapple":60,"Grapes":50};
        this.getCost=function(){
            return`${quantity} ${fruit} for KES ${quantity*this.fruitPriceList.Orange}`
        }
    }
}

var kioskOne=new KioskCalc("Orange",2);
console.log(kioskOne.getCost()); 

function calculateFruitCost(fruitName,quantity){
    const fruits={
        orange:50.00,
        mango:20.00,
        apple:70.00,
        Avocado:35.00

    }
    for( let i in fruits){
        fruitName=fruits[i]
        totalPrice=fruitName*quantity
        console.log(`The total price of ${quantity} ${i} is ${totalPrice}` )
    }

    }

calculateFruitCost(['orange'],7)

