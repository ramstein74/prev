
<style lang="stylus">
#dragdrop
  display inline
  top 10%


  position absolute
.box
  width 200px
#containment 
  background-color #FFA
  height 230px
#fundo 
  margin 0 auto
  width 720px
</style>
<template lang="jade">
#fundo
  div
  div
    #dragdrop
      #containment
        table
          tr
            td
              .box
                pote(name="1", :items="items")
                pote(name="2", :items="items")
                pote(name="3", :items="items")
                pote(name="4", :items="items")
                pote(name="5", :items="items")
                pote(name="6", :items="items")
            td
              .box
                pote(name="Mat Primas", :items="items")
            td
              .box
                pote(name="Resinas", :items="items")
                pote(name="Carga", :items="items")
                pote(name="Líquidos", :items="items")
                pote(name="Sólidos", :items="items")
</template>

<script>
props:[];
import pote from './formind/pote.vue'

export default {
	data(){
		return {
  		 items: [
		      { name: 'Foo' ,pote:'1',help:true,nc:'?'},
		      { name: 'Bar' ,pote:'Mat Primas',help:false,nc:'?'}
   			 ]
		}
	},

	  ready:function(){

  },
	components:{
    pote
},
  }
</script>