<script setup lang="ts"></script>
<template>
  <div>
    <div>
      <h2><slot /></h2>
      <p><slot name="description" /></p>
    </div>
    <div>
      <p></p>
      <h3><slot name="number" /></h3>
    </div>
    <div>
      <slot name="date" />
    </div>
  </div>
</template>
