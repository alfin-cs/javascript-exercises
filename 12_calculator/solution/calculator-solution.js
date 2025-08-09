
let list=document.querySelector("ul")

let input=document.querySelector("input")
let button1=document.querySelector("button")
button1.addEventListener("click",()=>{
  let text=input.value
  let row=document.createElement("li")
  let span=document.createElement("span")
  let del=document.createElement("button")
  list.appendChild(row)
  row.appendChild(span)
  row.appendChild(del)
  span.textContent=text
  del.textContent="delete"
  del.onclick=()=>{
    row.remove()
  }


  input.value=""
  input.focus()
}
)