let myModal = new bootstrap.Modal(document.getElementById('myModal'))

let infoContacto = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  note: ''
}
const getFormData = () => {
  let name = document.getElementById('name').value
  let lastName = document.getElementById('lastName').value
  let phone = document.getElementById('phone').value
  let email = document.getElementById('email').value
  let note = document.getElementById('note').value

  fillData({name, lastName, phone, email, note})
  printMessageContact()
}

const fillData = (infoData) => {
  infoContacto = {...infoData}
}

const printMessageContact = () => {
  messageModal = document.getElementById('messageModal')
  const { name, lastName, email, phone } = infoContacto
  messageModal.innerHTML = `Nombre: ${name} ${lastName} Email: ${email} - Teléfono: ${phone}`
  myModal.show()
}