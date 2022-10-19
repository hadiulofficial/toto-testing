const url = 'http://127.0.0.1:5173/'

describe('todo.cy.js', () => {

  it('visit site', () => {
    cy.visit(url)
  })

  it('add todo', () => {
    cy.get('#todo').type('todo')
    cy.get('#description').type('description')
    cy.get('#addTodo').click()
  })

  it('check todo', () => {
    cy.get('.todo').should('contain', 'todo')
  })
  
})