function debitMoney(accBal, withdrawlAmount){
    let newAccBal = accBal - withdrawlAmount;
    console.log(`You are debiting ${withdrawlAmount} from the account`);
    console.log("Balance after Deduction:", newAccBal);

}


let Name = "Sparsh Yadav";
let accBal = 100;
let accType = "Savings";
const accNum = 12216519;
let withdrawlAmount = 20;

console.log("Your current Account Balance is:", accBal);
debitMoney(accBal, withdrawlAmount);
