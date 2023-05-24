// 获取当前时间是早上|上午|下午|还是晚上
export default ()=>{
   let message = "" 
   let h = new Date().getHours()
   if(h<=9){
    message = "早上"
   }else if(h<=12){
    message = "上午"
   }else if(h<=18){
    message = "下午"
   }else {
    message = "晚上"
   }
   return message
}