const coffeeShop = {
    beans: 40,
    money: 100,
    drinkRequirements: {
      latte: { beanRequirement: 10,price: 5},
      americano: { beanRequirement: 10,price: 5},
      doubleShot: { beanRequirement: 10,price: 5},
      frenchPress: { beanRequirement: 12,price: 6},
    },

    //6 + 6.1
    makeDrink: function (drinkType) {
                if (this.drinkRequirements[drinkType] == undefined)
                {
                  alert("sorry,we don't make "+drinkType)
                }
                else if(this.beans - this.drinkRequirements[drinkType].beanRequirement >= 0 )
                {
                    this.beans -= this.drinkRequirements[drinkType].beanRequirement
                    
                }
                else
                {
                    alert("sorry, we are all out of beans")
                   
                }
            
      },
      
      //extension 1
      buyBeans: function(numBeans)
      {
        if(this.money - (numBeans * 2) >= 0)
        {
        this.money -= (numBeans * 2)
        this.beans += numBeans
        }
        else
        {
          alert("no enough money to buy the amount of beans")
        }
      },

      //extension 2
      buyDrink: function(drinkType)
      {
        if(this.drinkRequirements[drinkType] == undefined)
        {
          alert("sorry,we don't make "+drinkType)
        }
        else
        {
          if(this.drinkRequirements[drinkType].beanRequirement <= this.beans)
          {
          this.money += this.drinkRequirements[drinkType].price
          this.makeDrink(drinkType)
          }
          else
          {
            alert("no enough beans to make the drink mate sorry")
          }
        }
      }

    }



  




  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  console.log(coffeeShop.beans)
  coffeeShop.buyBeans(20)
  coffeeShop.makeDrink("frenchPress") 
  console.log("beans: " + coffeeShop.beans + " money: " + coffeeShop.money)
  coffeeShop.buyDrink("frenchPress")
  console.log("beans: " + coffeeShop.beans + " money: " + coffeeShop.money)
  coffeeShop.buyDrink("frenchPress")