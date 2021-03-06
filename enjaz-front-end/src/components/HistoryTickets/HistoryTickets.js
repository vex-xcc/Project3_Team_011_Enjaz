//HistoryTickets
import React from "react";
import HistoryTicket from './HistoryTicket'
import "../AllTicket/Tickets.css";
import { getAllTicket , deleteTicket } from "../api";

export default class HistoryTickets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: null,
        };
    }


    componentDidMount() {
        // Mack API call to det all the Ticket of closed state 
        getAllTicket()
            .then(repose => {
                console.log("reponse.data", repose.data);
                const newhistory = repose.data.filter((Ticket) => {
                    if (Ticket.TicketState === "closed") {
                        return repose.data;
                    }
                })
                this.setState({ history: newhistory });
                
            })
            .catch(error => {
                console.log(" API error: ", error);
            });
    }
    deleteOneTicket = (id) => {
         // Make an API Call to delete a ticket
        deleteTicket(id)
            .then((res) => {
                const newhistory = this.state.history.filter((Ticket) => {
                    return console.log("return",Ticket._id),Ticket._id !== id; 
                });
                this.setState({ history:newhistory });
                console.log("setState",this.state.history)
            })
            .catch((err) => {
            })
    }

    render(){
        console.log(this.state.history)
        let History = <h3> No History Tickets.. </h3>
        if(this.state.history !== null ){
            History= this.state.history.map( (Tickets , index)=> {
            return(
            <HistoryTicket 
            id={Tickets._id}
            TicketType={Tickets.TicketType}
            TicketState={Tickets.TicketState}
            deleteOneTicket={this.deleteOneTicket}
            TicketDescription={Tickets.TicketDescription}
            key={index} /> 
            );
        })}
      return(
          <div className="content">
              <h2>History Ticket</h2>
              <ul className="timeline">
              {History}
          </ul>
          <li onClick={this.props.toggle}><i className="material-icons"> arrow_back </i></li>
          {/* <button onClick={this.props.toggle} > Go back </button> */}
          </div>);
    }


}