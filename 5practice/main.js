const fs = require('fs')
const path = require('path')
const http = require('http')

const urlArr = ['/about.html','/htmlSplitWrote.html','/index.html','/login.html']

function fPath(extname,fname){
  return path.join(__dirname,`${extname.slice(1)}`,fname)
}

const sever = http.createServer()
sever.on('request',function(req,res){
  const extname = path.extname(req.url)
  const filePath = fPath(extname,req.url)
  if(['.html','.css','.js'].includes(extname)){
    fs.readFile(filePath,'utf8',function(error,dataStr){
      if(error!==null){
        console.log(`${req.url}文件读取时发生错误:`,error)
        fs.readFile(fPath('error.html'),'utf8',function(error,errorDataStr){
          res.setHeader('Content-Type','text/html;charset=utf-8')
          dataStr = errorDataStr
          res.end(dataStr)
        })
      }else{
        res.setHeader('Set-Cookie',['name=yang','age=22','time=202209270237'])
        res.end(dataStr)
      }
    })
  } else {
    console.log('filePath',filePath)
    fs.readFile(filePath,'utf8',function(error,dataStr){
      res.end(dataStr)
    })
  }
})
sever.listen(8080,function(){
  console.log('sever is running at 127.0.0.1:8080')
})