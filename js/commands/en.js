const help = `
<p>
    <span class="highlight">help</span> -------------- you know<br>
    <span class="highlight">whois</span> ------------- About me<br>
    <span class="highlight">whoami</span> ------------ About you<br>
    <span class="highlight">ping</span> -------------- (•-•)⌐<br>
    <span class="highlight">banner</span> ------------ Load banner<br>
    <span class="highlight">playlist</span> ---------- A little beyond just a 'whois'<br>
    <span class="highlight">social</span> ------------ Social networks<br>
    <span class="highlight">projects</span> ---------- Main projects<br>
    <span class="highlight">skills</span> ------------ Main skills<br>
    <span class="highlight">career</span> ------------ Professional experience<br>
    <span class="highlight">education</span> --------- Academic background<br>
    <span class="highlight">clear</span> ------------- Clear the terminal
</p>
`

const whois = 'My name is Lucas Borges, or just "Lusqinha" for the internet, I was captured by the huge <em>Rabbit Hole</em> that is <span class="highlight">GNU/Linux</span> and the free software culture, where I ended up becoming interested in programming and cybersecurity.<br><br>Leaving the internet aside for a moment, I have a growing passion for cars and especially for my dear <span class="highlight">Civic 2005</span>, of which I am the proud owner (I will leave some photos here in the future), I have been developing an OBD2-based onboard computer btw; another of my fixations is music, to be more specific the band <span class="highlight">Charlie Brown Jr.</span> occupies a good part of my playlists and headphones during the day, finding a group where all songs are great is rare, but within all the albums, I would like to recommend just one song so that I can introduce you better to the classics of the band, I ask you to listen <span class="highlight"><a href="https://www.youtube.com/watch?v=DRhEueqE7Uw&pp=ygUQY2hhcmxpZSBicm93biBqcg%3D%3D" target="_blank">Lugar ao sol</a></span>, I promise that your attention will not be in vain.'


const whoami = "You are a visitor, for more complex answers I recommend a psychologist, not a developer."

const playlist = `
<p>
    The playlist is on Spotify, but I recommend using another player such as <span class="highlight"><a href="https://spotube.krtirtho.dev/" target="_blank"></a>Spotube</span>.<br>

    <span class="highlight">Link</span> ----------------- <a href="https://open.spotify.com/playlist/3tSiLpa5XAPTN3BiGxt7E1 target="_blank">My Mix</a><br>
</p>`

const social = `
    <p> You can find me on: <br>
        <span class="highlight"> GitHub</span> --------------  <a href="https://github.com/Lusqinha" target="_blank">github.com/Lusqinha</a><br>
    	<span class="highlight"> Twitter/X</span> -----------  <a href="https://x.com/kernelape" target="_blank">KernelApe</a><br>
    </p>
`

const projects = `
    <p>
        <<span class="highlight">RandAvatars</span>> -------------------------- <a href="https://github.com/Lusqinha/RandAvatars-telegram-bot" target="_blank">Lusqinha/RandAvatars</a><br>
        <<span class="highlight">Portfolio Terminal</span>> ------------------- <a href="https://github.com/Lusqinha/portfolio_terminal" target="_blank">Lusqinha/portfolio_terminal</a><br>
        <<span class="highlight">PecManager</span>> --------------------------- <a href="https://github.com/Lusqinha/PecManager-web" target="_blank">Lusqinha/PecManager-web</a><br>
        <<span class="highlight">Service schedule</span>> --------------------- Private//open source soon<br>
    </p>
`

const skills = `
    <p>
        +---- <<<span class="highlight">Habilidades</span>>> ----+<br>
        |- <<span class="highlight">Typescript</span>> ----------|<br>
        |- <<span class="highlight">Python</span>> --------------|<br>
        |- <<span class="highlight">NodeJs</span>> --------------|<br>
        |- <<span class="highlight">Java</span>> ----------------|<br>
        |- <<span class="highlight">Ruby</span>> ----------------|<br>
        |- <<span class="highlight">Go</span>> ------------------|<br>
        +-------------------------+ <br>
    </p>
`

const career = "I am currently looking for an internship opportunity in the Fullstack and Backend development area. Recently I worked as a Help Desk, Support Analyst and SysAdmin at Prática Certificação Digital, during all my time as a collaborator I acquired a great experience in the area of support and systems management."

const education = 'I am studying Systems Analysis and Development at <span class="highlight">PUCRS</span> while i on projects as a freelancer <span class="highlight">Fullstack</span>.'


export const comm_en = {
    "help": help,
    "whois": whois,
    "whoami": whoami,
    "ping": "• ¬(•-•) PONG!",
    "playlist": playlist,
    "social": social,
    "projects": projects,
    "skills": skills,
    "career": career,
    "education": education,
}

export const error_en = `Command not found, type <span class="highlight">help</span> for a list of commands`;
