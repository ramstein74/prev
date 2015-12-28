

<style scoped lang ="stylus">

.cookies-wrapper
  position fixed
  z-index 4000
  bottom 0
  left 0
  right 0
  height auto
  width 100%
  display table
  background rgba(0,0,0,.5)
  -webkit-transition opacity 300ms ease
  -moz-transition opacity 300ms ease
  -o-transition opacity 300ms ease
  transition opacity 300ms ease
  &.hide
    display none
  &.dismiss
    opacity 0
  .cookies-message
    margin 0
    padding 15px 10px
    display table-cell
    vertical-align middle
    font-size 13px
    font-family sans-serif
    color white
    text-align left
    width 93%
  .button-wrapper
    margin 0
    padding 0
    display table-cell
    vertical-align middle
    width 6%
    pointer-events auto
    button
      margin 0
      padding 0
      width 100%
      height 100%
      border 0
      border-radius 0
      font-size 20px
      font-family sans-serif
      font-weight 700
      color white
      background transparent
      border-left 1px rgba(0,0,0,.2) solid
      cursor pointer
      outline none
      -webkit-transition background 300ms ease
      -moz-transition background 300ms ease
      -o-transition background 300ms ease
      transition background 300ms ease
      &:hover
        background rgba(0,0,0,.8)



</style>
<template lang="jade">
.cookies-wrapper(:class="{ dismiss : dismissCookie, hide:cookieSet }")
  .cookies-message
    | {{message}}
  .button-wrapper
    button#close-button(@click="closeCookieMessage")
      | &#215;
</template>
<script>

module.exports = {

  props : ['cookie-message', 'days-to-expire'],
                            

  data() {
    /**
    * @param {string} cookieName
    * @param {message} cookieName
    * @param {expiresIn} cookieName
    */
      return {
        cookieName : 'fileManager',
        message : 'your message here',
        expiresIn : 365,
        cookieSet : false,
        dismissCookie : false
      }
  },
  ready() {
    //-- check for user settings/properties
    this.message = (this.cookieMessage !== undefined || this.cookieMessage)
                      ? this.cookieMessage
                      : this.message
    this.expiresIn = (this.daysToExpire !== undefined || this.daysToExpire)
                      ? this.daysToExpire
                      : this.expiresIn
    //--
    this.init()
  },
  events:{
    'logOut':function(){
      cvalue="";
      expires=-1;
      document.cookie = "fileManager=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      toastr.info("called logOut Event");
    }
  },
  methods: {
    /**
     * initialise the component
     */
    init() {
      this.checkCookie();
    },
    /**
     * check for a existing cookie
     */
    checkCookie() {
      //-- get the required cookie
      toastr.info("checking cookie");
      let cookie = this.getCookie();
      //-- check if we do have a cookie already set

      if (cookie !=="") {this.cookieSet = true; return;}
      //-- if not lets display message and set it
      this.setCookie();
      toastr.info("setting cookie");
    },
    /**
     * set the cookie
     */
    setCookie() {
      var d = new Date(),
          cvalue = this.setCookieValue();
      d.setTime(d.getTime() + (this.expiresIn*24*60*60*1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = this.cookieName + "=" + cvalue + "; " + expires;
    },
    /**
     * get the cookies and searh for ours
     * @return {string}
     */
    getCookie() {
      var name = this.cookieName + "=";
      var ca = document.cookie.split(';');
      for(let i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
      }
      return "";
    },
    /**
     * set the cookie value
     * @return {string}
     */
    setCookieValue() {
      var a = () => { return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)};
      return (a() + a() + "-" + a() + "-" + a() + a() + a())
    },
    /**
     * close cookie message
     * @param {event} evt
     */
    closeCookieMessage(evt) {
      evt.preventDefault()
      this.cookieSet = true;
      this.dismissCookie = true;
      
    }
  }
}
</script>
