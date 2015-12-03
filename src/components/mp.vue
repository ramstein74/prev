<style scoped lang="stylus">
span
  color red
</style>

<template lang="jade">

tr
  td {{ cod }}
  td {{ desc }}
  td {{ cume }}
  td {{ exist }}
  td {{ unidade }}

  td 
    .ui.input.focus
      input(type='text', v-model='quantity')
  td {{ percentage |currency ''}}% 
  td "custoTon"
  td 
    span x
</template>

<script>
export default {
  props: ['cod', 'desc','cume','exist','unidade','quantity', 'total'],
  data () {
    return {
    }
  },
  computed:{
	percentage() {
        if ( ! parseInt(this.total) ) return 0
        
    	return this.quantity / this.total * 100
   		}
	}
  }
</script>