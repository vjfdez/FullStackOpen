import { useState, useEffect } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(()=> {
    console.log('Ejecutando Effect');
    personService
      .getAll() 
      .then(response => {
        setPersons(response.data);      
      })
  }, []);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState(0);
  const [nameFilter, setNameFilter] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [notificationMode, setNotificationMode] = useState('');

  const formHandler = (event)=> {
    event.preventDefault();

    let id = '';
    persons.length > 0 ? id = (Number(persons[persons.length - 1].id) + 1).toString() : id = 1;
    console.log((Number(persons[persons.length - 1].id) + 1).toString());

    const personToAdd = {
      id: id,
      name: newName,
      number: newNumber
    };

    let alreadyExist = persons.some((item)=> item.name === personToAdd.name || item.number === personToAdd.number);

    const postPerson = ()=> {
      personService
      .create(personToAdd)
      .then(response => {
        console.log(response);

        setNotificationMode('success');
        setNotificationMsg(`${personToAdd.name} is added.`);
        setTimeout(()=> {setNotificationMsg(null)}, 5000);
      })
      .catch(error=>{
        console.log(error);

        setNotificationMode('error');
        setNotificationMsg(`${personToAdd.name} doesn't added, because an error ocurred.`)
        setTimeout(() => {
          setNotificationMsg(null)
        }, 5000)
      })
    };

    const updatePerson = ()=> {
      let person = persons.find(person => person.name === personToAdd.name);
      confirm(`${personToAdd.name} is already added to phonebook, replace the old number with a new one?`)

      personService
      .update(person.id, personToAdd)
      .then(response => {
        console.log(response);
        setNotificationMode('success');
        setNotificationMsg(`${personToAdd.name} number's updated.`);
        setTimeout(()=> {setNotificationMsg(null)}, 5000);
      })
      .catch(error=>{
        console.log(error);

        setNotificationMode('error');
        setNotificationMsg(`${personToAdd.name} doesn't updated, because an error ocurred.`)
        setTimeout(() => {
          setNotificationMsg(null)
        }, 5000)
      })
    };

    alreadyExist ?  updatePerson() : (postPerson(), setPersons(persons.concat(personToAdd)), setNewName(''));
  };

  const nameHandler = (event)=> {
    setNewName(event.target.value);
  };
  
  const numberHandler = (event)=> {
    setNewNumber(event.target.value);
  };

  const nameFilterHandler = (event)=> {
    setNameFilter(event.target.value);
    let personsFinded = persons.filter((person)=> person.name.toLowerCase().includes(nameFilter));
    setFilterResults(personsFinded);
  };

  const dltPerson = (id)=> {
    confirm('Are you sure to delete person?')
     personService
      .deletePerson(id)
      .then(response => {
        console.log(response);
      })
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} mode={notificationMode}/>
      <Filter namefilter={nameFilter} onWrite={nameFilterHandler} arrResults={filterResults}/>
      <h3>Add a new</h3>
      <PersonForm atSendData={formHandler} nameHandler={nameHandler} name={newName} numberHandler={numberHandler} number={newNumber}/>
      <h3>Numbers</h3>  
      {persons.map(person => 
        <Person key={person.id} name={person.name} number={person.number} onSmash={()=> dltPerson(person.id)}/>
      )}
    </div>  
  )
};

export default App;