<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { defaultContacts, messages } from './_util/constant'
import type { FreeInstance, Contact } from '../packages'

const freeIM = ref<FreeInstance>()

const obj = ref([{name: '1'}, {name: 2}, {name: 3}])

obj.value[0].name = 'antfu'
console.log(obj)

const userInfo = {
  id: '66',
  nickname: '陈翔',
  avatar: '陈翔',
}


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

const send = (contact: Contact, messages: string, next: any) => {
  // console.log(contact, messages);
  setTimeout(() => {
    next(messages, contact, 'error')
  }, 3000)
}


const msgFixedTop = ref(false)
const toggleMessageTop = () => {
  msgFixedTop.value = !msgFixedTop.value
}

const appendMessage = () => {
  freeIM.value?.appendMessage({
      id: '66',
      time: new Date().getTime(),
      type: 'text',
      status: 'success',
      content: '我发了一条消息给你',
      toContactId: 3,
      from: {
          id: 3,
          nickname: '冷檬',
          avatar: '冷檬',
      }
  })
}

</script>
<template>
  <div class="wrapp">
    <div v-for="item in obj" :key="item.name">
      {{ item.name }}
    </div>
    <!-- <Test/> -->
    <!-- <div v-for="item in arr">{{ item }}</div> -->
    <free-im ref="freeIM" @pullMessages="pullMessages" @send="send" :user-info="userInfo">
    
      <template v-if="msgFixedTop" #messages-fixed-top>
        <div style="background-color: #FFF;">
          <input type="text"
            style="
            
            "
          >
        </div>
      </template>
      <!-- <template #contact-detail="{ contact }">
        <div>{{ contact }}</div>
      </template> -->
    </free-im>
    
  </div>
  <div>
    <free-button @click="appendMessage">发送一条消息</free-button>
    <free-button @click="toggleMessageTop">消息列表头部插槽</free-button>
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