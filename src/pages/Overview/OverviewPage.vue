<template>
  <div>
    <div v-for="column in data" :key="column.title">
      {{ column.title }}
      <div>
        <p v-for="ticket in column.tickets" :key="ticket.id">{{ ticket.title}}</p>
      </div>
    </div>
  </div>

  <TicketModal />
</template>

<script>
import TicketModal from "./TicketModal.vue";
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
          tickets: [],
        },
      ],
    }
  },
  components: {TicketModal}
}
</script>

<style scoped></style>
