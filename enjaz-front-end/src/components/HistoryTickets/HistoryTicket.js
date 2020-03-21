//HistoryTicket
import React from 'react';
export default class HistoryTicket extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Fltir:'none', 
    };
  }
  // To display or not the ticket description  
  TicketClicked = (e) => {
     if( this.state.Fltir === 'none'){
        this.setState({ 
          Fltir:'display', }); 
     }
     else{
         this.setState({ Fltir:'none' }); 
     }
}
// delete the ticket from DB
delete = (e) => {
  e.preventDefault();
  this.props.deleteOneTicket(this.props.id);
}
  render(){
    return(
      <li className="event">
      <div className="member-infos">

      <h1 className="member-title"
        onClick={this.TicketClicked}>
          {this.props.TicketState} 
      </h1>

        <div className={`Description-${this.state.Fltir}`}>
        <h2> {this.props.TicketDescription} </h2>
          <span class="shots-number">{this.props.TicketType}</span>
          <button className="raise"
          onClick={this.delete}> Delete </button> 
             </div>
      </div>
      </li>
    );
  }
}