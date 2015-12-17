<style scoped lang="stylus">
.ui.icon.input input
  padding-right 0 !important
  width 95px
  text-align right 
  vertical-align middle
  background-color #78FA89
  margin 7px
td
  font-size 20px
  padding-right 10px
  color #0f6d92
  border-spacing 2px 2px

</style>

<template lang="jade">


|here i come

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