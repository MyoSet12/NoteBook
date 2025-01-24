const { updateDailyPlan, updateOutput } = require('./app');

// Mock DOM elements for testing
beforeAll(() => {
  document.body.innerHTML = `
    <textarea id="test"></textarea>
    <input type="text" id="inputBox">
    <input type="text" id="utputBox" readonly>
  `;
});

test('updateDailyPlan should update textarea content', () => {
  updateDailyPlan('test', 'Test content');
  expect(document.getElementById('test').value).toBe('Test content');
});

test('updateOutput should display correct information based on input', () => {
  document.getElementById('inputBox').value = 'John';
  updateOutput();
  expect(document.getElementById('utputBox').value).toBe('10.2.2000/Yangon/+79939731002/+95977709387/He is a programmer.');
});
