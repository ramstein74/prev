<template>
</template>
<script>
export default {
    props:['clientes'],
    data () {
    return {
    }
  },
  ready:function(){
    console.log("load ready");
    this.$http.get('http://localhost:80/Vue/default/clients.json', (data, status, request) =>{
      this.clientes=[];
      data.forEach((d)=>{
        this.clientes.push(d);

      });  
      }).error(function (data, status, request) {
          console.log("erro loading clients",data,status,request);
      }).then(function(){
        console.log("end loading clients");
        toastr.info("clientes carregados");
      })
  }
  }
</script>