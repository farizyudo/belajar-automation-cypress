describe('API Testing Reqrest & Go Rest', () => {

  function randomName() {
    const randomString = Math.random().toString(36).substring(2, 10)
    const name = "user" + randomString
    return name
  }

  function randomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10)
    const email = randomString + "@gmail.com"
    return email
  }

  let name = randomName()
  let emailAddress = randomEmail()
  let bodyData = {
    "name": name,
    "email": emailAddress,
    "gender": "male",
    "status": "active"
  }

  // Reqrest
  it('GET User List', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((Response) => {
      expect(Response.status).to.equal(200)
    })
  })

  // Go Rest
  it('Create User Gorest', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: "Bearer c56374e3d290efff458ec5f38f20ae50e26b8df6cb153411b7f9f70185f591cc",

      },
      body: bodyData
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  })
})

