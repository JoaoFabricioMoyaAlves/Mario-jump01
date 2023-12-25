

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.game-over')

let segundos = 0;

        // Função para atualizar e exibir o contador
        function atualizarContador() {
            document.getElementById('contador').innerText = segundos;
        }

        // Função que será chamada a cada segundo
        function incrementarSegundos() {
            segundos++;
            atualizarContador();
        }

        // Atualiza o contador a cada segundo (1000 milissegundos)
        const intervalo = setInterval(incrementarSegundos, 1000);



const jump = () => {
  mario.classList.add('jump');

  setTimeout(()=>{
    mario.classList.remove('jump');

  },800);

}

const loop = setInterval(() => {
         
  console.log('loop')


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
   
    console.log(marioPosition);
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
      pipe.style.animation = 'none';
      pipe.style.left=`${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom=`${marioPosition}px`;

      mario.src = 'imagens/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      gameover.style.display = 'block';

      clearInterval(intervalo);  
    
     clearInterval(loop);
   
    }

},10)

function recarregarPagina() {
 
  location.reload();
}



document.addEventListener('keydown',jump);