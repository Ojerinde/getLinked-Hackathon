<script setup lang="ts">
const lists = [
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
  },
  {
    question: 'What happens if I need help during the hackathon?',
    answer:
      'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer:
      'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
  },
  {
    question: 'Can I join a team or do I have to come with one?',
    answer:
      'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
  },
  {
    question: 'What happens after the hackathon ends?',
    answer:
      'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
  },
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
  }
]
</script>

<template>
  <section class="faqs">
    <div>
      <section-header heading="Frequently Ask" span="Questions"></section-header>
      <p>
        We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
      </p>
      <ul>
        <li v-for="(list, index) in lists" :key="index">
          <span> {{ list.question }}</span> <img src="../../assets/icons/plus.svg" alt="" />
        </li>
      </ul>
    </div>
    <figure>
      <img src="../../assets/images/question.png" alt="" />
    </figure>
  </section>
</template>
