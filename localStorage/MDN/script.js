
function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		console.log("storage is available");
	} catch (e) {
		console.log("no storage");
	}
}
storageAvailable("localStorage");
