import axios from 'axios'
import React, { Component } from 'react'

class TicketService  {
   getAllTickets = () => {
    axios.get("http://localhost:8080/getAllTickets");
   }
}

export default new TicketService();
