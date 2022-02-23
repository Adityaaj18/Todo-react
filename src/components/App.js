import React, { Component } from 'react'
import Users from './Users'
import AddUser from './AddUser'

class App extends Component {
   //DUMMY DATA
   state = {
      users: [
         { name: 'Aditya Jadhav', age: 22, isEditing: false },
         { name: 'Andrew Garfild', age: 24, isEditing: false },
         { name: 'Tobey Magurie', age: 28, isEditing: false }
      ]
   }

   //(newUser) is recived from add AddUser.js
   addUser = (newUser) => {
      let users = [this.state.users, newUser]
      this.setState({
         users
      })
   }

   //when press edit button
   //(i) is recived from Users.js
   pressEditBtn = (i) => {
      let users = this.state.users
      users[i].isEditing = true
      this.setState({
         users
      })
   }

   // updateUser (i, name, age) is recived from Users.js
   updateUser = (i, name, age) => {
      let users = this.state.users
      users[i].name = name
      users[i].age = age
      users[i].isEditing = false

      this.setState({
         users
      })
   }

   //delete user (i, name, age) is recived from Users.js
   pressDelete = (i, name, age) => {
      let users = this.state.users.filter((u, index) => {
         return index !== i
      })
      this.setState({ users })
   }
   render() {
      return (
         <div className="container">
            <h1>CRUD with React</h1>
            <Users
               allUsers={this.state.users}
               pressEditBtn={this.pressEditBtn}
               updateUser={this.updateUser}
               pressDelete={this.pressDelete}
            />
            <AddUser addUser={this.addUser} />
         </div>
      )
   }
}

export default App
