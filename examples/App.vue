<script setup lang="ts">
import { ref, onMounted } from 'vue';

const FreeIM = ref(null)
onMounted(() => {
  console.log(FreeIM.value)
})
</script>
<template>
  <div class="wrapp">
    <free-im ref="FreeIM"/>
  </div>
</template>
<style scoped>
.wrapp {
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>