<script setup lang="ts">
const lists = [
  {
    title: 'Innovation and Creativity',
    description:
      'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
  },
  {
    title: 'Functionality',
    description:
      'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
  },
  {
    title: 'Impact and Relevance',
    description:
      'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
  },
  {
    title: 'Technical Complexity',
    description:
      'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
  },
  {
    title: 'Adherence to Hackathon Rules',
    description:
      'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
  }
]
</script>

<template>
  <section class="attributes">
    <p class="attributes--bg1"></p>
    <figure>
      <img src="../../assets/images/judge.png" alt="" />
    </figure>
    <div>
      <section-header heading="Judging Criteria" span="Key attributes"></section-header>
      <ul>
        <li v-for="(list, index) in lists" :key="index">
          {{ list.title }}: <span>{{ list.description }}</span>
        </li>
      </ul>
      <app-button class="attributes__button">Read More</app-button>
    </div>
    <p class="attributes--bg2"></p>
  </section>
</template>
