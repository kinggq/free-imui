<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { defaultContacts, messages } from './_util/constant'
import type { FreeInstance, Contact } from '../packages'

export default defineComponent({
  setup(_, {slots}) {
    const freeIM = ref<FreeInstance>()
    
    onMounted(() => {
        freeIM.value?.initContacts(defaultContacts)
    })

    const pullMessages = (contact: Contact, next: any) => {
      console.log(contact)
      if (contact.id === 2) {
        setTimeout(() => {
          next(messages, true)
        }, 2000)
      } else {
        next([], true)
      }
      
    }

    return {
      freeIM,
      pullMessages
    }
  }
})

</script>
<template>
  <div class="wrapp">
    <free-im ref="freeIM" @pullMessages="pullMessages">
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