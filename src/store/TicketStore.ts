import {createGlobalObservable, useLocalObservable} from "mobx-vue-lite";

export const ticketStoreObservable = createGlobalObservable(() => {
    return useLocalObservable(() => ({
        activeTicket: null,

        setActiveTicket(ticket: any) {
            this.activeTicket = ticket;
        }


    }))
})