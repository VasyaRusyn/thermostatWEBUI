import {GetTemp} from "./ServGetSet.js";




class ViewPage{
    constructor(){

    this.setting_btn = document.querySelector(`.setting_btn`)
    this.setting = document.querySelector(`.setting`) 
    this.nav = document.querySelector(`.nav`) ;
    this.activBtn = this.nav.querySelectorAll(`button`);
    this.nav.addEventListener(`click`,(event)=>{
      for (let key of this.activBtn) {
        if(event.target == key)
        {
        key.classList.add(`teack_btn`);
        key.parentElement.classList.add(`teack_btn`);
        this.setting_btn.classList.remove(`teack_btn`);
        } 
        else if(event.target != key && event.target != this.nav){
        key.classList.remove(`teack_btn`);
        key.parentElement.classList.remove(`teack_btn`);
        } 
      }
    }) 
}
}
class ViewTemp{
    constructor(){
        this.getTemp = new GetTemp();
        this.temp = this.getTemp.GetServTemp();
        this.cold = document.querySelector(`.cold`);
        this.fire = document.querySelector(`.fire`) ;
        this.top_indec = document.querySelector(`.top_indec`)
        this.big_indec = document.querySelector(`.big_indec`)
        this.range = document.querySelector(`.range`)
        this.range.addEventListener(`input`,(event) =>{
          this.ShowInputValue();

        })

}
ShowInputValue(){
    this.big_indec.firstChild.innerHTML = `${this.range.value}℃`
    }
ShowTempNaw(){
    this.top_indec.firstChild.innerHTML = `${this.temp}℃`
}
TimeStampShowTempNaw(){
    if(this.temp != this.range.value){
        if(this.temp < this.range.value){
             this.temp++  ;
             this.ShowTempNaw();
               this.intWork = setInterval(()=>{
                if(this.temp < this.range.value){
                  this.fire.style.opacity = 1;
                }
                if(this.temp == this.range.value || this.temp == this.range.value - 0.5){
                  clearInterval(this.intWork);
                }
             } ,1000)
             this.intClear = setInterval(()=>{
              this.fire.style.opacity = 0;
             } ,2500)
              }
            }
          if(this.temp > this.range.value){
            this.temp--;
            this.ShowTempNaw();
            this.coldWork = setInterval(()=>{
              if(this.temp > this.range.value){
                this.cold.style.opacity = 1;
              }
              if(this.temp == this.range.value || this.temp == this.range.value - 0.5){
                clearInterval(this.coldWork);
              }
           } ,1000)
           this.coldClear = setInterval(()=>{
            this.cold.style.opacity = 0;
           } ,2500)
          }
    }
  }


class PlusMinusBtn{
  constructor(){
    this.big_indec = document.querySelector(`.big_indec`)
    this.range = document.querySelector(`.range`)
    document.addEventListener(`click`,(event)=>{
  if(event.target.className == `minus_btn`){
    this.range.value--;
    this.big_indec.firstChild.innerHTML = `${this.range.value}℃`
  }
  if(event.target.className == `plus_btn`){
    this.range.value++;
    this.big_indec.firstChild.innerHTML = `${this.range.value}℃`
  }
  })
  }
}






class SetOfBtn extends ViewTemp{
  constructor(){
    super()
     this.auto_setting = document.querySelector(`.auto_setting`)
    this.setting_block = document.querySelector(`.setting_block`);
    this.save_of = document.querySelector(`.save_of`)
      this.offBtn = document.querySelector(`.off`)
     this.input_off_sett = document.querySelector(`.input_off_sett`); 
     this.ecoBtn = document.querySelector(`.eco_active`)
     this.input_eco_sett = document.querySelector(`.input_eco_sett`); 
     this.ecoBtnValue = this.input_eco_sett.value;
     this.offValue = this.input_off_sett.value;
     this.save_of.addEventListener(`click`,(event) =>{
      this.setting_block.classList.add(`hidden`);
      this.ecoBtnValue = this.input_eco_sett.value;
      this.offValue = this.input_off_sett.value;
     })
     this.offBtn.addEventListener(`click`,(event) =>{
      this.auto_setting.classList.add(`hidden`);  
      this.range.value = this.offValue;
      this.ShowInputValue();
     })
     this.ecoBtn.addEventListener(`click`,(event) =>{
      this.auto_setting.classList.add(`hidden`);  
      this.range.value = this.ecoBtnValue;
      this.ShowInputValue();
     })

  }

}



class HiddenSetting{
  constructor(){
    this.auto_setting = document.querySelector(`.auto_setting`)
    this.save_of = document.querySelector(`.save_of`)
    this.setting_block = document.querySelector(`.setting_block`)
    this.setting_btn = document.querySelector(`.setting_btn`)
    this.nav = document.querySelector(`.nav`) ;
    this.activBtn = this.nav.querySelectorAll(`button`);
    this.setting_btn.addEventListener(`click`,(event)=>{
      this.auto_setting.classList.add(`hidden`); 
      this.setting_btn.classList.toggle(`teack_btn`);
      if(this.setting_btn.classList.contains(`teack_btn`)){
        this.setting_block.classList.toggle(`hidden`);
      }
      if(this.setting_btn.classList.contains(`teack_btn`) == false){
        this.setting_block.classList.add(`hidden`);
        }
        })
        this.save_of.addEventListener(`click`,(event)=>{
          this.setting_btn.classList.remove(`teack_btn`);

          for (let key of this.activBtn) {
            if(key.classList.contains(`teack_btn`)){
              key.classList.remove(`teack_btn`)
              key.parentElement.classList.remove(`teack_btn`)
            }
            if(event.target == key){
              this.setting_btn.classList.remove(`teack_btn`);
            }
          }
        })
  }
}
class ManualSetap{
  constructor(){
    this.auto_setting = document.querySelector(`.auto_setting`)
    this.setap_btn = document.querySelector(`.setap_btn`)
    this.inpur_range = document.querySelector(`.inpur_range`)
    this.btn = document.querySelectorAll(`button`);
    this.nav = document.querySelector(`.nav`) ;
    this.activBtn = this.nav.querySelectorAll(`button`);
    this.nav.addEventListener(`click`,(event)=>{
      if(event.target == this.setap_btn){
        this.auto_setting.classList.add(`hidden`); 
        this.inpur_range.classList.remove(`hidden`)
      }
      if(event.target != this.setap_btn && event.target != this.nav){
        this.inpur_range.classList.add(`hidden`)
      }
    })
  }


}

export{ManualSetap}
export{HiddenSetting}
export {SetOfBtn};
export {ViewTemp};
export {ViewPage};
export{PlusMinusBtn}




