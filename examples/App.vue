<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { defaultContacts } from './_util/constant'
const FreeIM = ref()
onMounted(() => {
  console.log(FreeIM.value)
  if(FreeIM.value) {
    FreeIM.value.initContacts(defaultContacts())
  }
  
})
</script>
<template>
  <div class="wrapp">
    <free-im ref="FreeIM">
      <template #messages-fixed-top>
        <div style="background-color: #FFF;">
          1111
        </div>
      </template>
    </free-im>
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