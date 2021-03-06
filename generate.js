module.exports = () => {
    const faker = require('faker/locale/pt_BR')
    const _ = require('lodash')

    return {
        contacts: _.times(10, (index) => {
            let contact = {
                "id": index+1,
                "uuid": faker.random.uuid(),
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email(), 
                "avatar": faker.internet.avatar(),
                "gender": (index % 2 == 0) ? "m" : "f",
                "info": {
                    "company": faker.company.companyName()
                },
                "isFavorite": faker.random.boolean()
            }
            return JSON.parse(JSON.stringify(contact))
        })
    }
}