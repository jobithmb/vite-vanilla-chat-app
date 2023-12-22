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

