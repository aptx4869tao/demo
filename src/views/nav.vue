<template>
  <div>
      <div v-for="(item, index) in datas" :key="index">
          <div>{{item.ch}}</div>
      </div>
  </div>
</template>

<script>
// import bus from '../util/bus'

export default {
  name: 'Nav',
  data () {
    return {
      datas: []
    }
  },

  mounted () {
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.datas = this.$route.params.data
      // this.datas = JSON.parse(localStorage.getItem('data'))
    }
  }

}
</script>

<style>

</style>
