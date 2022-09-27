/* 运行环境: node.js 
title: path模块的使用 
author: 杨晓伟
time: 2020-10-20 */
const path = require('path')
console.log('__dirname',__dirname)
console.log('path.join(__dirname)',path.join(__dirname,'fileModulePractice.js'))
console.log('path.basename()',path.basename(path.join(__dirname,'fileModulePractice.js'),'.js'))
console.log('path.extname()',path.extname(path.join(__dirname,'fileModulePractice.js')))