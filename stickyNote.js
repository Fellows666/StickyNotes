function addStreamerTask(text) {
    const list = document.getElementById('streamer-list');
    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.textContent = text;
    note.style.opacity = 0;
    note.style.animation = 'fadeInWiggle 0.8s ease forwards';
    list.appendChild(note);
}

function addViewerTask(username, text) {
    const list = document.getElementById('viewer-list');
    const note = document.createElement('div');
    note.className = 'sticky-note viewer-task';
    note.textContent = `[${username}] - ${text}`;
    note.style.opacity = 0;
    note.style.animation = 'fadeInWiggle 0.8s ease forwards';
    list.appendChild(note);
}

function autoScrollList(listId) {
    const list = document.getElementById(listId);
    let scrollAmount = 0;
    let scrollDown = true;

    setInterval(() => {
        if (scrollDown) {
            list.scrollTop += 1;
            scrollAmount += 1;
            if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
                scrollDown = false;
            }
        } else {
            list.scrollTop -= 1;
            scrollAmount -= 1;
            if (list.scrollTop <= 0) {
                scrollDown = true;
            }
        }
    }, 50); // smaller = faster scroll (lower = slower)
}

// Start auto scrolling both lists
autoScrollList('streamer-list');
autoScrollList('viewer-list');
