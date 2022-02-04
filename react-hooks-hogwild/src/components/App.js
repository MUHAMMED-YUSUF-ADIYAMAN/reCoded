import React , { useState } from "react";
import Nav from "./Nav";
import PigCard from "./PigCard";
import hogs from "../porkers_data";
import Filter from "./Filter";




function App() {


  const [hogArray, sethogArray] = useState(hogs);
  

function filter(a){
	if(a){
	sethogArray(hogs.filter(e=>e.greased===a));
	console.log(hogArray);

}
	else
	sethogArray(hogs.filter(e=>e));
	console.log(hogArray);

}
function sort(a){
	console.log(a)
	if(a==="name"){
		const sortname =hogArray.sort((x, y) => (x.name > y.name) ? 1 : -1);
		sethogArray("");
		sethogArray(sortname);
		console.log(sortname);

	}
	else if(a==="weight"){
		const sortname =hogArray.sort((x, y) => (x.name > y.name) ? 1 : -1);
		sethogArray("");
		sethogArray(sortname);
		console.log(sortname);
		}
	}

	
	return (
		<div className="App">
			<Nav/>
			<Filter filter={filter} sort={sort} />
			<div className="All-Hogs">
				{hogArray.map((e)=>
				<PigCard key={e.name} hog={e} />
				)}
			</div>
			
		</div>
	);
}

export default App;
