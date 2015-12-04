<style scoped lang="stylus">


</style>

<template lang="jade">
div
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