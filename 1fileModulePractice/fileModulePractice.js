/* 运行环境: node.js 
title: 文件的读取和写入 
author: 杨晓伟
time: 2020-10-20 */
const fs = require('fs')
let file = ''

fs.writeFile('./1.txt',"李子='5' 苹果='4' 香蕉='3'",'utf8',function(error){
  if(error){
    console.log(`文件写入失败,失败信息为${error}`)
  }else {
    console.log('文件写入成功')
  }
})

fs.readFile('./1.txt','utf8',function(error,dataStr){
  if(error!==null){
    console.log(`文件读物失败，失败信息:${error}`)
  }else{
    const dataReplace = dataStr.replace(/=/g,':')
    console.log('文件读取成功,文件内容:',file = dataReplace)
    fs.writeFile('./1.txt',dataReplace,'utf8',function(error){
      if(error){
        console.log(`文件写入失败,失败信息为${error}`)
      }else {
        console.log('文件写入成功')
      }
    })
  }
})

console.log('file1',file) //回调函数是异步宏任务，所以这里file是''

const timer1 = setTimeout(() => {
  console.log('file3',file)
},1000)