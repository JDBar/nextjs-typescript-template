import {NextApiRequest, NextApiResponse} from "next";

export interface IUserDataResponse {
	name: string;
}

// This is how you create an async API method.
export default async (
	_request: NextApiRequest,
	response: NextApiResponse<IUserDataResponse>
) => {
	response.status(200).json(await getUserData());
};

// This is an example async data fetching method that we'll use.
// In reality, you might fetch data from a DB or something.
export function getUserData(): Promise<IUserDataResponse> {
	return new Promise<IUserDataResponse>((resolve) => {
		setTimeout(() => {
			resolve({name: "John Doe"});
		}, 1000);
	});
}
