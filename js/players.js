function setPlayerStyle(player) {
    player.style.border = "1px solid red";
    player.style.borderRadius = "10px"
    player.style.padding = "10px"
    player.style.margin = "10px"
}

const players = document.getElementsByClassName("player");
for (const player of players) {
    setPlayerStyle(player);
};

function addPlayer() {
    const playersContainer = document.getElementById("players");
    const player = document.createElement("div");
    player.classList.add("player");
    player.innerHTML = `
    <div class="player">
    <h4 class="player-name">New Player</h4>
    <p>Rem nesciunt est alias voluptates? Officiis enim possimus impedit! Aut fugiat, quibusdam esse fuga
        excepturi, perspiciatis autem dignissimos eligendi illum provident voluptates, minus suscipit?
        Consequatur natus fuga aut qui delectus.</p>
    </div>`
    setPlayerStyle(player);
    playersContainer.appendChild(player);
};

document.getElementById("players").addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() == "div") {
        event.target.style.backgroundColor = "yellow";
    }
    else {
        event.target.parentNode.style.backgroundColor = "yellow";
    }
});