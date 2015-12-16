<style scoped lang="stylus">
.ui.icon.input input
  padding-right 0 !important
  width 85px
  text-align right 
  vertical-align middle
  background-color #78FA89
</style>

<template lang="jade">


tr
  td 
    .ui.mini.icon.input
      input(type="number", name="numericInput", size="3", min="0", step="0.000001", value="0")
  td 
    | {{99.989}}
  td 
    | {{99.98989 |currency "€"}}
  td 
    i.delete.icon(@click="toggle()") 
    span {{mp.desc}}



</template>

<script>
export default {
  props: ['mp'],
  data () {
    return {
    }
  },
  methods:{

  toggle:function(){
          console.log(this.mp.checked);
          this.mp.checked=!this.mp.checked;
        }
  


  },
  computed:{

	}
  }
</script>