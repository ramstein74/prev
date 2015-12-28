<style scoped lang="stylus">
.total
  color black
  font-size 1em
.selected
  color #aeaeae
  font-size 1em
</style>

<template lang="jade">
div.ui.mini.label {{total}}/{{selected}}

</template>

<script>
export default {
  props: ['total', 'selected','resinas'],
  data () {
    return {
    }
  },
  methods:{

  },
  computed:{
	f1() {

	}
  }
}
</script>