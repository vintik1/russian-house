/**
 * library.js
 * Created by Egor Sadanov (@sadanov)
 * This functional component represents library page.
 */
import React, {useState} from 'react';
import books from "../data/library-books.json";

function Library() {
	// number represents current amount of shown books
	const [number, setNumber] = useState(10);

   return (
		<div className="container-fluid px-0">
			<div className="container-fluid bg-lightgrey">
				<div className="container" style={{padding: "4rem 0"}}>
					<h1 style={{fontSize: "4rem"}}>Explore<span className="text-success">.</span></h1>
				</div>
			</div>
			<div className="container-lg mt-4 px-0">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">title</th>
							<th scope="col">group</th>
							<th scope="col">edition</th>
							<th scope="col">year</th>
							<th scope="col">pages</th>
						</tr>
					</thead>
					<tbody>
						{books.map((book, index) => {
							if (index < number) {
								return <tr className="border shadow" key={book.id}>
									{/* <th scope="row"></th> */}
									<td>{book.title}</td>
									<td>{book.group}</td>
									<td>{book.edition}</td>
									<td>{book.year}</td>
									<td>{book.pages}</td>
								</tr>;
							}
						})}
					</tbody>
				</table>
				<div className="container-fluid text-center">
				<button type="button" className="btn btn-outline-dark  shadow-none mb-4" onClick={() => setNumber(number + 6)}>Load more</button>
				</div>
			</div>
		</div>
  );
}

export default Library; 