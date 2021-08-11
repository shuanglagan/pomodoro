<template lang="pug">
#settings
  b-table(:items='items' :fields="fields" @row-clicked='select')
    template(#cell(src)='data')
      audio(controls :src='require("../assets/"+data.value)')
    template(#cell(select)='data' )
      font-awesome-icon(:icon='["fas", "check"]' v-if='sound === data.item.src')
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      items: [
        { name: '鈴聲', src: 'alarm.mp3' },
        { name: 'Yay', src: 'yay.mp3' }
      ],
      fields: [
        { key: 'name', label: '名稱' },
        { key: 'src', label: '試聽' },
        { key: 'select', label: '選擇' }
      ]
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    }
  },
  methods: {
    select (item) {
      this.$store.commit('selectSound', item.src)
    }
  }
}
</script>

<style>
#settings {
  width: 70%;
  height: 90%;
  background: white;
  position: absolute;
  top: 5%;
  left: 25%;
  border-radius: 5px;
}
</style>
