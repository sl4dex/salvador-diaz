describe('My app page', function() {
  // before each test the db will be empty, a user will be created, and the app will be opened in the home page
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/reset')
    const user = {
      username: 'bot1',
      password: 'notabot'
    }
    cy.request('POST', 'http://localhost:3001/api/register', user)
    cy.visit('http://localhost:3001')
  })

  describe('When not logged in', function() {
    describe('Home page', function() {
      it('Home page can be opened', function() {
        cy.contains('Home')
        cy.contains('Forum')
        cy.contains('Memes')
        cy.contains('My Sites')
        cy.contains('Sign up')
        cy.contains('Login')
      })

      it ('section buttons work', function() {
        cy.get('#this-website-button').click()
        cy.contains('Welcome to my portfolio web application')
        cy.get('#my-cv-button').click()
        cy.contains('Tata Consultancy Services')
      })
    })

    describe('Forum', function() {
      it('Should not be able to create blog', function() {
        cy.contains('Forum').click()
        cy.contains('New Blog').click()
        cy.get('#title').type('A human blog')
        cy.get('#url').type('https://en.wikipedia.org/wiki/Human')
        cy.get('#content').type('Humans (Homo sapiens) are the most abundant and widespread species of primate, characterized by bipedalism and exceptional cognitive skills due to a large and complex brain.', {delay: 0})
        cy.get('#create-blog-button').click()
        cy.contains('You must be logged in to create a blog')
      })
      it('Should not be able to comment', function() {
        cy.request('POST', 'http://localhost:3001/api/login', {
          username: 'bot1', password: 'notabot'
        }).then(res => {
          localStorage.setItem('loggedUser', JSON.stringify(res.body))
          cy.visit('http://localhost:3001')
        })
        cy.createBlog({ title: 'title1', url: 'abc', content: 'content1' })
        cy.contains('Forum').click()
        cy.contains('view more').click()
        cy.contains('Logout').click()
        cy.get('#comment-text').type('not logged human can I comment?')
        cy.contains('Submit').click()
        cy.contains('You must be logged in to comment')
      })
      it('Should not be able to delete any blog', function() {
        cy.request('POST', 'http://localhost:3001/api/login', {
          username: 'bot1', password: 'notabot'
        }).then(res => {
          localStorage.setItem('loggedUser', JSON.stringify(res.body))
          cy.visit('http://localhost:3001')
        })
        cy.createBlog({ title: 'title1', url: 'abc', content: 'content1' })
        cy.contains('Forum').click()
        cy.contains('view more').click()
        cy.contains('Logout').click()
        cy.get('#delete-blog-button').should('not.exist')
      })
    })
  
    describe('Sign up', function() {
      it ('First time sign up', function() {
        cy.contains('Sign up').click()
        cy.get('#username').type('sl4')
        cy.get('#password').type('123')
        cy.get('#signup-button').click()
        cy.contains('User registered, please log in')
      })
      it ('Sign up with existing username', function() { 
        cy.contains('Sign up').click()
        cy.get('#username').type('bot1')
        cy.get('#password').type('123')
        cy.get('#signup-button').click()
        cy.contains('Username already taken')
      })
      it ('Sign up with empty username', function() {
        cy.contains('Sign up').click()
        cy.get('#password').type('123')
        cy.get('#signup-button').click()
        cy.contains('Username and password must be at least 3 characters long')
      })
      it ('Sign up with empty password', function() {
        cy.contains('Sign up').click()
        cy.get('#username').type('sl4')
        cy.get('#signup-button').click()
        cy.contains('Username and password must be at least 3 characters long')
      })
    })
  
    describe('Login', function() { 
      it ('User can login', function() {
        cy.contains('Login').click()
        cy.get('#username').type('bot1')
        cy.get('#password').type('notabot')
        cy.get('#login-button').click()
        cy.contains('Login successful')
        cy.contains('logged in as bot1')
      })
      it ('Login with wrong username', function(){
        cy.contains('Login').click()
        cy.get('#username').type('bot2')
        cy.get('#password').type('notabot')
        cy.get('#login-button').click()
        cy.contains('Invalid username or password')
      })
      it ('Login with wrong password', function(){
        cy.contains('Login').click()
        cy.get('#username').type('bot1')
        cy.get('#password').type('notabottt')
        cy.get('#login-button').click()
        cy.contains('Invalid username or password')
      })
    })
  })

  describe('When user is logged', function(){
    // before each test in this section, login directly via the api, since its faster than the UI
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3001/api/login', {
        username: 'bot1', password: 'notabot'
      }).then(res => {
        localStorage.setItem('loggedUser', JSON.stringify(res.body))
        cy.visit('http://localhost:3001')
      })
    })

    it ('Should not contain Signup and Login sections in navbar', function() {
      cy.contains('Signup').should('not.exist')
      cy.contains('Login').should('not.exist')
    })

    describe.only('Blogs', function(){
      it('Should be able to create a blog', function() {
        cy.contains('Forum').click()
        cy.contains('New Blog').click()
        cy.get('#title').type('A human blog')
        cy.get('#url').type('https://en.wikipedia.org/wiki/Human')
        cy.get('#content').type('Humans (Homo sapiens) are the most abundant and widespread species of primate, characterized by bipedalism and exceptional cognitive skills due to a large and complex brain.', {delay: 0})
        cy.get('#create-blog-button').click()
        cy.contains('"A human blog" created')
        cy.contains('by bot1')
      })
      it('Can\'t have empty title', function(){
        cy.contains('Forum').click()
        cy.contains('New Blog').click()
        cy.get('#url').type('https://en.wikipedia.org/wiki/Human')
        cy.get('#content').type('Humans (Homo sapiens) are the most abundant and widespread species of primate, characterized by bipedalism and exceptional cognitive skills due to a large and complex brain.', {delay: 0})
        cy.get('#create-blog-button').click()
        cy.contains('Title and content can\'t be empty')
      })
      it('Can\'t have empty content', function(){
        cy.contains('Forum').click()
        cy.contains('New Blog').click()
        cy.get('#title').type('A human blog')
        cy.get('#url').type('https://en.wikipedia.org/wiki/Human')
        cy.get('#create-blog-button').click()
        cy.contains('Title and content can\'t be empty')
      })
      it.only('Title cant have more than 75 chars', function() {
        cy.contains('Forum').click()
        cy.contains('New Blog').click()
        cy.get('#title').type('Humans (Homo sapiens) are the most abundant and widespread species of prim76', {delay: 0})
        cy.get('#content').type('content1')
        cy.get('#create-blog-button').click()
        cy.contains('Title, url and content must be less than 75, 150 and 2000 characters respectively')
      })
      it.only('Title cant have more than 150 chars', function() { 
        cy.contains('Forum').click()
        cy.contains('New Blog').click()
        cy.get('#title').type('title1', {delay: 0})
        cy.get('#url').type('151ans (Homo sapiens) are the most abundant and widespread species of primate, characterized by bipedalism and exceptional cognitive skills due to  151')
        cy.get('#content').type('content1')
        cy.get('#create-blog-button').click()
        cy.contains('Title, url and content must be less than 75, 150 and 2000 characters respectively')
      })
      it.only('Content cant have more than 2000 chars', function() {
        cy.contains('Forum').click()
        cy.contains('New Blog').click()
        cy.get('#title').type('title1', {delay: 0})
        cy.get('#content')
          .invoke('val', 'a'.repeat(2000))
          .type('1')
        cy.get('#create-blog-button').click()
        cy.contains('Title, url and content must be less than 75, 150 and 2000 characters respectively')
      })
      it('Should be able to delete created blog', function() {
        cy.createBlog({title: 'blog1', url: '', content: 'content1'})
        cy.contains('Forum').click()
        cy.contains('view more').click()
        cy.get('#delete-blog-button').click()
        cy.contains('"blog1" deleted')
      })
      it('Should be able to create comment on blog', function() {
        cy.createBlog({title: 'blog1', url: '', content: 'content1'})
        cy.contains('Forum').click()
        cy.contains('view more').click()
        cy.get('#comment-text').type('good blog fellow human')
        cy.get('#submit-comment-button').click()
        cy.contains('comment added successfully')
        cy.get('div p').contains('good blog fellow human')
      })
      it('Should be able to delete own comments on blog', function() {
        cy.createBlog({title: 'blog1', url: '', content: 'content1'})
        cy.contains('Forum').click()
        cy.contains('view more').click()
        cy.get('#comment-text').type('good blog fellow human')
        cy.get('#submit-comment-button').click()
        cy.contains('comment added successfully')
        cy.get('div p').contains('good blog fellow human')
        cy.get('.delete-comment-button').click()
        cy.contains('comment deleted successfully')
        cy.contains('good blog fellow human').should('not.exist')
      })
    })
  })
})