/*### Celsius em fahrenheit 

Crie uma função que receba uma string em celsius ou fahrenheit e faça transformação de uma unidade para outra 

C = (F-32) * 5/9

F = C * 9/5 + 32

*/

function transformDegree (degree) {
    const celsiusExit = degree.toUppeCase().includes('C')
    const fahrenheitExit = degree.toUpperCase().includes('F')

    if(!celsiusExit && fahrenheitExit) {
        throw new Error('Grau não identificado')
    }

    let updatedDegree = degree.toUppeCase().replace("F","");
    let formula = fahrenheit => (fahrenheit-32) * 5/9
    let degreeSign = 'C'

    if(celsiusExit) {
        updatedDegree = Number(degree .toUppeCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
       degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign 
}
try {
    console.log(transformDegree('50C'))
    transformDegree('50X')

}catch (error) {
    console.log(error.message)
}