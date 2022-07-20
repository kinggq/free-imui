import { defineComponent, inject } from 'vue';
import { FreeInstance } from '../index'
import { makeBooleanProp, makeNumberProp, makeStringProp } from '../utils';

const DialogProps = {
    width: makeNumberProp(300),
    title: makeStringProp('Basic Modal'),
    header: makeBooleanProp(true),
    footer: makeBooleanProp(true),
    okText: makeStringProp('确定'),
    cancelText: makeStringProp('取消'),
    mask: makeBooleanProp(true),
    maskClosable: makeBooleanProp(true),
    show: makeBooleanProp(false),
}

export default defineComponent({
    name: 'free-dialog',
    props: DialogProps,
    emits: ['update:show'],
    setup(props, { emit, slots }) {
        const { width, height } = inject<any>('freeIM')
        
        const updateShow = () => {
            emit('update:show', false)
        }
        
        const maskUpdateShow = () => {
            if (!props.maskClosable) return
            emit('update:show', false)
        }

        return () => {
            return (
                <div v-show={ props.show } class="free-dialog" style={`width:${width}px;height:${height}px;`}>
                    <div class="free-dialog-mask" onClick={ maskUpdateShow }></div>
                    <div class="free-dialog-content" style={{ width: `${props.width}px` }}>
                        <div class="free-dialog-header" v-show={ props.header }>
                            <div class="free-dialog-header__title">{ props.title }</div>
                            <i class="free-icon-close" onClick={ updateShow }></i>
                        </div>

                        <div class="free-dialog-body">
                            { slots.default ? slots.default() : '' }
                        </div>

                        <div class="free-dialog-footer" v-show={ props.footer }>
                            <free-button onClick={ updateShow }>{ props.cancelText }</free-button>
                            <free-button style="margin-left: 10px;">{ props.okText }</free-button>
                        </div>
                    </div>
                </div>
            )
        }
    }
})