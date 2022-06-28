import React, { useState, useEffect } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput'
import SearchList from './components/SearchList/SearchList';

function App() {
  const [searchField, setSearchField] = useState('')
  const [searchResults, setSearchResults] = useState('')
  let searchUrl = `https://restcountries.com/v3.1/name/` + searchField

  function fetchCountries<T>(url: string): Promise<T>{
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
      .then(data => {
          return data
      })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setSearchField(e.target.value)
  }

  useEffect(() => {
    fetchCountries('https://restcountries.com/v3.1/all')
    .then(data => {
      setSearchResults(data as string)
    })
  }, [])

  useEffect(() => {
    fetchCountries(searchUrl)
    .then(data => {
      console.log(data)
      setSearchResults(data as string)
    })
    }, [searchField])

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput handleChange={handleChange}/>
      </header>
      <body>
        <section className={'results'} >
          <SearchList />
        </section>
      </body>
    </div>
  );
}

export default App;
