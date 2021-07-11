import {ViewDate} from "./date.js" ;
import {ViewPage} from "./ViewPage.js" ;
import {ViewTemp} from "./ViewPage.js" ;
import {SetOfBtn} from "./ViewPage.js" ;
import {HiddenSetting} from "./ViewPage.js" ;
import {ManualSetap} from "./ViewPage.js" ;
import {PlusMinusBtn} from "./ViewPage.js" ;
import{DayHorlyView} from "./DayHorlySettap.js";
import{DayHorlySetting} from "./DayHorlySettap.js";
import {GetTemp} from "./ServGetSet.js";


const getTemp = new GetTemp();
{
    const wiew = new ViewDate();// Дубляж для того щоб одразу загрузився годинник!
    wiew.ViewDate();
    setInterval(()=>{
    const wiew = new ViewDate();
    wiew.ViewDate();
    },1000)
}
{
const viewPage = new ViewPage(); // Візуалізація кнопок ,вкл\викл
}
{
    const viewTemp = new ViewTemp() //Основна температура міняється взалежності від заданої їй програмі!
    viewTemp.ShowInputValue();
    viewTemp.ShowTempNaw();
    setInterval(()=>{
    viewTemp.TimeStampShowTempNaw();
    },2500)

    
    const setOfBtn = new SetOfBtn();//Оновлює вказані в налаштуваннях температури
    const hiddenSetting = new HiddenSetting();//Ховає налаштування та візуальні ефекти
    const manualSetap = new ManualSetap(); // Ховає й показує інпут range

}
{
  const dayHorlyView = new DayHorlyView();//Візуалізація таблиці з налаштуваннями по дням!
  const dayHorlySetting = new DayHorlySetting();//Робота по графіку
  const plusMinusBtn = new PlusMinusBtn();
}
