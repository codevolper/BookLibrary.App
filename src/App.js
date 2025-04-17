import './App.css';
import { searchBooks } from './services/searchbook';
import { useState } from 'react';

function App() {
  const [gridData, setGridData] = useState([]);

  const handleSearch = async () => {
    const title = document.querySelector('input[placeholder="Search description"]').value;
    const isbn = document.querySelector('select').value;

    try {
      const data = await searchBooks(title, isbn);
      setGridData(data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>Search Options</legend>
          <select>
            <option value="title">Title</option>
            <option value="isdn">ISDN</option>
          </select>
          <div>
            <input type="text" placeholder="Search description" />
            <button onClick={handleSearch}>Search</button>
          </div>
        </fieldset>
        <br /><br />
        <table>
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Publisher</th>
              <th>Authors</th>
              <th>Type</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Available Copies</th>
            </tr>
          </thead>
          <tbody>
            {gridData.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.publisher}</td>
                <td>{`${book.firstName} ${book.lastName}`}</td>
                <td>{book.type}</td>
                <td>{book.isbn}</td>
                <td>{book.category}</td>
                <td>{book.totalCopiesInUse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
