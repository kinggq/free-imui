import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        const arr = reactive([1,2,3,4,5])

        // arr.set('1', [1,2,3,4,5])
        setTimeout(() =>{
            arr.unshift(...[6,7,8,9])
        }, 3000)
        return () => {
            return arr.map((item: any) => {
                return (
                    <div>{item}</div>
                )
            })
        }
    }
})