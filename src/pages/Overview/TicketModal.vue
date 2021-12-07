<template>
  <Modal @dismiss="ticketStore.clearActiveTicket()" v-if="data">
    <div class="min-w-ticket">
      <div class="p-12">
        <p>
          <span class="mr-2 font-semibold text-gray-500">#{{ data.id }}</span>
          <span
            class="mr-2 font-semibold"
            :class="`text-${data.status.color}-800`"
          >
            {{ data.status.title }}
          </span>
          <span class="mr-2 font-semibold text-gray-500"
            >Oprettet {{ relativeTimeFormat(data.created_at) }} siden</span
          >
        </p>
        <h1 class="text-4xl mt-2 font-bold" :title="data.title">
          {{ dotLongStrings(36, data.title) }}
        </h1>
      </div>
      <div class="bg-white p-12 pt-0 grid grid-cols-ticketmodal gap-5">
        <div>
          <TicketMessage :sender="data.customer" message="Test" />
          <TicketMessage :sender="data.customer" message="Test" />
          <TicketMessage :sender="data.customer" message="Test" />
          <TicketMessage :sender="data.customer" message="Test" />

        </div>
        <div>

          <div>
            <p class="font-semibold text-sm text-gray-600">Kunde</p>
            <h3 class="font-bold text-xl">{{ data.customer.name }}</h3>
            <p class="font-semibold text-indigo-700">{{ lowercaseString(data.customer.email) }}</p>
            <p class="text-gray-600">Kunde siden {{ dateFormat(data.customer.created_at) }}</p>
          </div>

          <div class="mt-5">
            <p class="font-semibold text-sm text-gray-600">Tidslinje</p>
            <TimelineItem v-for="n in random(6)" :key="n" :text="randomString()" :color="timelineColor()" />
          </div>

          <div class="mt-5">
            <p class="font-semibold text-sm text-gray-600">Handlinger</p>

          </div>

        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import Modal from "../../components/Modal.vue";
import { ref } from "vue";
import {format, formatDistanceToNow} from "date-fns";
import { dotLongStrings } from "../../utils/UtilitiesPack";
import { da } from "date-fns/locale";
import { Ticket } from "../../utils/Ticket";
//@ts-ignore
import { ticketStoreObservable } from "../../store/TicketStore";
import TicketMessage from "./TicketMessage.vue";
import TimelineItem from "./TimelineItem.vue";
import faker from 'faker';
export default {
  name: "TicketModal",
  props: {
    ticket: Object,
  },
  components: {TimelineItem, TicketMessage, Modal },
  setup(props: any) {
    const ticketStore = ticketStoreObservable();
    //const data: Ticket|null = ticketStore.value.activeTicket;
    const data: Ticket = props.ticket;

    const relativeTimeFormat = (date: Date) =>
      formatDistanceToNow(date, {
        locale: da,
      });

    const dateFormat = (date: Date) => format(date, "d. MMM", {
      locale: da,
    });

    const random = (max: number) => Math.round(Math.random()*max+1);
    const randomString = () => faker.lorem.words(Math.random()*3+1);
    const timelineColor = (): string => {
      const colors = ["tealish", "crimson", "yellowish", "indigo"];
      return colors[Math.floor(Math.random()*colors.length)];
    };

    const lowercaseString = (str: string) => str.toLowerCase();

    return {
      data,
      relativeTimeFormat,
      dateFormat,
      lowercaseString,
      ticketStore,
      dotLongStrings,
      random,
      randomString,
      timelineColor
    };
  },
};
</script>

<style>
.min-w-ticket {
  min-width: 1020px;
}
</style>
