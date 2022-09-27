/* 运行环境: node.js 
title: 分割.html文件
desc: 将有script和style标签的.html文件分割为三个独立文件,并采用链接的方式导入.html文件
author: 杨晓伟
time: 2020-10-20 */
const fs = require('fs')
const path = require('path')
const styleReg = /<style>[\s\S]*<\/style>/g
const scriptReg = /<script>[\s\S]*<\/script>/g
const filePath = path.join(__dirname,'./htmlSplit.html')
fs.readFile(filePath,'utf8',function(error,dataStr){
  if(error===null){
    const styleCont = styleReg.exec(dataStr)[0].replace(/<style>[^$]/g,'').replace(/<\/style>/g,'')
    const scriptCont = dataStr.match(scriptReg)[0].replace(/<script>[^$]/g,'').replace(/<\/script>/g,'')
    const htmlCont = dataStr.replace(styleReg,"<link rel='stylesheet' href='./htmlSplit.css'/>").replace(scriptReg,"<script src='./htmlSplit.js'></script>")
    fs.writeFile(path.join(__dirname,'htmlSplit.css'),styleCont,'utf8',function(error){
      if(error){
        console.log('htmlSplit.css写入错误',error)
      }
    })
    fs.writeFile(path.join(__dirname,'htmlSplit.js'),scriptCont,'utf8',function(error){
      if(error){
        console.log('htmlSplit.js写入错误',error)
      }
    })
    fs.writeFile(path.join(__dirname,'htmlSplitWrote.html'),htmlCont,'utf8',function(error){
      if(error){
        console.log('htmlSplitWrote.html写入错误',error)
      }
    })
  }else{
    console.log('htmlSplit.html读取错误')
  }
})