import { GetToken } from '../store'

export function GetAuth(){
  let href=window.location.href
  let arr=href.split('?code=')
  let string=arr[arr.length-1]
  let url = 'http://testapi.kaoqin.sunmi.com/api/'
  url=url.substr(0,url.length-4)+"oauth/token/?code="+string
  let headers=new Headers()
  headers.append('Accept','application/vnd.sunmi.v1+json')
  const opts = {
    method: 'GET',
    headers
  }
  return fetch(url,opts).then(res => {
    if(res.status==200||res.status<=300){
      return res.json()
    }else {
      if(res.status==401||res.status==403){
        localStorage.removeItem("Authorization")
        // window.location.href=CONFIG['sso']
        // reject(new Error('暂未关联!'))           
      }            
    }
  })
}