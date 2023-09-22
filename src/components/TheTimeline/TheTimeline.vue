<script setup>
import LeftTimeline from './LeftTimeline.vue'
import OtherSideTimeline from './OtherSideTimeline.vue'
import MobileTimeline from './MobileTimeline.vue'
const lists = [
  {
    heading: 'Hackathon Announcement',
    description:
      'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
    id: 1,
    date: 'November 18, 2023'
  },
  {
    heading: 'Teams Registration begins',
    description:
      'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
    id: 2,
    date: 'November 18, 2023'
  },
  {
    heading: 'Teams Registration ends',
    description: 'Interested Participants are no longer Allowed to register',
    id: 3,
    date: 'November 18, 2023'
  },
  {
    heading: 'Announcement of the accepted teams and ideas',
    description:
      'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
    id: 4,
    date: 'November 18, 2023'
  },
  {
    heading: 'Getlinked Hackathon 1.0 Offically Begins',
    description:
      'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    id: 5,
    date: 'November 18, 2023'
  },
  {
    heading: 'Demo Day',
    description:
      'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
    id: 6,
    date: 'November 18, 2023'
  }
]
</script>
<template>
  <section class="timeline">
    <div class="timeline__header">
      <h1>Timeline</h1>
      <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
    </div>

    <ul>
      <template v-for="list in lists" :key="list.id">
        <other-side-timeline
          v-if="list.id % 2 !== 0"
          :heading="list.heading"
          :description="list.description"
          :date="list.date"
          :step="list.id"
        ></other-side-timeline>
        <left-timeline
          v-else
          :heading="list.heading"
          :description="list.description"
          :date="list.date"
          :step="list.id"
        ></left-timeline>
      </template>
    </ul>
    <!-- Mobile -->
    <div class="timeline__mobile">
      <mobile-timeline
        v-for="list in lists"
        :key="list.id"
        :heading="list.heading"
        :description="list.description"
        :date="list.date"
        :step="list.id"
      ></mobile-timeline>
    </div>
  </section>
</template>
