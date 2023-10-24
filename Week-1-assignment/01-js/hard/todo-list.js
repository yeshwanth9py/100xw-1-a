/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todo = []
  }
  add(x){
    this.todo.push(x)
  }
  remove(idx){
    this.todo.splice(idx,1)
  }
  update(idx,newx){
    this.todo.splice(idx,1,newx)
  }
  getAll(){
    console.log(this.todo)
    return this.todo
  }
  get(idx){
    return this.todo[idx]
  }
  clear(){
    this.todo = []
  }
}
var todo = new Todo;
todo.add("1");
todo.add("2");
todo.add("4");
todo.remove(1);
todo.getAll();
module.exports = Todo;
