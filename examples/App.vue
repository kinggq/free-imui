<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { defaultContacts } from './_util/constant'
import type { FreeInstance } from '../packages'

export default defineComponent({
  setup(_, {slots}) {
    const freeIM = ref<FreeInstance>()
    
    onMounted(() => {
        freeIM.value?.initContacts(defaultContacts)
    })

    return {
      freeIM,
    }
  }
})

</script>
<template>
  <div class="wrapp">
    <free-im ref="freeIM">
      <!-- <template #messages-fixed-top>
        <div style="background-color: #FFF;">
          1111
        </div>
      </template> -->
      <!-- <template #contact-detail="{ contact }">
        <div>{{ contact }}</div>
      </template> -->
    </free-im>
    <free-button ref="fbutton">11</free-button>
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