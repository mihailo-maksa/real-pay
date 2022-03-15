# Cypress Setup

1.) `yarn add -D cypress @testing-library/cypress`
2.) `yarn run cypress open`
3.) /cypress/support/commands.js:
`import "@testing-library/cypress/add-commands"`
4.) delete the 2 default folders from /cypress/integration

# Testing Priority Hierarchy:

1. **High value features** like app's core functionality & payments (End-to-end testing with Cypress)
2. **Edge cases in high value features** (Integration and unit tests with React Testing Library)
3. **Things that are easy to break** (Integration and unit tests with React Testing Library)
4. **Basic react component testing** (Integration and unit tests with React Testing Library)
   1. User interactions
   2. Conditional rendering
   3. Utils
   4. Hooks
