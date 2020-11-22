import React from 'react'


// this function encodes form data in uri and sends it on netlify server for submission
function encode(data) {
return Object.keys(data)
	.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
	.join('&')
}

export function submitForm(formName, formData) {
	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: encode({ "form-name": formName, 
		...formData 
		})
	})
	.then( data => { return data })
	.catch( err => { return err })
}