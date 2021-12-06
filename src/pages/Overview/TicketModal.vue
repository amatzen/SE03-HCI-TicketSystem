<template>
  <Modal @dismiss="ticketStore.clearActiveTicket()">
    <div class="w-full">
      <div class="bg-gray-100 p-6">
        <p>
          <span class="mr-2 font-semibold text-gray-500">#{{ data.id }}</span>
          <span
            class="mr-2 font-semibold"
            :class="`text-${data.status.color}-500`"
            >{{ data.status.title }}</span
          >
          <span class="mr-2 font-semibold text-gray-500"
            >Oprettet {{ relativeTimeFormat(data.created_at) }} siden</span
          >
        </p>
        <h1 class="text-4xl mt-2 font-bold">{{ data.title }}</h1>
      </div>
      <div class="bg-white p-6 grid">
        <div>
          <div>
            <span
              class="
                bg-tealish-500
                text-white
                rounded-full
                w-10
                h-10
                flex
                items-center
                justify-center
                font-semibold
              "
              >UH</span
            >
            <p>Hej hej hej</p>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import Modal from "../../components/Modal.vue";
import {ref} from "vue";
import {formatDistanceToNow} from "date-fns";
import { da } from 'date-fns/locale';
import {Ticket} from "../../utils/Ticket";
//@ts-ignore
import {ticketStoreObservable} from "../../store/TicketStore";
export default {
  name: "TicketModal",
  components: { Modal },
  setup(props: any) {
    /*
    const data = ref<Ticket>({
      id: 123,
      status: {
        title: "Aktiv",
        color: "tealish",
      },
      title: "Kan ikke logge ind",
      created_at: new Date(),
      updated_at: new Date(),
      customer: {
        id: 1,
        name: "Ulla Henningsen",
        email: "hej@hej.dk",
        created_at: new Date(),
      },
    });
     */

    const ticketStore = ticketStoreObservable();
    const data = ticketStore.value.activeTicket;

    const relativeTimeFormat = (date: Date) =>
      formatDistanceToNow(date, {
        locale: da,
      });


    return {
      data,
      relativeTimeFormat,
      ticketStore,
    };
  },
};
</script>
