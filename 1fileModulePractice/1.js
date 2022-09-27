const fs = require('fs')
fs.readFile('./Test.md','utf8',function(error,dataStr){
  if(error!==null){
    console.log('文件读取失败readError',error)
  }else{
    console.log('文件读取成功，内容为:',dataStr)
  }
})

fs.writeFile('./write.txt','写入文件内容','utf8',function(error){
  if(error!==null){
    console.log('文件写入失败writeError',error)
  }else {
    console.log('文件写入成功')
  }
})