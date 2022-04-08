// import {get,post} from '@/api/index.js'
import $https from '@/api/index.js'

export function cellphone(data){
  return $https.get('/login/cellphone',data)
}