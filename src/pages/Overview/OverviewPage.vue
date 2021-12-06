<template>
  <div>
    <button @click="ticketStore.setActiveTicket([])">Åbn modal</button>

    <div v-for="column in data" :key="column.title">
      {{ column.title }}
      <div>
        <div v-for="ticket in column.tickets" :key="ticket.id">
          <p>#{{ ticket.id }}</p>
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
import { ticketStoreObservable } from "../../store/TicketStore";
import { Observer } from "mobx-vue-lite";

export default {
  name: "OverviewPage",

  data() {
    return {
      data: [
        {
          title: "Nye sager",
          color: "#8390fa",
          tickets: [
            {
              id: 1,
              title: "Title 1",
              name: "Name 1",
            },
          ],
        },
        {
          title: "Aktive sager",
          color: "#e60f4f",
          tickets: [
            {
              id: 2,
              title: "Title 2",
              name: "Name 2",
            },
          ],
        },
        {
          title: "Afventer kunderespons",
          color: "#fac748",
          tickets: [
            {
              id: 3,
              title: "Title 3",
              name: "Name 3",
            },
          ],
        },
        {
          title: "Færdig",
          color: "#24d2b3",
          tickets: [
            {
              id: 4,
              title: "Title 3",
              name: "Name 4",
            },
          ],
        },
      ],
    };
  },
  components: { TicketModal, Observer },

  setup(props) {
    const ticketStore = ticketStoreObservable();

    return {
      ticketStore,
    };
  },
};
</script>
