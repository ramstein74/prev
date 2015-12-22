<style scoped lang="stylus">

</style>

<template lang="jade">
a.item
  i.icon(:class="[icon]")
  div(@click="setView()")
      |{{title}}
</template>

<script>
export default {
    props:['title','icon','component'],
    data () {
                return {

                }
  },
  computed:{

  },
  methods:{

      setView(){
            console.log(this.component);
            this.$dispatch('new-view',this.component);
          
        }
  }
}
</script>