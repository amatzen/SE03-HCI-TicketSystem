<template>
  <div role="cell"
       :class="`w-full bg-${ticket.status.color}-500 text-white p-5 rounded mb-3 cursor-pointer transform scale-100 hover:scale-105 transition-transform select-none`"
       @click="ticketStore.setActiveTicket(ticket)"
  >
    <p class="text-sm">#{{ ticket.id}}</p>
    <h3 class="font-bold text-lg my-2">{{ dotLongStrings(32,ticket.title) }}</h3>
    <p class="text-base font-semibold">{{ ticket.customer.name }}</p>
  </div>
</template>

<script>
import { ticketStoreObservable } from "../../store/TicketStore";
import { dotLongStrings } from "../../utils/UtilitiesPack";

export default {
  name: "TicketListItem",
  props: {
    ticket: Object
  },
  setup(props) {
    const ticketStore = ticketStoreObservable()

    return { ticketStore, dotLongStrings }
  }
}
</script>
