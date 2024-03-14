let popup = document.getElementsByClassName("popup")[0];
let clicked = false;

popup.addEventListener("click", async () => {
	if (!clicked) {
		clicked = true;
		popup.classList.add("fade-out");

		let song = new Audio("./assets/falling_down.mp3");
		song.volume = 0.05;
		song.loop = true;
		song.play();

		setTimeout(() => {
			popup.remove();
		}, 1000);
	}
});
