// @ts-nocheck
import { createGlobalObservable, useLocalObservable } from "mobx-vue-lite";

export const ticketStoreObservable = createGlobalObservable(() => {
  return useLocalObservable(() => ({
    activeTicket: null,

    setActiveTicket(ticket) {
      this.activeTicket = ticket;
    },

    clearActiveTicket() {
      this.activeTicket = null;
    },

    ticketColumns: [],

    addTicketColumn(column) {
      this.ticketColumns = [...this.ticketColumns, column];
    },

    ticketsList: [],

    addTicket(ticket) {
      this.ticketsList = [...this.ticketsList, ticket];
      return ticket.id;
    },

    updateTicket(id, ticket) {
      const index = this.ticketsList.findIndex((x) => x.id === id);
    },

    removeTicket(id) {
      this.ticketsList = this.ticketsList.filter((x) => x.id !== id);
    },
  }));
});
