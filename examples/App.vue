<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { defaultContacts, messages } from './_util/constant'
import type { FreeInstance, Contact, PullMessageNext } from '../packages'

const freeIM = ref<FreeInstance>()


const userInfo = {
  id: '66',
  nickname: '陈翔',
  avatar: '陈翔',
}


onMounted(() => {
  freeIM.value?.initContacts(defaultContacts)
})

let _count = 0
const pullMessages = (contact: Contact, next: PullMessageNext, count: number) => {
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

const showMessageName = ref(false)
const toggleMessageName = () => {
  showMessageName.value = !showMessageName.value
}

</script>
<template>
  <div class="free-doc">
    <free-im ref="freeIM" @pullMessages="pullMessages" @send="send" :user-info="userInfo" :message-name="showMessageName">
    
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
    <div class="free-doc-buttons">
      <free-button @click="appendMessage">发送一条消息</free-button>
      <free-button @click="toggleMessageTop">消息列表头部插槽</free-button>
      <free-button @click="toggleMessageName">显示隐藏聊天窗口内名字</free-button>
    </div>

    <h2 class="free-doc-title">API</h2>
    <h2 class="free-doc-title">用户信息 User</h2>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>联系人ID</td>
          <td>string | number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>nickname</td>
          <td>联系人名称</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>avatar</td>
          <td>头像</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2 class="free-doc-title">联系人 Contact</h2>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>联系人ID</td>
          <td>string | number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>nickname</td>
          <td>名称</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>avatar</td>
          <td>头像</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>sort</td>
          <td>排序索引</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>lastMessage</td>
          <td>最近一条消息</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>lastMessageStatus</td>
          <td>最近一条消息状态</td>
          <td>'success' | 'error' | 'uploading'</td>
          <td>'success'</td>
          <td></td>
        </tr>
        <tr>
          <td>lastMessageTime</td>
          <td>最近一条消息时间戳</td>
          <td>number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>unread</td>
          <td>未读消息</td>
          <td>number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>group</td>
          <td>是否为群组</td>
          <td>boolean</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2 class="free-doc-title">消息 Message</h2>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>消息ID</td>
          <td>string | number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>time</td>
          <td>消息发送时间</td>
          <td>number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>type</td>
          <td>消息类型</td>
          <td>'text' | 'image' | 'file'</td>
          <td>'text'</td>
          <td></td>
        </tr>
        <tr>
          <td>status</td>
          <td>消息状态</td>
          <td>'success' | 'error' | 'uploading'</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>content</td>
          <td>消息内容</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>toContactId</td>
          <td>接受消息的联系人ID</td>
          <td>string | number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>fileName</td>
          <td>文件名称</td>
          <td>string</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>fileSize</td>
          <td>文件大小</td>
          <td>number</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>fromUser</td>
          <td>发送消息者信息</td>
          <td>
            <a href="">object</a>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2 class="free-doc-title">属性</h2>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>width</td>
          <td>宽度</td>
          <td>string | number</td>
          <td>860</td>
          <td></td>
        </tr>
        <tr>
          <td>height</td>
          <td>高度</td>
          <td>string | number</td>
          <td>580</td>
          <td></td>
        </tr>
        <tr>
          <td>messageName</td>
          <td>是否隐藏聊天窗口内的联系人名称</td>
          <td>boolean</td>
          <td>false</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2 class="free-doc-title">事件</h2>
    <table>
      <thead>
        <tr>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调参数</th>
          <th>版本</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>changeMenu</td>
          <td>切换左侧选项卡时触发</td>
          <td>(menuName: string): void</td>
          <td></td>
        </tr>
        <tr>
          <td>changeContact</td>
          <td>切换近期联系人时触发</td>
          <td>(currentContact: Contact): void</td>
          <td></td>
        </tr>
        <tr>
          <td>changeContact</td>
          <td>切换近期联系人时触发</td>
          <td>(currentContact: Contact): void</td>
          <td></td>
        </tr>
        <tr>
          <td>pullMessages</td>
          <td>聊天窗口滚动到顶部时或首次打开该联系人窗口时触发。调用 next 方法结束 loading 状态，设置 end 为 true 将不在触发该事件</td>
          <td>(contact: Contact, next: PullMessageNext) => void</td>
          <td></td>
        </tr>
        <tr>
          <td>send</td>
          <td>发送消息时触发</td>
          <td>
            (contact: Contact, message: Message, next: SendNext) => void
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2 class="free-doc-title">类型定义</h2>
    <div class="free-doc-code">
      import type { FreeInstance, Contact, PullMessageNext } from 'free-im';
    </div>
  </div>
  
</template>
<style scoped lang="less">
.free-doc {
  padding-top: 100px;
  padding: 100px 100px 0;
  &-buttons {
    padding: 20px 0;
    button {
      margin-right: 10px;
    }
  }
  &-title {
    font-weight: 500;
    font-size: 20px;
    color: #000;
    font-family: Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji",sans-serif;
  }
  &-code {
    background: #f5f5f5;
    margin: 16px 0;
    padding: 12px 20px;
    overflow: auto;
  }
  table {
    font-size: 13px;
    width: 100%;
    color: #000;
    margin: 2em 0;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    tbody tr:hover {
      background: rgba(60,90,100,.04);
    }
    th {
      padding-top: 14px;
      border-width: 1px 0 2px 0;
      color: #5c6b77;
      font-weight: 500;
      white-space: nowrap;
      background: rgba(0,0,0,.02);
    }
    th,
    td {
      padding: 12px;
      text-align: left;
      border: 1px solid #f0f0f0;
      border-width: 1px 0;
    }
    td a {
      color: #1890ff;
      text-decoration: none;
    }
    th:first-child,
    td:first-child {
      border-left: 1px solid #f0f0f0;
    }
    th:last-child,
    td:last-child {
      border-right: 1px solid #f0f0f0;
    }
    td:first-child {
      width: 18%;
      color: #595959;
      font-weight: 600;
      white-space: nowrap;
    }
    td:nth-child(3) {
      width: 26%;
      color: #c41d7f;
      font-size: 13px;
    }
    td:nth-child(2) {
      // width: 55%;
    }
  }
}
</style>