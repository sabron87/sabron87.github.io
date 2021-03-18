function getPilihanComp(){
let comp = Math.floor((Math.random()*3 ) + 1);
if(comp == 1) return 'gajah';
if (comp == 2) return 'orang';
return'semut';

}

/*rule atau aturan main*/
function getHasil(comp,player){
	if(comp == player) return 'SERI';
	if(comp == 'gajah') return (player == 'semut')? 'MENANG' : 'KALAH';
	if(comp == 'semut') return (player == 'orang')? 'MENANG' : 'KALAH';
	if(comp == 'orang') return (player == 'gajah')? 'MENANG' : 'KALAH';

}


const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(i){
	i.addEventListener('click',function(){
		const pilihanComp = getPilihanComp();
		const pilihanPlayer = i.className;

		const hasil = getHasil(pilihanComp,pilihanPlayer);

		const imgComputer = document.querySelector('.imgcomputer');
		imgComputer.setAttribute('src','img/' + pilihanComp + '.jpg');

		const hasilAkhir = document.querySelector('.hasil');
		hasilAkhir.innerHTML = 'Player Anda : ' + hasil;
	});


});


/*const pilihanComp = getPilihanComp();
const pilihanPlayer = pil.className;

const hasil = getHasil(pilihanComp,pilihanPlayer);*/






