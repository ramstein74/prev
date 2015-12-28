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
				input(type='checkbox')
				label Lembrar 30 dias

		button.ui.button.green(:class="{ disabled: press}", type='submit', @click.prevent='signIn()') Entrar
		button.ui.button.blue(:class="{ disabled: press}", type='submit', @click.prevent='signUp()') Criar conta
		button.ui.button.red(:class="{ disabled: false}", type='submit', @click.prevent='lostIt()') Perdi a password
		button.ui.button.yellow(:class="{ disabled: false}", type='submit', @click.prevent='logOut()') Sair
  

</template>

<script>
import cookie from './user/cookie.vue'
export default {
  components:{
    cookie
  },	
props:[],
data:function(){
	return {
		username:'',
		password:'',
		recordar:true
	}
},
  computed:{
    press:function(){
      return !(this.username.length && this.password.length)
    }
  },
ready:function(){
	 $('.ui.checkbox').checkbox();
},
methods:{
lostIt:function(username){
              toastr.warning('...Please wait....');
              console.log("lost it");
                  dpd.template.post({"template": 'register.html', "data": {user:'antonio',texto:'bom dia macaco'}}, function(data) {
                      dpd.email.post({
                      from:"File Manager<antonio.rr@asd.pt>",
                      to      : "antonio.ramos@cires.pt",
                      subject : 'Reset your password',
                      html    : data.html
                    }, function ( err, results ) {
                        console.log(results);
                        toastr.info('Email sent');
                    });
                });
          } ,       
          signUp:function() {
              dpd.users.post({"username": this.username, "password": this.password}, function(user, err) {
              if(err) return toastr.error(err.errors.username);
              toastr.info('User created! <br>Press sign in to enter.');
              // this.signIn();
            });
          },
          signIn:function() {
            that=this;
              toastr.warning("Login you in. Please wait...");
              dpd.users.login({
              username: this.username,
              password: this.password
              }, function(result, error)
                {
                if (!error){
                  dpd.users.me(function(result, error) {
                                      console.log(result);
                                      that.$dispatch('log-event', {"event":"UserLogin","username":result.username,userid:result.id});
                                      toastr.info("Logged in.");
                                      that.isLab=result.roles.indexOf('lab')>-1?true:false;
                                      that.isProd=result.roles.indexOf('prod')>-1?true:false;
                                      that.isCont=result.roles.indexOf('cont')>-1?true:false;
                                      that.user = result.username;
                                       $('html,body').animate({
                                         scrollTop: $("div.marker.green").offset().top
                                       },2000);
                                    });
                }
                else {
                  toastr.error(error.message);
                }
                }
                );
            },
          logOut:function() {
              that=this;
              this.currentUser=null;
              dpd.users.logout(function(result, error) {
                if (error){toastr.error(error);return}
                toastr.info('Cleared your browser cache');
                that.$broadcast('logOut', "here i go");
                that.user="";
              });
          }
}

  }
</script>