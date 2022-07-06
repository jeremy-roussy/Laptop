$("#menu-btn").click(function() {
	$("#menu").fadeToggle(200, "linear");
});

$("#desktop-space").mouseup(function() {
	if($("#menu").css("display") != "none"){
		$("#menu").fadeToggle(200, "linear");
	}
});

$('#desktop-space').mousedown(function(event) {
    switch (event.which) {
        case 1:
            // Left Mouse button pressed
            break;
        case 2:
            // Middle Mouse button pressed
            break;
        case 3:
            // Right Mouse button pressed
            break;
        default:
            // You have a strange Mouse!
    }
});

function clock() {
	clockTimer=setInterval(function() {
		var data = new Date();
		var h, m, s;
		h = data.getHours();
		m = data.getMinutes();
		s = data.getSeconds();
		if(h < 10) h = "0" + h;
		if(m < 10) m = "0" + m;
		if(s < 10) s = "0" + s;
		$("#clock").html(h + ":" + m + ":" + s);
	}, 1000);
}

clock();
$('#terminal-icon').hide();
$('#app').hide();

function createFileDesktop(n) {
	$("#desktop-space").append('<li class="folders"><div class="folder"><a class="image"><img src="neonFolder.png" alt=""></a><p>Code ' + n + '</p></div></li>');
	setFileDesktopDraggable();
}

function setFileDesktopDraggable() {
	$(".folders").draggable({
		grid: [134,130],
		cursor: "move",
		containment: "parent",
		cancel: ".folders-label",
		zIndex: "3",
		classes: {"ui-draggable-dragging": "transcendence"},
	});
}

createFileDesktop('CSS');
createFileDesktop('JavaScript');

$(".app-menu-btn").click(function() {
	var text = $(this).text().trim();

	if(text == "Terminal") {
		$('#app').show();
		$('#terminal-icon').show();
	}
});

$(".folder").click(function() {
	// à compléter
});
  
$(".folder").dblclick(function() {
	var text = $(this).text().trim();
});

function handleClose() {
	$('#app').hide();
	$('#terminal-icon').hide();
}