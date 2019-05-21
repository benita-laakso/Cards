import React ,{Component}from 'react';
import './App.css';
import Persons from './Persons/Persons';

class App extends Component{
state={
  persons:[
    {id:'1', name:'Kati', title:'Designer', age:28},
    {id:'2', name:'Mari', title:'CEO',age:25},
    {id:'3', name:'Mari', title:'CEO',age:25},
    {id:'4', name:'Mari', title:'CEO',age:25},
    {id:'5', name:'Anne', title:'Developer',age:29},
  ],
  showPersons:false
};

changeNameHandler =(newName)=> {
  this.setState({
    persons:[
      {name:newName, title:'Designer', age:28},
      {name:'Ljudmilla', title:'CEO',age:25},
      {name:'Katrin', title:'Developer',age:29},
    ]

  })
}

inputNameHandler = event =>{
  this.setState({
  persons:[
    {name:'Kati', title:'Designer', age:28},
    {name: event.target.value, title:'CEO',age:25},
    {name:'Anne', title:'Developer',age:29},
  ]
  })
}
togglePersonsHandler = () =>{
  const checkToggle = this.state.showPersons;
  this.setState({
    showPersons:!checkToggle
  });
};

  removeItemHandler = (personIndex) =>{
const persons = [...this.state.persons];
persons.splice(personIndex, 1);
this.setState({persons:persons});
}

inputNameHandler =(event, id)=>{
const personIndex = this.state.persons.findIndex(
  p =>{
    return p.id === id;
  }
);// we try to figure out , is there ID in the array
const person = {
  ...this.state.persons[personIndex]
};//We take right object and with spread operators we create a new object (copy)
//distribute all attributes from that object

person.name = event.target.value;
//We take name and replace it with event.target.value

const persons = [...this.state.persons];
persons[personIndex] = person;

//and finaly we update state updated object, updated array
this.setState({
  persons:persons
})
}

  render(){
    const  buttonStyle ={
      backgroundColor:'blue',
      padding:'10px',
      cursor:'pointer',
      color:'white',
      border:'none',
      borderRadius: '5px'
     }

     let personsIf = null;
     if (this.state.showPersons){
       personsIf =(
       <div>
       {
         this.state.persons.map((p,index) =>{
           return <Persons
           click={()=>this.removeItemHandler(index)}
           name={p.name}
           title ={p.title}
           age={p.age}
           key={p.id}
           changed={(event) => this.inputNameHandler(event, p.id)}
           />;
       }
     )
     }
       </div>

);
}
    return(
<div>

    <div>
        <h1>Our Cards task</h1>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle</button>
        {personsIf}
    </div>

</div>
    )
  }
};


export default App;
