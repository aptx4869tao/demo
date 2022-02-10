<template>
  <div class="box">
    <div class="boxList">
      <div v-for="(item,index) in dataList" :key="index">
        <div class="listDiv">{{item.en}} : {{item.ch}}</div>
      </div>
    </div>

    <el-col :span="12">
      <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="搜索内容"
        :trigger-on-focus="false"
        value-key="en"
        popper-class="dis"
        clearable
        @clear="clearList"
      ></el-autocomplete>
      <div v-for="(item,index) in selectData" :key="index">
        <div>{{item.en}}{{item.ch}}</div>
      </div>
    </el-col>

    <el-col :span="12">
      <el-input type="number" v-model="num" style="width:80px"></el-input>
      <el-button type="danger" @click="search(num)">确定</el-button>
    </el-col>
  </div>
</template>

<script>
// import bus from '../util/bus'
export default {
  name: 'Index',
  data () {
    return {
      navData: [],
      a: [],
      num: 4,
      selectData: [],
      state2: '',
      dataList: [
        { en: 'file', ch: '文件' },
        { en: 'commend', ch: '命令，指令' },
        { en: 'use', ch: '使用' },
        { en: 'program', ch: '程序' },
        { en: 'line', ch: '行，线路' },
        { en: 'if', ch: '如果' },
        { en: 'display', ch: '显示' },
        { en: 'set', ch: '集合，设置' },
        { en: 'key', ch: '键，关键字' },
        { en: 'list', ch: '列表' },
        { en: 'by', ch: '凭，靠' },
        { en: 'press', ch: '按，压' },
        { en: 'with', ch: '用，与' },
        { en: 'format', ch: '格式' },
        { en: 'change', ch: '改变' },
        { en: 'cursor', ch: '光标' },
        { en: 'directory', ch: '目录' },
        { en: 'from', ch: '从，来自' },
        { en: 'menu', ch: '菜单，目录' },
        { en: 'option', ch: '任选，选择' },
        { en: 'character', ch: '字符，符号' },
        { en: 'current', ch: '电流' },
        { en: 'type', ch: '类型' },
        { en: 'screen', ch: '屏幕' },
        { en: 'specify', ch: '指定，规定' },
        { en: 'move', ch: '移动' },
        { en: 'disk', ch: '盘，磁盘' },
        { en: 'text', ch: '文本' },
        { en: 'drive', ch: '驱动' }
      ]
    }
  },

  mounted () {},
  methods: {
    querySearch (queryString, cb) {
      var restaurants = this.dataList
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      this.selectData = results
      cb(results)
    },
    createFilter (queryString) {
      return restaurant => {
        return restaurant.en.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    clearList () {
      this.selectData = []
    },
    search (number) {
      this.a = []
      if (number < this.dataList.length) {
        this.com(number)
        this.a.forEach(item => {
          this.navData.push(this.dataList[item])
        })
        // localStorage.setItem('data', JSON.stringify(this.navData))
        this.$router.push({
          name: 'nav',
          // path: '/nav',
          params: {
            data: this.navData
          }
        })
      }
    },
    com (number) {
      const num = Math.floor(Math.random() * (19 - 0 + 1)) + 1
      if (!this.a.includes(num)) {
        this.a.push(num)
      }
      if (this.a.length === Number(number)) {
        return this.a
      } else {
        this.com(Number(number))
      }
    }
  }
}
</script>
<style>
.box {
  width: 100%;
}
.boxList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.listDiv {
  width: 150px;
  height: 50px;
  /* line-height: 50px; */
  text-align: center;
  background: rgb(230, 229, 229);
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
