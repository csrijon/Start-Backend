let gendata = document.querySelector("#gen-data")

gendata.addEventListener("click",() => {
    let res = fetch("/generate")
    let data = res.json()
    console.log(data)
}) 

let remdata = document.querySelector("#rem-data");

remdata.addEventListener("click",() => {
    let res = fetch("/remove")
    let data = res.json()
    console.log(data)
})