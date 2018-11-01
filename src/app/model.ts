export class Model {
  user;
  items;

  constructor() {
    this.user = 'Fernando';
    this.items = [
      new TodoItem('Freedom, career and a wonderful country of conclusion.', false),
      new TodoItem('The attitude is a honorable power.', false),
      new TodoItem('Countless crewmates disrupt solid, terrifying protons.', true),
      new TodoItem('Rice combines greatly with clammy chickpeas.', false)];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
