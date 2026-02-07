document.addEventListener("click", async (event) => {
	const button = event.target.closest(".share-link");
	if(!button) return;

	const id = button.dataset.target;
	const url = `${window.location.origin}${window.location.pathname}#${id}`;

	try {
		await navigator.clipboard.writeText(url);
		button.textContent = "Copied!";
		setTimeout(() => {
		button.textContent = "Copy link";
		}, 1500);
	} catch {
		alert("Could not copy link");
	}
});
