#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar

let myPin = 1126;

let userId = await inquirer.prompt(
   [
    {
        name:"user-ID",
        type:"string",
        message:"enter your user ID"
    }
   ]
)

let pinAnswer =  await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin ",
        type:"number"
    },
]
);

if(pinAnswer.pin === myPin){
     
    console.log("correct pin code !!!..");

    let accType = await inquirer.prompt(
        {
            name:"account_type",
            type:"list",
            choices:["saving","current"],
            message:"select account type",
        }
    );

   if( accType.account_type == "current" || accType.account_type == "saving"){

    let operationAns= await inquirer.prompt(
        [
          {
              name:"operation",
              message:"please select option ",
              type:"list",
              choices:["withdraw", "check blance"]
          }
        ]
      );
         console.log(operationAns);
  
      if( operationAns.operation === "withdraw")
      {
  
          let amountAns = await inquirer.prompt(
              [
                  {
                      name:"amount",
                      message:"",
                      type:"list",
                      choices:["1000","2000","3000","4000","other Amount"]
                  
                  }
              ]
          );
  
          myBalance -= amountAns.amount;
  
          console.log(`your remaining balance is : ${myBalance}`);
      }

      else if (operationAns.operation === "check balance"){
          console.log("your balance is : " + myBalance);
      }
   }
}
else{

    console.log("incorrect pin code.please enter correct pin.");
}

