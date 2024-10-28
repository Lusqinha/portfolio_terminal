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
    <span class="highlight">estudo</span> ------------ Formação acadêmica<br>
    <span class="highlight">clear</span> ------------- Limpa o terminal
    <br>
</p>
`

const whois = 'Meu nome é Lucas Borges, ou somente "Lusqinha" para a internet, fui pego pelo enorme <em>Rabbit Hole</em> que é <span class="highlight">GNU/Linux</span> e a cultura de software livre, onde acabei me interessando por programação e cibersegurança.<br><br>deixando um pouco a internet de lado, tenho uma paixão crescente por carros e em especial pelo meu querido <span class="highlight">Civic 2005</span>, o qual sou o orgulhoso dono de um exemplar (futuramente deixarei algumas fotos aqui), inclusive, venho desenvolvendo recentemente um computador de bordo baseado na comunicação OBD2 e Arduino; outra de minhas fixações é a música, sendo mais específico, a banda <span class="highlight">Charlie Brown Jr.</span> ocupa boa parte das minhas playlists e fones durante o dia, encontrar um grupo onde todas músicas são ótimas é raro, porém dentre todos álbuns, gostaria de recomendar apenas uma música para que possa te introduzir melhor aos clássicos da banda, peço que escute <span class="highlight"><a href="https://www.youtube.com/watch?v=DRhEueqE7Uw&pp=ygUQY2hhcmxpZSBicm93biBqcg%3D%3D" target="_blank">Lugar ao sol</a></span>, prometo que sua atenção não será em vão.'

const whoami = "Você é um visitante, para respostas mais complexas recomendo um psicólogo, não um desenvolvedor."

const playlist = `
<p>
    A playlist está no Spotify, mas recomendo que utilize outro player como por exemplo o <span class="highlight"><a href="https://spotube.krtirtho.dev/" target="_blank"></a>Spotube</span>.<br>

    <span class="highlight">Link</span> ----------------- <a href="https://open.spotify.com/playlist/3tSiLpa5XAPTN3BiGxt7E1 target="_blank">Meu Mix</a><br>

</p>
`

const social = `
    <p> Você pode me encontrar nas redes:<br>
        <span class="highlight">GitHub</span> --------------  <a href="https://github.com/Lusqinha" target="_blank">github.com/Lusqinha</a><br>
	<span class="highlight">Twitter/X</span> -----------  <a href="https://x.com/kernelape" target="_blank">KernelApe</a><br>
    </p>
`

const projetos = `
    <p>
        <<span class="highlight">Portfolio Principal</span>> ------------------ <a href="https://github.com/Lusqinha/portfolio-backend" target="_blank">Lusqinha/portfolio-backend</a><br>
        <<span class="highlight">Portfolio Terminal</span>> ------------------- <a href="https://github.com/Lusqinha/portfolio_terminal" target="_blank">Lusqinha/portfolio_terminal</a><br>
        <<span class="highlight">PecManager</span>> --------------------------- <a href="https://github.com/Lusqinha/PecManager" target="_blank">Lusqinha/PecManager</a><br>
        <<span class="highlight">Agenda de atendimentos</span>> --------------- Privado//código aberto em breve<br>
    </p>
`
const habilidades = `
    <p>
        +---- <<<span class="highlight">Habilidades</span>>> ----+<br>
        |- <<span class="highlight">Javascript</span>> ----------|<br>
        |- <<span class="highlight">Python</span>> --------------|<br>
        |- <<span class="highlight">Linux</span>> ---------------|<br>
        |- <<span class="highlight">Java</span>> ----------------|<br>
        |- <<span class="highlight">Ruby</span>> ----------------|<br>
        |- <<span class="highlight">Go</span>> ------------------|<br>
        +-------------------------+ <br>
    </p>
`
const carreira = "Atualmente estou em busca de uma oportunidade de estágio na área de desenvolvimento Fullstack e Backend. Recentemente atuei como Help Desk, Analista de Suporte e SysAdmin na Prática Certificação Digital, durante todo meu tempo como colaborador adquiri uma grande experiência na área de suporte e gerenciamento de sistemas."

const estudo = 'Estou cursando Análise e Desenvolvimento de Sistemas na <span class="highlight">PUCRS</span> e realizando projetos como freelancer <span class="highlight">Fullstack</span> paralelamente.'

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

