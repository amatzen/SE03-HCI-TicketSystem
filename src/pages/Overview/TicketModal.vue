<template>
  <Modal @dismiss="ticketStore.clearActiveTicket()" v-if="data">
    <div class="w-full">
      <div class="p-6">
        <p>
          <span class="mr-2 font-semibold text-gray-500">#{{ data.id }}</span>
          <span
            class="mr-2 font-semibold"
            :class="`text-${data.status.color}-800`">
            {{ data.status.title }}
          </span>
          <span class="mr-2 font-semibold text-gray-500">Oprettet {{ relativeTimeFormat(data.created_at) }} siden</span>
        </p>
        <h1 class="text-4xl mt-2 font-bold" :title="data.title">{{ dotLongStrings(36, data.title) }}</h1>
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
              ">
              UH
            </span>
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
import { dotLongStrings} from "../../utils/UtilitiesPack";
import { da } from 'date-fns/locale';
import {Ticket} from "../../utils/Ticket";
//@ts-ignore
import {ticketStoreObservable} from "../../store/TicketStore";
export default {
  name: "TicketModal",
  props: {
    ticket: Object
  },
  components: { Modal },
  setup(props: any) {
    const ticketStore = ticketStoreObservable();
    //const data: Ticket|null = ticketStore.value.activeTicket;
    const data: Ticket = props.ticket;

    const relativeTimeFormat = (date: Date) =>
      formatDistanceToNow(date, {
        locale: da,
      });


    return {
      data,
      relativeTimeFormat,
      ticketStore,
      dotLongStrings
    };
  },
};
</script>
