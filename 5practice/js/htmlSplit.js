let laugh = document.querySelector('.laugh')
laugh.addEventListener('dblclick',function(event){
  console.log('event',event.target.innerHTML='双击成功啦')
  console.log('this',laugh.innerHTML='双击成功啦')
  // this.innerHtml='双击成功啦'
})

var doubleScriptTag = '2'
fetch('http://127.0.0.1:8080/test=true&num=222',{
  method:'GET',
  header:{
    'Content-Type':'charset=utf-8'
  }
}).then(res=>{
  console.log('res',res)
})

