// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


//========[Exercise] Build a component that displays the list of students
import React from "react";
import  "./App.css"

let students = [
  {
    Id: "1",
    Name: "Đoàn Hạ Băng",
    Age: "1",
    Address: "Thành Phố Huế"
  },
  {
    Id: "2",
    Name: "Đoàn Di Băng",
    Age: "2",
    Address: "Thành Phố Huế"
  },
  {
    Id: "3",
    Name: "Trần Tuyết Trinh",
    Age: "27",
    Address: "Thành Phố Hồ Chí Minh"
  }
];
class StudentsInfo extends React.Component {
    render() {
      return (
          <table>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                  </tr>
              {students.map(student =>
                  <tr>
                      <td>{student.Id}</td>
                      <td>{student.Name}</td>
                      <td>{student.Age}</td>
                      <td>{student.Address}</td>
                  </tr>
              )}
          </table>
      )
    }
}

export default StudentsInfo;
