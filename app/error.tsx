"use client";

import {useEffect} from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<p>Something went wrong! You are seeing error.tsx</p>
			<code>{JSON.stringify(error, null, 2)}</code>
			<button onClick={() => reset()}>Reset error boundary</button>
		</div>
	);
}
