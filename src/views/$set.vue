<template>
  <div>
    <div v-for="(item,index) in list" :key='index'>
        {{item.name}}{{item.id}}
    </div>
    <button @click="changeData">改变</button>
  </div>
</template>

<script>
export default {
  name: 'Set',
  data () {
    return {
      list: [
        { name: '小明', id: 16 },
        { name: '小张', id: 18 }
      ]
    }
  },
  mounted () {
    // this.list[0] = { name: '张三', id: 20 }
    console.log(this.list)
  },
  methods: {
    changeData () {
      this.list[0] = { name: '张三', id: 20 }
      //   this.$set(this.list, 2, { name: '李四', id: 22 }) // 改变的数据源 要改变\添加具体数据 重新赋的值
      console.log(this.list)
    }
  }
}
</script>

<style>

</style>
