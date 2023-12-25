/* eslint-disable react/prop-types */

import { Star } from "../Star";
import { Container } from "./styles";
import { Tag } from "./../Tag/index";

export function Movies({ movies = [], ...props }) {
	return (
		<>
			{movies.map((movie) => (
				<Container key={movie.id} {...props}>
					<h2>{movie.name}</h2>

					<div className="stars">
						{[...Array(5)].map((_, index) => (
							<Star key={index} isFilled={movie.rating > index} />
						))}
					</div>

					<p>{movie.description}</p>

					<div className="tags">
						{movie.tags.map((tag, index) => (
							<Tag key={index} title={tag.name} />
						))}
					</div>
				</Container>
			))}
		</>
	);
}
