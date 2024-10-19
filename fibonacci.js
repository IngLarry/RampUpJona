function fibonacci(num1, num2, cantidad) {
  const resultado = [num1, num2];
  let siguiente=0;
  for (let i = 2; i < cantidad; i++)
  {
        siguiente = resultado[i - 1] + resultado[i - 2];
    if (siguiente < cantidad)
        {
          console.log((siguiente));
           resultado.push(siguiente);
        }else
         {
           return resultado;
         }
 }
}
const serie = fibonacci(1, 15, 80);
console.log('Resultado: ' + [serie]);
