const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const pnumberInput = document.querySelector('#pnumber')
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', DisplayApointments)

function DisplayApointments()
{
  axios.get("https://crudcrud.com/api/435168ebfab14c729f56e8b71fcda912/appoitments")
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
    axios.post("https://crudcrud.com/api/435168ebfab14c729f56e8b71fcda912/appoitments",myNewObj).then( res => DisplayApointments()).catch( err => console.log(err))
    nameInput.value = '';
    emailInput.value = '';
    pnumberInput.value = '';   
  }
}

function deleteRow(i)
{
  axios.get("https://crudcrud.com/api/435168ebfab14c729f56e8b71fcda912/appoitments").then((res) => {
    let url = "https://crudcrud.com/api/435168ebfab14c729f56e8b71fcda912/appoitments/"+res.data[i]._id;
    axios.delete(url).then( res => DisplayApointments()).catch( err => console.log(err))
    }).catch( err => console.log(err))
}

function editRow(i)
{
  axios.get("https://crudcrud.com/api/435168ebfab14c729f56e8b71fcda912/appoitments").then( res => {
    nameInput.value = res.data[i].Name;
    emailInput.value = res.data[i].Email;
    pnumberInput.value = res.data[i].PhoneNumber;
    deleteRow(i);
    DisplayApointments()
  }).catch( err => console.log(err))

}

