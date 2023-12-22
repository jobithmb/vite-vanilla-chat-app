import '../styles/main.scss'
import 'remixicon/fonts/remixicon.css'

import Contact from './Contact'
import { faker } from '@faker-js/faker';


import './tabs'

let contacts = []

//new Contact('John', 'Doe', 25, true)
for( let i = 0; i < 10; i++) {
    contacts.push(
        new Contact(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.image.avatar(),
            faker.datatype.boolean(0.75)
        )
    )
}
console.log(contacts);

const contactsList = document.getElementById('contacts-list')
let listHTML = ''
contacts.forEach(contact => {
    listHTML += `
    <li class="contact ${contact.isOnline? 'online': 'offline'}">
        <div class="profile-image">
        <img
            src="${contact.picture}"
            alt="contact-image"
        />
        </div>
        <div class="details">
        <div class="name">${contact.getFullName()}</div>
        <div class="last-message">Lorem ipsum dolor sit amet.</div>
        </div>
    </li>
    `
})
contactsList.innerHTML = listHTML

