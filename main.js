new Vue({
  el: '#app',
  data: {
    inputURL: '',
    imgWidth: 500,
    imgHeight: 300,
    outputURL: ['https://images.unsplash.com/photo-1470093790102-5aea19caf968?dpr=1&auto=compress,format&fit=crop&w=500&h=300&q=80&cs=tinysrgb&crop=']
  },
  methods: {
    getPhotoURL: function(){
      var outputURL = this.outputURL;
      fetch(this.inputURL).then(response => response.text()).then(data =>  data.match(/"raw": "https:\/\/images\.unsplash\.com\/photo-(.*)",/)[1]).then(photoID => outputURL.splice(0, 1, `https://images.unsplash.com/photo-${photoID}?dpr=1&auto=compress,format&fit=crop&w=${this.imgWidth}&h=${this.imgHeight}&q=80&cs=tinysrgb&crop=`))
    }
  }
})
