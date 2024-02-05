const ajuda = `
<p>
    <span class="highlight">help</span> -------------- Exibe uma lista de comandos disponíveis<br>
    <span class="highlight">whois</span> ------------- Sobre mim<br>
    <span class="highlight">whoami</span> ------------ Sobre você<br>
    <span class="highlight">ping</span> -------------- (•-•)⌐<br>
    <span class="highlight">banner</span> ------------ Carrega o banner<br>
    <span class="highlight">playlist</span> ---------- Um pouco além de apenas um 'whois'<br>
    <span class="highlight">social</span> ------------ Redes sociais<br>
    <span class="highlight">projetos</span> ---------- Principais projetos<br>
    <span class="highlight">habilidades</span> ------- Principais habilidades<br>
    <span class="highlight">carreira</span> ---------- Experiência profissional<br>
    <span class="highlight">estudo</span> ---------- Formação acadêmica<br>
    <span class="highlight">clear</span> ------------- Limpa o terminal
    <br>
</p>
`

const whois = 'Meu nome é Lucas Borges, ou "Lusqinha" para a internet, fui capturado pelo enorme <em>Rabbit Hole</em> que é o ambiente <span class="highlight">GNU/Linux</span> e a cultura de software livre, onde acabei me interessando por programação e cibersegurança.<br><br>Saindo um pouco da internet, ultimamente tenho gastando parte do tempo estudando sobre carros (principalmente antigos), e em especial o <span class="highlight">Civic 2002</span> um affair que veio evoluindo com o tempo; outra das minhas fixações é a música, em especial a banda <span class="highlight">Charlie Brown Jr.</span>, todas músicas são ótimas, mas eu particularmente recomendo que escute <span class="highlight"><a href="https://www.youtube.com/watch?v=DRhEueqE7Uw&pp=ygUQY2hhcmxpZSBicm93biBqcg%3D%3D" target="_blank">Lugar ao sol</a></span>.'

const whoami = "Você é um visitante, para respostas mais complexas recomendo um psicólogo, não um desenvolvedor."

const playlist = `
<p>
    A playlist está no Spotify, mas recomendo que utilize outro player como por exemplo o <span class="highlight"><a href="https://spotube.krtirtho.dev/" target="_blank"></a>Spotube</span>.<br>

    <span class="highlight">Link</span> ----------------- <a href="https://open.spotify.com/playlist/3tSiLpa5XAPTN3BiGxt7E1 target="_blank"></a><br>

</p>
`

const social = `
    <p> Você pode me encontrar nas redes:<br>
        <span class="highlight">GitHub</span> --------------  <a href="https://github.com/Lusqinha" target="_blank">github.com/Lusqinha</a><br>
    </p>
`

const projetos = `
    <p>
        <<span class="highlight">Portfolio Principal</span>> ------------------ <a href="https://github.com/Lusqinha/portfolio-backend" target="_blank">Lusqinha/portfolio-backend</a><br>
        <<span class="highlight">Portfolio Terminal</span>> ------------------- <a href="https://github.com/Lusqinha/portfolio_terminal" target="_blank">Lusqinha/portfolio_terminal</a><br>
        <<span class="highlight">PecManager</span>> --------------------------- <a href="https://github.com/Lusqinha/PecManager" target="_blank">Lusqinha/PecManager</a><br>
        <<span class="highlight">FootballCareerSimulator</span>> -------------- <a href="https://github.com/Lusqinha/FootballCareerSimulator" target="_blank">Lusqinha/FootballCareerSimulator</a><br>
        <<span class="highlight">Cloud privada</span>> ------------------------ Projeto empresarial<br>
        <<span class="highlight">Agenda de atendimentos</span>> --------------- Empresarial//código aberto em breve<br>
    </p>
`
const habilidades = `
    <p>
        +---- <<<span class="highlight">Habilidades</span>>> ----+<br>
        |- <<span class="highlight">Javascript</span>> ----------|<br>
        |- <<span class="highlight">Python</span>> --------------|<br>
        |- <<span class="highlight">Linux</span>> ---------------|<br>
        |- <<span class="highlight">Java</span>> ----------------|<br>
        |- <<span class="highlight">SQL</span>> -----------------|<br>
        |- <<span class="highlight">Go</span>> ------------------|<br>
        +-------------------------+ <br>
    </p>
`
const carreira = "Atualmente atuo como Solution Developer, Analista de Suporte e SysAdmin na Prática Certificação Digital."

const estudo = 'Estou cursando Análise e Desenvolvimento de Sistemas na <span class="highlight">PUCRS</span> e fazendo alguns cursos na área de <span class="highlight">cibersegurança</span> paralelamente.'

export const comm_ptbr = {
    "help": ajuda,
    "whois": whois,
    "whoami": whoami,
    "ping": "• ¬(•-•) PONG!",
    "playlist": playlist,
    "social": social,
    "projetos": projetos,
    "habilidades": habilidades,
    "carreira": carreira,
    "estudo": estudo,
}

export const error_ptbr = `Comando não encontrado, digite <span class="highlight">help</span> para ver a lista de comandos`;

