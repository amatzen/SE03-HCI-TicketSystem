<template>
  <Modal>
    <p>
      <span>#{{ data.id }}</span>
      <span :class="`text-${data.status.color}-500`">{{ data.status.title}}</span>
      <span>Oprettet {{ relativeTimeFormat(data.created_at) }} siden</span>
    </p>
    <h1 class="text-2xl">{{ data.title }}</h1>
  </Modal>
</template>

<script lang="ts">
import Modal from "../../components/Modal.vue";
import {ref} from "vue";
import {formatDistanceToNow} from "date-fns";
import { da } from 'date-fns/locale';
import {Ticket} from "../../utils/Ticket";
export default {
  name: "TicketModal",
  components: {Modal},
  setup(props: any) {
    const data = ref<Ticket>({
      id: 123,
      status: {
        title: "Aktiv",
        color: "tealish"
      },
      title: "Kan ikke logge ind",
      created_at: new Date(),
      updated_at: new Date(),
      customer: {
        id: 1,
        name: 'Ulla Henningsen',
        email: 'hej@hej.dk',
        created_at: new Date()
      }
    });

    const relativeTimeFormat = (date: Date) => formatDistanceToNow(date, {
      locale: da
    })

    return {
      data,
      relativeTimeFormat
    }
  }
}
</script>

<style scoped>

</style>