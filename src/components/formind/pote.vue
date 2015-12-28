<style lang="stylus">
.sortable-list
	background-color #fff
	list-style none
	margin 0
	min-height 10px
	padding 10px
.sortable-item 
	background-color #FFF
	border 1px solid #000
	cursor move
	/*display: block;*/
	font-weight bold
	margin-bottom 5px
	padding 0px 0
	text-align center
</style>

<template lang="jade">
span.ui.blue.ribbon.label {{name}}
div
  ul.sortable-list
    li(v-for="item in items |filterBy name") 
      macro-doses(:pote="name", :mp="item", :myid="name", :items="items")
</template>

<script>
import macroDoses from './macrodoses.vue';
export default {
props: ['name','items'],
data(){
	return {
		  		
	}
},	
  components:{
    macroDoses
},
ready:function(){
	  	that=this;
  		var lista=['1','2','3','4','5','6','Mat Primas','Resinas','Carga','Líquidos','Sólidos'];
  		$('#dragdrop .sortable-list').each(function(i,item){
  		$(this).sortable({
		connectWith: '#dragdrop .sortable-list',
		containment: '#containment',
		 receive : function( event, ui) {
           temp=$(this).find(".tag").attr('data-mpid');
           console.log(temp);
           that.items.forEach(function(item){
           		if (item.name==temp){
           			item.pote=lista[i];
           		}
           });  
        }  
	});
  		})
}
}
</script>