// export function get(url) {
// 	return fetch(url).then(
//     response => response.json()
// 	);
// }

export async function get(url) {
	const response = await fetch(url);
	if (!response.ok) {
		console.error(response);
		throw new Error(response.statusText);
	}
	return response.json();
}