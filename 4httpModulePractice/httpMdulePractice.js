/* 运行环境: node.js 
title: 创建简易web服务器
desc: 利用http模块将本地主机变成简易web服务器
author: 杨晓伟
time: 2020-10-22 */

const http = require('http')
const url = require('url')

const server = http.createServer()
server.on('request',function(request,response){
  const path = url.parse(request.url,true)
  console.log('request.method',request.method)
  console.log('request.data',path)
  response.setHeader('Content-Type','text/html;charset=utf-8')
  response.end('大哥我可真帅啊')
})
server.listen(8080,function(){
  console.log('Sever is running at the 127.0.0.1:8080')
})