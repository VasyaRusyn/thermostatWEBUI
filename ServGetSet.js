class POSTTemp{
    constructor(){
        this.range = document.querySelector(`.range`);
        this.url = ``;
        this.getTemp = new GetTemp();

    }
    xmlSend(){
      if(this.range.value != this.getTemp.GetServTemp()){
        let xml = new XMLHttpRequest();
        xml.open(`POST`,this.url );
        xml.addEventListener('load', (event) => {
    const response = JSON.parse(xml.responseText);
            xml.setRequestHeader(`Content-type`,`application/json;charset=UTF-8`)
})
xml.send(JSON.stringify(this.range.value))
      }
  }
  }

class GetTemp{
    constructor(){
        this.url = ``;
    }
    GetServTemp(){
  let xml = new XMLHttpRequest();
  xml.open(`GET`,this.url );
  xml.addEventListener('load', (event) => {
       if (event.target.status >= 400) {
      alert(`HTTP ERROR CODE: ${event.target.status}!`);
       }
       else {
         this.temp = JSON.parse(event.target.response);
       }
        
  })
//   xml.send();
  return 22;
}
}





class GetDaylyTemp{
  constructor(){
    this.save_day = document.querySelector(`.save_day`)
      this.url = ``;
      this.temp = {
        Hour:[],
        Min:[],
        Temp:[]
      }
    document.addEventListener(`click`,(event)=>{
    if(event.target == this.save_day){
      for(let i = 0;i < this.ObjDayly.Hour.length; i++){
         this.temp.Hour[i] = this.hour[i].value
          this.temp.Min[i] = this.min[i].value
         this.temp.Temp[i] = this.cel[i].value
    }
    }
    })
  }
  GetServDayly(){
let xml = new XMLHttpRequest();
xml.open(`GET`,this.url );
xml.addEventListener('load', (event) => {
     if (event.target.status >= 400) {
    alert(`HTTP ERROR CODE: ${event.target.status}!`);
     }
     else {
       this.temp = JSON.parse(event.target.response);
     }
      
})
//   xml.send();
return this.temp ;
}
}


class SetSetapDayly{
  constructor(){

    this.hour = document.querySelectorAll(`#Hour`);
    this.min = document.querySelectorAll(`#min`);
    this.cel = document.querySelectorAll(`#cel`)
    this.auto = document.querySelector(`.auto`);
    this.GetDaylyTemp = new GetDaylyTemp();
    this.ObjDayly = this.GetDaylyTemp.GetServDayly();
    document.addEventListener(`click`,(event)=>{
      if(event.target == this.auto){
             for(let i = 0;i < this.temp.ObjDayly.length; i++){
              this.hour[i].value  = this.ObjDayly.Hour[i];
              this.min[i].value  = this.ObjDayly.Min[i];
              this.cel[i].value  = this.ObjDayly.Temp[i];
          }
      }


    })
  }
}

let setSetapDayly = new SetSetapDayly();

export{GetTemp}