export const httpGet = async (url, query) => {
	if(query && Object.keys(query).length) {
		let queryString = "?";
		let i = 0;
		for(let key in query) {
			i++;
			queryString += `${key}=${query[key]}${Object.keys(query).length != i ? "&" : "" }`;
		}

		url = url + queryString;
	}

	try {
		let response = await fetch(url);
		if(response.status == 204)
			return await [];
		return await response.json();
	} catch (err) {
		throw new Error(err);
	}
}

export const httpPost = async (url, body) => {
	try {
		let response = await fetch(url, {
		  method: 'POST',
		  body: JSON.stringify(body || {}),
		});
		return await response.json();
	} catch(err) {
		throw new Error(err);
	}
}