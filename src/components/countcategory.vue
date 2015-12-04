<template lang="jade">
&nbsp
a.ui.cyan.circular.label {{total}}
a.ui.olive.circular.label {{selected}}
</template>

<script>
export default {
  props: ['total', 'selected'],
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