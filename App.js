import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="App-header2">Student Profle</h1>
      <a href="test">Home |</a>
      <a href="test">My Profile |</a>
      <a href="test">My Activity |</a>
      <header className="App-header">
        <details>
          <summary>Personal Information</summary>
          <p>
            <ol>
              <li>Name: Eric</li>
              <li>Birth Date: 12/12/12</li>
            </ol>
          </p>
        </details>

        <details>
          <summary>Contact Information</summary>
          <p>
            <ol>
              <li>Phone Number: 0777777779</li>
              <li>Address: 4 Privet Drive</li>
            </ol>
          </p>
        </details>

        <details>
          <summary>School Information</summary>
          <p>
            <ol>
              <li>School: Hogwarts School of Witchcraft and Wizardry</li>
            </ol>
          </p>
        </details>

        <details>
          <summary>Hobbies</summary>
          <p>
            <ol>
              <li>Sports: Quiddich</li>
            </ol>
          </p>
        </details>
      </header>
      <footer>
        <center>
          Created by NXU New Students and retake Students.
          <br />
          Copyright@Ningxia University. 2021
        </center>
      </footer>
    </div>
  );
}

export default App;
