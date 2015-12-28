<style scoped lang="stylus">
#box

	position absolute
	margin auto
	left 35%
	top 20%
	width 100
</style>
<template lang="jade">
div#box
	|{{username}} {{password}} {{recordar}}
	form.ui.form(name="login")
		.field
			.ui.left.icon.input
				input(autocomplete="true" ,type="text", placeholder="Utilizador...",v-model="username")
				i.user.icon
		.field
			.ui.left.icon.input
				input(autocomplete="true" ,type="text", placeholder="Password...",v-model="password")
				i.key.icon

		.field
			.ui.checkbox
				input.hidden(type="checkbox", tabindex="0")
				label(@click="getrecordar()") Recordar por 30 dias
		button.ui.blue.button(type="submit", @click.prevent="entrar()") Entrar
		button.ui.green.button(type="submit", @click.prevent="criar()") Criar conta
		button.ui.orange.button(type="submit", @click.prevent="recuperar()") Recuperar password
  

</template>

<script>
export default {
props:[],
data:function(){
	return {
		username:'',
		password:'',
		recordar:true
	}
},
ready:function(){
	 $('.ui.checkbox').checkbox();
},
methods:{
	getrecordar(){
		console.log(this.recordar);
		this.recordar=!this.recordar;
	},
	entrar(){
		console.log("entrar");

	},
}

  }
</script>