<template>
    <li>
        <span @click="toggle(data)">
            {{ data.name }}
        </span>
        <ul v-show="open" v-if="hasChild">
          <router-link :key="item.com" v-for="item of data.children" :to="item.com">
            <tree-menu v-for="(item, index) in data.children" :data="item" :key="index"></tree-menu>
          </router-link>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'TreeMenu',//组件递归必须有name属性 不然无法递归
    props: {
        data: {
            type: Object, //校验父组件传过来的数据是佛正确
            required: true //是否为必传数据
        }
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        hasChild() {
          console.log(this.data)
            return this.data.children && this.data.children.length //判断当前子组件有没有数据
        }
    },
    methods: {
        toggle(data) {
          console.log("获取当前选中要素")
          console.log(data)
            if(this.hasChild) {
                this.open = !this.open
            }
        }
    }
}
</script>
