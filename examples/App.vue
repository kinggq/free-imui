<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import { defaultContacts, messages } from './_util/constant'
import type { FreeInstance, Contact } from '../packages'
import Test from './test'
export default defineComponent({
  components: {Test},
  setup(_, {slots}) {
    const freeIM = ref<FreeInstance>()
    const arr = ref([1,2,3,4])
    const userInfo = {
      id: '66',
      nickname: '陈翔',
      avatar: '陈翔',
    }

    setTimeout(() => {
      arr.value.push(...[5,6,7,8])
    }, 3000)
    onMounted(() => {
        freeIM.value?.initContacts(defaultContacts)
    })
    let _count = 0
    const pullMessages = (contact: Contact, next: any, count: number) => {
      if (contact.id === 2) {
        setTimeout(() => {
          if (_count < 20) {
            next(messages(_count))
            _count += 10
          } else {
            next([], true)
          }
          
        }, 5000)
      } else {
        setTimeout(() => {
          next([], true)
        }, 2000)
      }
      
    }

    const send = (contact: Contact, content: string, next: () => {}) => {
      console.log(contact, content);
      setTimeout(() => {
        next()
      }, 1000)
    }

    return {
      freeIM,
      pullMessages,
      arr,
      userInfo,
      send
    }
  }
})
</script>
<template>
  
  <div class="wrapp">
    <!-- <Test/> -->
    <!-- <div v-for="item in arr">{{ item }}</div> -->
    <free-im ref="freeIM" @pullMessages="pullMessages" @send="send" :user-info="userInfo">
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