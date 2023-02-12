
// deposit button event 
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit');
    const deposit = depositField.value ;
    
    const currentDeposit = parseFloat(deposit);
    
    
// console.log( depositInBank);


depositField.value = ''
if(isNaN(currentDeposit)){
    alert ('please enter your deposit amount')
    return ;

}

    const depositIn =document.getElementById('deposit-bank') ;
    const depositInBank = depositIn.innerText

    const currentDepositInBank= parseFloat(depositInBank);

    const totalDeposit= currentDeposit + currentDepositInBank;

    depositIn.innerText = totalDeposit ; 


    const balance=document.getElementById('balance');
     const balanceBank = balance.innerText;
     const currentBalance = parseFloat(balanceBank);

     const totalBalance = currentBalance + currentDeposit ;

     balance.innerText=totalBalance;


    

})

// withdraw button event 

document.getElementById('withdraw-btn').addEventListener('click',function(){
const withdraw = document.getElementById('withdraw')
const withdrawField = withdraw.value ;
const currentWithdraw = parseFloat(withdrawField)


withdraw.value = ''

if(isNaN(currentWithdraw)){
    alert ('please enter your withdraw amount')
    return ;

}

const withdrawIn = document.getElementById('withdraw-bank')
const withdrawBank = withdrawIn.innerText
const currentWithdrawBank =parseFloat(withdrawBank)

const totalWithdraw = currentWithdraw + currentWithdrawBank 



const balance=document.getElementById('balance');
     const balanceBank = balance.innerText;
     const currentBalance = parseFloat(balanceBank);

     const totalBalance = currentBalance - currentWithdraw ;

     if(currentBalance >= currentWithdraw ) {
         balance.innerText=totalBalance;
         withdrawIn.innerText = totalWithdraw ;
     }
    
     else {
           alert ('you do not have enough money')
     }

    

})