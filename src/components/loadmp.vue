<template>
</template>
<script>
export default {
    props:['mpdata'],
    data () {
    return {
    }
  },
  ready:function(){
    console.log("load ready");
    this.$http.get('http://localhost/Vue/default/getStocks.json', (data, status, request) =>{
      this.mpdata=[];
      data.forEach((d)=>{
        let temp={
          cod:d.cod,
          checked:false,
          desc:d.desc,
          cume:d.cume,
          exist:d.exist,
          unidade:d.unidade,
          name: d.desc,
          quantity: 0
        }
        this.mpdata.push(temp);
      });  
      }).error(function (data, status, request) {
          console.log("erro",data,status,request);
      }).then(function(){
        console.log("end loading");
      })
  }
  }
</script>