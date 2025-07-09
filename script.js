document.getElementById("quizucl").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  if (!nome) {
    alert("Por favor, insira seu nome.");
    return;
  }

  const respostasCorretas = {
    q1: "c",
    q2: "d",
    q3: "c",
    q4: "c",
    q5: "b",
    q6: "b",
    q7: "a",
    q8: "a",
    q9: "c"
  };
  
    let acertos = 0;

  for (let q in respostasCorretas) {
    const resposta = document.querySelector(`input[name="${q}"]:checked`);
    if (resposta && resposta.value === respostasCorretas[q]) {
      acertos++;
    }
  }

  alert(`${nome}, você acertou ${acertos} de 9 questões.`);
});