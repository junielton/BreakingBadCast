import React, {useState} from "react";
import "../Search/style.css";

const Search = ({getQuery}) => {
	const [text, setText] = useState("");

	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};

	return (
		<section className="search">
			<form>
				<input className="form-control" value={text} placeholder="Search characters" onChange={(e) => onChange(e.target.value)} />
			</form>
		</section>
	);
};

export default Search;
