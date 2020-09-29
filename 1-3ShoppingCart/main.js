const app= new Vue({
  el:'#app',
  data:{
    books: [
      {
        id:1,
        name:'Introduction to Algorithms',
        date: '2006-9',
        price: 125.00,
        count:1,
      },
      {
        id:2,
        name:'UNIX programming',
        date: '2006-2',
        price: 59.00,
        count:1,
      },
      {
        id:3,
        name:'Biancheng zhuji',
        date: '2008-10',
        price: 39.00,
        count:1,
      },
      {
        id:4,
        name:'SICP',
        date: '2010-8',
        price: 79.00,
        count:1,
      },
    ],
  },
  computed:{
    totalPrice(){
      // 3 types of for loop
      // for (let i in this.books){i is index}
      // for (let book of this.books){book is book object}
      // 高阶函数 filter map reduce
      // lst.filter(func(n){n<100}) func returns a boolean, if it is true, add n to a new array.
      // lst.map(func(n){n*2}) argument is a func, 一次对数组内所有元素进行改变
      // lst.reduce(func(preValue,n){},0) preValue上一次返回的值,reduce两个参数,第一个是func，第二是初始值
      // 这里0是第一个preValue，后面按照func累计改变preValue
      // let total = nums.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+n)

      // let totalPrice=0;
      // for (let i=0;i<this.books.length;i++){
      //   totalPrice+=this.books[i].price*this.books[i].count;
      // }
      // return totalPrice;

      return this.books.reduce(function (preValue,book) {
        return preValue + book.price*book.count;
      },0)
    },
  },
  methods:{
    minusClick(index){
      this.books[index].count--;
    },
    plusClick(index){
      this.books[index].count++;
    },
    deleteBook(index){
      this.books.splice(index,1);
    },
  },
  filters:{ // filter Implementation {{item.price | showPrice}}
    showPrice(price){
      return '¥'+ price.toFixed(2);
    },
  }
})