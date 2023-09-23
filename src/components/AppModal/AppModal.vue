<script setup>
const emits = defineEmits(['close-modal'])

const closeModal = () => {
  emits('close-modal')
}
</script>

<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <slot>Overlay Content here</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 14, 40, 0.93);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-container {
  border-radius: 0.5rem;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 40%;
  height: 75%;
  margin: 0 auto;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    width: 80%;
    height: 85%;
  }
}
</style>
