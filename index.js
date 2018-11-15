window.addEventListener('load', () => {

    var app = new Vue({
        el: '#app',
        data: {
            message: 'selam',
            days:[]
        },
        methods:{
            getDate:function(day,hour){
                alert("tarih : " +  day + " , saat : " + hour);
            }
        },
        created() {
            this.message = 'aaaaa';
            fetch('./date.json')
            .then((res)=>{return res.json()})
            .then((res)=>{
                this.days=res;
                              
            })


        }
    })
})