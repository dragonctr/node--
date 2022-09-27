const { resolve } = require("path")

const http = {
  baseUrl: '127.0.0.1:8080',
  get:function(obj,optionParam={}){
    let paramStr = EncodeURI(JSON.stringify(obj))
    let baseOption = {}
    const options = Object.assign(baseOptions,optionsParam)
    fetch(`${baseUrl}content=${paramStr}`,options).then(res=>resolve(res.data))
  },
  post:function(str,optionParam){
    let baseOption = {
      timeout:3000,
      header:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }
    const options = Object.assign(baseOptions,optionsParam)
    fetch(`${baseUrl}${str}`,options).then(res=>{
      resolve(res.data)
    })
  }
}
