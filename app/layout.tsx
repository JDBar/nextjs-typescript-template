import "@/styles/globals.scss";
import React from "react";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<html lang="en">
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Next.js App</title>
					<meta name="description" content="Next.js App" key="desc" />
				</head>
			</html>
			<body>{children}</body>
		</>
	);
}
