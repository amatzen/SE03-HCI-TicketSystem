<template>
  <div>
    <button @click="ticketStore.setActiveTicket([])">Åbn modal</button>

    <div v-for="column in data" :key="column.title">
      {{ column.title }}
      <div>
        <div v-for="ticket in column.tickets" :key="ticket.id">
          <p>{{ ticket.id }}</p>
          <p>{{ ticket.title }}</p>
          <p>{{ ticket.name }}</p>
        </div>

      </div>
    </div>
  </div>

  <Observer>
    <TicketModal @dismiss="" v-if="ticketStore.activeTicket !== null" />
  </Observer>
</template>

<script>
import TicketModal from "./TicketModal.vue";
import {ticketStoreObservable} from "../../store/TicketStore";
import { Observer } from "mobx-vue-lite";

export default {
  name: "OverviewPage",

  data() {
    return {
      data: [
        {
          title: "Nye sager",
          tickets: [
            {
              id: 524,
              title: "Lobortis",
              name: "Kristian Bech",
            },
            {
              id: 552,
              title: "Integer",
              name: "Frederikke Hjort",
            },
          ],
        },
        {
          title: "Aktive sager",
          color: "red",
          tickets: [
            {
              id: 588,
              title: "Det nye tider",
              name: "Ashvikan Sivabalaa",
            },
          ],
        },
      ],
    };
  },
  components: { TicketModal, Observer },

  setup(props) {
    const ticketStore = ticketStoreObservable()

    return {
      ticketStore
    }
  }

};
</script>

