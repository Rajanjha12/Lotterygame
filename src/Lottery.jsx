import { useState } from 'react';
import { genTicket,sum } from "./helper";
import Animation from './Animation'; 
import './Lottery.css';
import Lottie from 'lottie-react'

export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(5));
    let isWinning=sum(ticket)===15;

    return (
        <div>
            <div class="lottery-container">
            <Lottie animationData={Animation} style={{width: 300, height: 300}} />
            <h1>Lottery Game</h1>
            </div>
             
            <div className="ticket">
                {ticket.map((num, i) => (
                    <div key={i}>{num}</div>
                ))}
            </div>
            <br></br>
            <button onClick={() => setTicket(genTicket(5))}>Buy Ticket</button>
            
            <h3>{isWinning ? "😊😍👍,YOU WON GAME": "😒😒 Loss"}</h3>
        </div>
    );
}