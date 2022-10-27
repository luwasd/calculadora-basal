const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const DIA = document.getElementById('dia');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
let form = document.getElementById('calcular');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        if (DATO>30){
            let flujo = calcFlujo(DATO);
            let sc1= Math.round(flujo*1500);
            let sc2 = Math.round(flujo*2000);
            ERROR.style.display = 'none'
            FLU.innerHTML = 'Sc x 1500ml: ' + sc1 + ' cc/hr';
            MAN.innerHTML = 'Sc x 2000ml: ' + sc2 + ' cc/hr';
            DIA.style.display = 'none'
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
        else { 
            let flujo = calcFlujo(DATO);
            let hora = Math.round(flujo/24);
            let mantenimiento = Math.round(hora*1.5);
            ERROR.style.display = 'none'
            DIA.innerHTML = flujo + ' cc/dia';
            FLU.innerHTML = hora + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            DIA.style.display = 'block';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
    } 
    else {
        ERROR.style.display = 'block';
        DIA.style.display = 'none'
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        form.style.backgroundColor = 'red';
    }
})
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto<=10) {
        flujo = resto*100;
    }
    else {
        if (resto<=20) {
            flujo = ((resto-10)*50)+1000;
        }
        else {
            if (resto<=30){
                flujo = ((resto-20)*20)+1500;
            }
            else {
                flujo = ((resto*4)+7)/(resto+90);
            }
        }
    }
    return flujo;
}
