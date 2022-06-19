const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const pnumberInput = document.querySelector('#pnumber')
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', DisplayApointments)

function DisplayApointments()
{
  axios.get("https://crudcrud.com/api/e8adbcd57acc460ebd939c07dfe006d2/appoitments")
  .then((res) => { 
  var html = ""
  for(var i=0;i<res.data.length;i++)
  {
    html+='<li>' + res.data[i].Name +" - " + res.data[i].Email +" - " + res.data[i].PhoneNumber + ' <button onclick="deleteRow('+i+')"> Delete Apointment </button>' + ' <button onclick="editRow('+i+')"> Edit Apointment </button>' + '</li>'  
  }
  document.getElementById("output").innerHTML = html   
  }).catch((err) => console.log(err))
}

function onSubmit(e) 
{
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === '' || pnumberInput.value === '') 
  {
    msg.innerHTML = 'Please enter all fields*';
    msg.style.color = 'red'
    setTimeout(() => msg.remove(), 5000);
  } 
  else 
  {
    let myNewObj={Name:nameInput.value,Email:emailInput.value,PhoneNumber:pnumberInput.value}
    axios.post("https://crudcrud.com/api/e8adbcd57acc460ebd939c07dfe006d2/appoitments",myNewObj).then(DisplayApointments()).catch( err => console.log(err))
    nameInput.value = '';
    emailInput.value = '';
    pnumberInput.value = '';   
  }
}

function deleteRow(i)
{
  let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))
  myObj_deserialized.splice(i,1)
  localStorage.setItem('myObj',JSON.stringify(myObj_deserialized))
  DisplayApointments();
}

function editRow(i)
{
  let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))
  nameInput.value = myObj_deserialized[i].expenseamount;
  emailInput.value = myObj_deserialized[i].description;
  pnumberInput.value = myObj_deserialized[i].category;
  deleteRow(i);
}