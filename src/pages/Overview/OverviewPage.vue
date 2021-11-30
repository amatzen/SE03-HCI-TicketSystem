<template>
  <div>
    <div v-for="column in data" :key="column.title">
      {{ column.title }}
      <div class="tickets">
        <p v-for="ticket in column.tickets" :key="ticket.id">{{ ticket.id }}</p>
        <p v-for="ticket in column.tickets" :key="ticket.id">
          {{ ticket.title }}
        </p>
        <p v-for="ticket in column.tickets" :key="ticket.id">
          {{ ticket.name }}
        </p>
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
  components: { TicketModal },
};
</script>

<style scoped>
.tickets {
  width: 15em;
  height: 1em;
  border: 15px solid #0c9366;
  padding: 5em;
  margin: 1em;
}
</style>
