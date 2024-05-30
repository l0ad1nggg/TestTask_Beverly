//current year
const year = document.querySelector('#year')

currentDate = new Date()
currentYear = currentDate.getFullYear()
year.textContent = currentYear

// logic of starting the game and expanding it to full screen
const button = document.querySelector('.media-wrap__video-button')
const overlay = document.querySelector('.media-wrap__video-overlay')
const iframe = document.querySelector('.iframe')
const bgIframe = document.querySelector('.media-wrap__video-img')

// start game
function startGame() {
	button.style.display = 'none'
	overlay.style.display = 'none'
	bgIframe.style.display = 'none'

	if (launchFullscreen(iframe)) {
		iframe.src =
			'https://d2drhksbtcqozo.cloudfront.net/casino/launcher.html?channel=web&gameid=jokersplit&moneymode=fun&jurisdiction=MT&partnerid=1'
		return
	}
	openInNewWindow(
		'https://d2drhksbtcqozo.cloudfront.net/casino/launcher.html?channel=web&gameid=jokersplit&moneymode=fun&jurisdiction=MT&partnerid=1'
	)
}

// check for full screen availability
function launchFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen()
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen()
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen()
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen()
	} else {
		return false
	}
	return true
}

// open game in new window
function openInNewWindow(url) {
	window.open(url, '_blank')
}

// click button
button.addEventListener('click', startGame)
