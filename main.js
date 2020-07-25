function typer(elem, text, speed = 200) {
	let index = 0;
	const pointer = document.createElement('span');
	pointer.classList.add('pointer');
	pointer.classList.add('write')
	
	const type = () =>{
		const letters = text.length - (index + 1);
		if(text[index]==' '){
			pointer.classList.add('space');
			pointer.classList.remove('letter');
			pointer.innerText = ".";
		}else{
			pointer.classList.add('letter');
			pointer.classList.remove('space');
			pointer.innerText = text[index];
		}
				
		elem.innerText = text.slice(0,index);
		elem.appendChild(pointer);		
		
		if (letters == 0) {
			pointer.classList.remove('write');
			pointer.classList.add('wait');
			
			elem.innerText = text;
			pointer.innerText = ".";
			elem.appendChild(pointer);
			
			return;
		}
		index++;
		setTimeout(type, speed);
	}
	setTimeout(type, speed);
}
const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ab maiores aperiam rerum quidem, est consequatur itaque quos voluptatem mollitia vitae illo praesentium ratione, dolore tempore nisi voluptatum asperiores quae.
Commodi suscipit harum nostrum natus deleniti earum, a libero minus officia facere veritatis vero beatae vitae impedit sed ullam tempore pariatur quos eveniet quod autem, unde ut eligendi. Aut, ducimus!
In quibusdam pariatur inventore tempora, at minima similique ipsum temporibus tenetur dicta nisi itaque doloribus magnam beatae maiores amet delectus quod id explicabo sequi sed non atque! Quisquam, mollitia aut!
Provident alias est veniam ipsa numquam earum ratione, impedit eligendi doloremque laudantium assumenda vel, incidunt asperiores quo dolores? Ex facilis maiores veritatis nobis cum beatae alias odio tenetur possimus error!
Eaque nihil odio dolores quia illo numquam culpa. Natus, facere quae. Iure laboriosam praesentium recusandae numquam, repellendus illum molestiae tempore exercitationem. Ex soluta veritatis ducimus rem sapiente saepe, illo doloribus.
Excepturi cupiditate similique optio repellendus eligendi voluptas, molestias ex fuga numquam ipsum vel facere alias expedita corrupti suscipit tempora, repellat accusantium. Maiores nostrum facere itaque magnam architecto ducimus. Similique, quod!
Nulla, voluptatum a aut libero tenetur dolorum, consequuntur iure molestias alias dolore odit obcaecati, accusamus delectus illo deleniti vitae aspernatur. Veritatis praesentium cumque beatae veniam possimus temporibus mollitia vel nam?
Ipsa enim nostrum quam quaerat incidunt fuga commodi similique repellat odio excepturi repudiandae non, deserunt sequi facilis hic id quis reprehenderit! Maiores beatae debitis, expedita repellat quas vel reprehenderit in?
Esse, minima? Tenetur consequatur, veniam eligendi excepturi sint cumque provident quas reprehenderit aut molestias porro pariatur itaque ab quos ipsam libero! Molestiae pariatur nemo repudiandae, eius totam libero quae expedita.
Et praesentium dolorum ad, quasi odit illo deserunt dicta quidem autem nobis magni adipisci eligendi vero illum molestias voluptate perferendis voluptates magnam assumenda maxime ab maiores! Aspernatur modi suscipit accusamus.`;
const header = document.querySelector('h1');
const mainText = document.querySelector("p");
const speed = 170;
typer(header, 'Hello, world!', speed);
typer(mainText, text, 100);
