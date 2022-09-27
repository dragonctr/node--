const fs = require('fs')
const path = require('path')
const http = require('http')
const sever = http.createServer()

const urlArr = ['/htmlSplit.html']
function fPath(fname){
  return path.join(__dirname,'./htmlSplitPractice',fname)
}

sever.on('request',function(req,res){
  if(urlArr.includes(req.url)){
    console.log('fPath(req.url)',fPath(req.url))
    fs.readFile(fPath(req.url),'utf8',function(error,dataStr){
      if(error!==null){
        console.log('htmlSplit.html读取时发生错误:',error)
      }else{
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end(dataStr)
      }
    })
  }
})
sever.listen(8080,function(){
  console.log('sever is running at 127.0.0.1:8080')
})