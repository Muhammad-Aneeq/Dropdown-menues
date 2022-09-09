let mobile = [
   {
        company:"infinix",
        model:"hot 10",
        ram:4,
        rom : 16,
        price : 20000
    },
    {
        company:"infinix",
        model:"hot 11",
        ram:4,
        rom : 16,
        price : 22000
    },
    {
        company:"infinix",
        model:"hot 12",
        ram:4,
        rom : 20,
        price : 25000
    },
    {
        company:"samsung",
        model:"note 1",
        ram:4,
        rom : 20,
        price : 25000
    },
    {
        company:"samsung",
        model:"note 2",
        ram:4,
        rom : 22,
        price : 28000
    },
    {
        company:"samsung",
        model:"note 3",
        ram:6,
        rom : 22,
        price : 30000
    },
    {
        company:"iphone",
        model:"v10",
        ram:4,
        rom : 22,
        price : 28000
    },
    {
        company:"iphone",
        model:"v11",
        ram:4,
        rom : 22,
        price : 30000
    },
    {
        company:"iphone",
        model:"v12",
        ram:4,
        rom : 28,
        price : 35000
    },
]

let select1 = document.getElementById('mobilecompany');
let select2 = document.getElementById('mobilemodels');
let option = ''
let option2 = ''
let companyNames=mobile.map((value)=>{
    // console.log(value.company)
    return value.company
    
}) 
// console.log(companyNames)
let companyName=companyNames.filter((value,index)=>{
    // console.log(companyNames.indexOf(value)==index)
   return companyNames.indexOf(value)==index
})


let Company = companyName.map((value)=>{
    option += `<option>${value}</option>`
    select1.innerHTML=option 
    return value
})
console.log(Company)



// let Model=mobile.map((value)=>{
//  return value.model     
// })

// console.log(Model)
function show(){
    select2.disabled =false
     mobile.find((value) =>{
            option2 += `<option>${value.model}</option>`
            select2.innerHTML=option2
//    console.log(value )
     }) 
}