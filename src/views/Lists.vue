 <template lang="pug">
#lists
   b-col(cols='10')
    b-form-group(invalid-feedback='至少輸入兩個字' :state='state')
      b-form-input(v-model='newitem' :state='state' trim @keydown.enter='additem' placeholder='Type and press enter')
      br
      b-table.a(:items='list' :fields='listfields')
        template(#cell(name) = 'data')
          b-form-input(
            v-if='data.item.edit'
            v-model='data.item.model'
            trim
            :state='data.item.state'
            @keydown.enter='changelist(data.index)'
            @keydown.esc='cancellist(data.index)'
          )
          span(v-else) {{ data.value }}
        template(#cell(action) = 'data')
          span(v-if='!data.item.edit')
            b-btn(@click='editlist(data.index)' variant='success')
              font-awesome-icon(:icon='["fas", "pen"]')
            b-btn(@click='dellist(data.index)' variant='danger')
              font-awesome-icon(:icon='["fas", "trash"]')
          span(v-else)
            b-btn(@click='changelist(data.index)' variant='success')
              font-awesome-icon(:icon='["fas", "check"]')
            b-btn(@click='cancellist(data.index)' variant='danger')
              font-awesome-icon(:icon='["fas", "undo"]')

</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newitem: '',
      listfields: [
        { key: 'name', label: '' },
        { key: 'action', label: '' }
      ]
    }
  },
  computed: {
    state () {
      if (this.newitem.length === 0) {
        return null
      } else if (this.newitem.length < 2) {
        return false
      } else {
        return true
      }
    },
    list () {
      return this.$store.getters.list.map(item => {
        if (item.model.length < 2) {
          item.state = false
        } else {
          item.state = true
        }
        return item
      })
    },
    finished () {
      return this.$store.state.finishd
    }
  },
  methods: {
    additem () {
      if (this.state) {
        this.$store.commit('addList', this.newitem)
        this.newitem = ''
      } else {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '必須要兩個字以上'
        })
      }
    },
    editlist (index) {
      this.$store.commit('editList', index)
    },
    changelist (index) {
      console.log(index)
      if (this.list[index].state) {
        this.$store.commit('changeList', index)
      }
    },
    cancellist (index) {
      this.$store.commit('cancellist', index)
    },
    dellist (index) {
      this.$store.commit('delList', index)
    }
  }
}
</script>

<style>
#lists {
  width: 80%;
  height: 90%;
  /* background: rgb(241, 240, 240); */
  position: absolute;
  top: 10%;
  left: 30%;
  border-radius: 5px;
}
.table{
  background: white;
}
</style>
