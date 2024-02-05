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
const whois = 'My name is Lucas Borges, or "Lusqinha" for the internet, I was captured by the huge <em>Rabbit Hole</em> that is the <span class="highlight">GNU/Linux</span> environment and the free software culture, where I ended up becoming interested in programming and cybersecurity.<br><br>aside the internet, lately I have been spending part of my time studying about cars (mainly old ones), and especially the <span class="highlight">Civic 2002</span> an affair that has been evolving; another of my fixations is music, especially the band <span class="highlight">Charlie Brown Jr.</span>, all songs are great, but I recommend that you listen to <span class="highlight"><a href="https://www.youtube.com/watch?v=DRhEueqE7Uw&pp=ygUQY2hhcmxpZSBicm93biBqcg%3D%3D" target="_blank">Lugar ao sol</a></span>.'

const whoami = "You are a visitor, for more complex answers I recommend a psychologist, not a developer."

const social = `
    <p> You can find me on: <br>
        <span class = "highlight" > GitHub</span> --------------  <a href="https://github.com/Lusqinha" target="_blank">github.com/Lusqinha</a><br>
    </p>
`

const projects = `
    <p>
        <<span class="highlight">Main Portfolio</span>> ----------------------- <a href="https://github.com/Lusqinha/portfolio-backend" target="_blank">Lusqinha/portfolio-backend</a><br>
        <<span class="highlight">Terminal Portfolio</span>> ------------------- <a href="https://github.com/Lusqinha/portfolio_terminal" target="_blank">Lusqinha/portfolio_terminal</a><br>
        <<span class="highlight">PecManager</span>> --------------------------- <a href="https://github.com/Lusqinha/PecManager" target="_blank">Lusqinha/PecManager</a><br>
        <<span class="highlight">FootballCareerSimulator</span>> -------------- <a href="https://github.com/Lusqinha/FootballCareerSimulator" target="_blank">Lusqinha/FootballCareerSimulator</a><br>
        <<span class="highlight">Private cloud</span>> ------------------------ Business project<br>
        <<span class="highlight">Service schedule</span>> --------------------- Enterprise//open source coming soon<br>
    </p>
`

const skills = `
    <p>
        +------ <<<span class="highlight">Skills</span>>> ------+<br>
        |- <<span class="highlight">Javascript</span>> ---------|<br>
        |- <<span class="highlight">Python</span>> -------------|<br>
        |- <<span class="highlight">Linux</span>> --------------|<br>
        |- <<span class="highlight">Java</span>> ---------------|<br>
        |- <<span class="highlight">SQL</span>> ----------------|<br>
        |- <<span class="highlight">Go</span>> -----------------|<br>
        +------------------------+ <br>
    </p>
`

const career = "I currently work as a Solution Developer, Support Analyst and SysAdmin at Prática Certificação Digital."

const education = 'I am studying Systems Analysis and Development at <span class="highlight">PUCRS</span> and taking some courses in the area of <span class="highlight">cybersecurity</span> in parallel.'


export const comm_en = {
    "help": help,
    "whois": whois,
    "whoami": whoami,
    "ping": "• ¬(•-•) PONG!",
    "playlist": "coming soon",
    "social": social,
    "projects": projects,
    "skills": skills,
    "career": career,
    "education": education,
}

export const error_en = `Command not found, type <span class="highlight">help</span> for a list of commands`;