module.exports = () => {
    const faker = require('faker/locale/pt_BR')
    const _ = require('lodash')

    return {
        contacts: _.times(100, (index) => {
            return {
                "id": index,
                "uuid": faker.random.uuid(),
                "firstName": faker.name.firstName(),
                "lastName": faker.name.lastName(),
                "email": faker.internet.email(), 
                "gender": (index % 2 == 0) ? "m" : "f",
                "info": {
                    "company": faker.company.companyName()
                },
                "isFavorite": faker.random.boolean()
            }
        })
    }
}