<style scoped lang="stylus">
span
  color red
td 
  font-size 16px
tr:hover
  background-color #00b5ad +10%
.checked::before
  color green
  font-weight bold
  font-size 20px 
  content  '\2713'

.checked:hover
  cursor pointer

</style>

<template lang="jade">

tr(@click="toggle(this)")
  td {{ cod }}
  td {{ desc }}
  td {{ cume }}
  td {{ exist }}
  td {{ unidade }}
  template(v-if="filter")
    td 
      .ui.input.focus
        input(type='text', v-model='quantity')
    td {{ percentage |currency ''}}% 
  td "custoTon"
  td(:class="{'checked':checked}") 
</template>

<script>
export default {
  props: ['cod', 'desc','cume','exist','unidade','quantity', 'total','checked'],
  data () {
    return {
    }
  },
  methods:{
  toggle:function(item){
          console.log("toggling");
          item.checked=!item.checked;
          // item.checked=!='selected' ?  item.checked='selected' :item.checked='';
          if (item.sit==false)  item.phr=0;
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