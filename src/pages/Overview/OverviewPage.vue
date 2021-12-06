<template>
  <div>
    <section class="w-full grid grid-cols-4 gap-12">
      <div role="row" v-for="column in ticketStore.ticketColumns" :key="column.title">
        <h2 class="text-xl font-bold">{{ column.title }}</h2>
        <p class="text-gray-600 font-semibold mb-5">{{ getTicketsByColumn(column).length }} sager</p>

        <div>
          <TicketListItem v-for="ticket in getTicketsByColumn(column)" :key="ticket.id" :ticket="ticket" />
        </div>
      </div>
    </section>
  </div>

  <Observer>
    <TicketModal v-if="ticketStore.activeTicket !== null" :ticket="ticketStore.activeTicket" />
  </Observer>
</template>

<script>
import TicketModal from "./TicketModal.vue";
import { ticketStoreObservable } from "../../store/TicketStore";
import { Observer } from "mobx-vue-lite";
import TicketListItem from "./TicketListItem.vue";

export default {
  name: "OverviewPage",

  components: {TicketListItem, TicketModal, Observer },

  setup(props) {
    const ticketStore = ticketStoreObservable();

    const getTicketsByColumn = (col) => ticketStore.value.ticketsList.filter(x => JSON.stringify(col) === JSON.stringify(x.status));

    return {
      ticketStore,
      getTicketsByColumn
    };
  },
};
</script>
