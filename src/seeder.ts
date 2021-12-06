// @ts-ignore
import { ticketStoreObservable } from './store/TicketStore'
// @ts-ignore
import faker from 'faker';
import {Ticket, TicketStatusColumn} from "./utils/Ticket";

let iterators = {
    ticket: 0,
    customer: 0,
};

const TicketStore = ticketStoreObservable().value;

const createTicket = (status: TicketStatusColumn): Ticket => {
    const customerName = faker.name.findName();

    const template: Ticket = {
        created_at: faker.date.past(),
        customer: {
            name: customerName,
            created_at: faker.date.past(),
            email: faker.internet.email(customerName.split(' ')[0]),
            id: iterators.customer++,
        },
        id: iterators.ticket++,
        status,
        title: faker.random.words(Math.round(Math.random()*4+1)),
        updated_at: faker.date.recent()

    }

    return template;
}


export default function seeder () {
    const ticketColumns: TicketStatusColumn[] = [
        {
            title: 'Nye sager',
            color: 'indigo',
        },
        {
            title: 'Aktive sager',
            color: 'crimson',
        },
        {
            title: 'Afventer kunderespons',
            color: 'yellowish',
        },
        {
            title: 'Færdig',
            color: 'tealish',
        }
    ]

    ticketColumns.forEach(x => TicketStore.addTicketColumn(x));

    for (let i = 0; i < 6; i++) {
        TicketStore.addTicket(createTicket(ticketColumns[0]));
    }
    for (let i = 0; i < 2; i++) {
        TicketStore.addTicket(createTicket(ticketColumns[1]));
    }

    TicketStore.addTicket(createTicket(ticketColumns[2]));

    for (let i = 0; i < 14; i++) {
        TicketStore.addTicket(createTicket(ticketColumns[3]));
    }



}