# Calculadora Basal 
Este es un proyecto que se trata de una calculadora que determina la cantidad de agua que una persona necesita para mantenerse hidratada en base a su peso. El cálculo se realiza utilizando dos métodos diferentes: el Método Holliday-Segar para niños de hasta 30 kg y el Método de Superficie Corporal para niños con más de 30 kg.

## Tecnologías Utilizadas
Este proyecto ha sido realizado utilizando HTML, CSS y JavaScript.

## Uso
Para utilizar la calculadora, ingrese el peso en kilogramos en el campo provisto y haga clic en el botón "Calcular". Si se ha ingresado un valor válido (mayor a 0), la calculadora mostrará tres resultados: la cantidad de agua que se debe tomar en un día (cc/día), la tasa de flujo de agua requerida por hora (cc/h) y la tasa de mantenimiento (m+m/2 : cc/h). Si el peso ingresado es mayor a 30 kg, se utilizará el método de Superficie Corporal y se mostrarán dos resultados adicionales que indican la cantidad de agua necesaria en un flujo de superficie corporal de 1500 ml (Sc x 1500 ml) y 2000 ml (Sc x 2000 ml).

## Cómo Funciona
La calculadora utiliza una función en JavaScript que se encarga de realizar los cálculos necesarios para determinar la cantidad de agua requerida para mantenerse hidratado. El cálculo se realiza de acuerdo a los métodos mencionados anteriormente. Si el peso ingresado es menor o igual a 30 kg, se utiliza el Método Holliday-Segar, mientras que si el peso es mayor a 30 kg, se utiliza el Método de Superficie Corporal. La función en JavaScript también se encarga de mostrar los resultados en la página web.
