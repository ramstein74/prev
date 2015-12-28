<style lang="stylus">
[data-tooltip]
  position relative
  z-index 2
  cursor pointer
[data-tooltip]:before,
[data-tooltip]:after
  visibility hidden
  -ms-filter "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"
  opacity 0
  pointer-events none
[data-tooltip]:before
  position absolute
  bottom 150%
  left 50%
  margin-bottom 5px
  margin-left -80px
  padding 7px
  width 160px
  -webkit-border-radius 3px
  -moz-border-radius 3px
  border-radius 3px
  background-color #000
  background-color hsla(0, 0%, 20%, 0.9)
  color #fff
  content attr(data-tooltip)
  text-align center
  font-size 14px
  line-height 1.2
[data-tooltip]:after
  position absolute
  bottom 150%
  left 50%
  margin-left -5px
  width 0
  border-top 5px solid #000
  border-top 5px solid hsla(0, 0%, 20%, 0.9)
  border-right 5px solid transparent
  border-left 5px solid transparent
  content " "
  font-size 0
  line-height 0
[data-tooltip]:hover:before,
[data-tooltip]:hover:after
  visibility visible
  -ms-filter "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"
  opacity 1

.top2 
  position relative
  cursor pointer
  border-radius 6px
  color white
  font-size 10px
  padding 5px 0px 2px 5px
  background-color #16A085
  margin 0 0 10px 10px
</style>
<template lang="jade">
div(@click="toggle(mp.name)")
  div(v-show="mp.help==true")
    span.ui.orange.circular.label(data-tooltip="my tooltip", v-for="nc in ncs |filterBy pote in 'id'", @click="setNC(mp,nc)") {{nc.value}}
  .top2
    span.ui.black.circular.label(v-show="isMacro()") {{mp.nc}}
    span.tag(id="{{myid}}", data-mpid="{{mp.name}}", data-pote="{{pote}}") {{mp.name}}
    span(style="color:black;position:absolute;right:2px;") 0,00&#160;Kg 

</template>

<script>
export default {
    props: ['mp','myid','items','pote'],
data:function(){
  	return {
  		ncs:[
				{"id":"1","GM":"GM1","descr":"Tanque Reservatório 3","tipo":"Sólidos","value":"a"},
				{"id":"1","GM":"GM1","descr":"Tanque Reservatório 5","tipo":"Sólidos","value":"b"},
				{"id":"2","GM":"GM1","descr":"Tanque Reservatório 4","tipo":"Sólidos","value":"c"},
				{"id":"2","GM":"GM1","descr":"Tanque Reservatório 6","tipo":"Sólidos","value":"d"},
				{"id":"7","GM":"GM2","descr":"Silo de Resina 2","tipo":"Sólidos","value":"e"},
				{"id":"8","GM":"GM2","descr":"Silo de Resina 3","tipo":"Sólidos","value":"f"}
			]
  	}
  },
  ready:function(){
    console.log("aa");
  },
  methods:{


  	isMacro:function(){
  		return true;
  	},
  	setNC:function(mp,nc){
  		 this.items.forEach(function(item){
  			if (mp.name==item.name){
  				item.nc=nc.value;

  			}
  		});
  	},
  	toggle:function(tg){
  		this.items.forEach(function(item){
  			if (tg==item.name){
  				item.help=!item.help;
  			}
  		});
  	}
  }
  }
</script>