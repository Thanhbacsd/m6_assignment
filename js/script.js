let items = ['ID: ', 'Name: ', 'Extension: ', 'Email: ', 'Department: ', 'id', 'name', 'ext', 'email', 'department']
const $ = (id) => document.getElementById(id)
let empAdd = () => {
    let err = 0
    for(let i = items.length/2; i < items.length; i++){
        if($(items[i]).value == ''){err = 1}           //check the fields filled
    }
    if(err == 0) {for(let i = 0; i < items.length/2; i++){
        console.log(items[i] + $(items[i + items.length/2]).value)
    }}
    else {alert('Please fill all of the fields before submit!')}
}
$('listener').addEventListener('dblclick', () => empAdd())
$('submit').addEventListener('click', () => empAdd())
window.addEventListener("load", () => {console.log("The page is fully loaded")});