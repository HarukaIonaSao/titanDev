const titans = [
    {
      id: 1,
      nome: "Titã de Ataque",
      imagem: "src/images/eren.png",
      portador: "Eren Yeager",
      habilidades:
        "Habilidades de combate. Acesso às memórias de todos os eldianos e visões do futuro.",
      nacionalidade: "Eldia",
      linkVideo: "https://youtu.be/63CfyMA4bRs?si=_LUy9lS9wuxp1XbX",
    },
    {
      id: 2,
      nome: "Titã Fundador",
      imagem: "src/images/fundador.png",
      portador: "Grisha Yeager/Eren Yeager",
      habilidades:
        "Pode criar e controlar todos os titãs, modificar as memórias e corpos dos eldianos.",
      nacionalidade: "Eldia",
      linkVideo: "https://youtu.be/j60Ng_bWa38?si=Ygy0UJS1oeu8vIS4",
    },
    {
      id: 3,
      nome: "Titã Colossal",
      imagem: "src/images/colossal.png",
      portador: "Bertolt Hoover/Armin Arlet",
      habilidades:
        "É enorme e pode evaporar seu corpo para liberar imensas quantidades de vapor.",
      nacionalidade: "Marley/Eldia",
      linkVideo: "https://youtu.be/gsTIs917Exg?si=YmfNoDVVbvmHm6E7",
    },
    {
      id: 4,
      nome: "Titã Fêmea",
      imagem: "src/images/femea.png",
      portador: "Annie Leonhart",
      habilidades:
        "Pode herdar habilidades muito mais facilmente do que qualquer um dos outros Titãs. Alta habilidade de regeneração.",
      nacionalidade: "Marley",
      linkVideo: "https://youtu.be/xui4AbAsKlY?si=KjisCUsYtaxte2pn",
    },
    {
      id: 5,
      nome: "Titã Blindado",
      imagem: "src/images/blindado.png",
      portador: "Reiner Braun",
      habilidades:
        "Também conhecido por titã encouraçado.Ele também possui a capacidade de endurecer seus braços e pés em garras mais afiadas que podem ser usadas para escalar estruturas como as Muralhas.",
      nacionalidade: "Marley",
      linkVideo: "https://youtu.be/NEG1cndv1OI?si=RHeUdNzfin2B_3K2",
    },
    {
      id: 6,
      nome: "Titã Bestial",
      imagem: "src/images/bestial.png",
      portador: "Zeke Yeager",
      habilidades:
        "É o único além do quadrúpede capaz de falar na forma de Titã, podendo controlar titãs puros através da conversa e até mesmo transformar pessoas ao seu redor em Titãs puros",
      nacionalidade: "Eldia",
      linkVideo: "https://youtu.be/bOWpgoVqJ2U?si=_Zg6m6xKWmrC3Ao5",
    },
    {
      id: 7,
      nome: "Titã Mandíbula",
      imagem: "src/images/mandibula.png",
      portador: "Marcel Galliard/Ymir/Porco Galliard/Falco",
      habilidades:
        "É o mais rápido dos Nove Titãs, tem dentes afiados e endurecidos e garras capazes de quebrar quase qualquer coisa",
      nacionalidade: "Marley",
      linkVideo: "https://youtu.be/n7_nfe7DceM?si=thpgmtlGmHjdCwgb",
    },
    {
      id: 8,
      nome: "Titã Carroceiro",
      imagem: "src/images/carroceiro.png",
      portador: "Pieck Finger",
      habilidades:
        "Conhecido também por titã quadrúpede.Grande resistência que o permite permanecer transformado por longos períodos de tempo",
      nacionalidade: "Marley",
      linkVideo: "https://youtu.be/0OYdAITH1gw?si=M0E0s1pMI8-WyjJ4",
    },
    {
      id: 9,
      nome: "Titã Martelo de Guerra",
      imagem: "src/images/martelo.png",
      portador: "Lala Tybur/Eren Yeager",
      habilidades:
        "Pode endurecer sua carne em várias armas e estruturas. Pode ser controlado a distância.",
      nacionalidade: "Marley/Eldia",
      linkVideo: "https://www.youtube.com/watch?v=ssyZGQn9_ns",
    },
  ];
  
  const cardsTitanDiv = document.querySelector(".cards-titan");
  const listaTitans = document.getElementById("lista-titans");
  
  function criarCardTitan(titan) {
    const cardDiv = document.createElement("div");
    cardDiv.style.backgroundColor = "var(--bg-card)";
    cardDiv.classList.add("card-titan", titan.nacionalidade.toLowerCase() === 'eldia' ? 'eldia' : 'marley');
    cardDiv.setAttribute("id", `card-${titan.nome.toLowerCase().replace(/\s/g, '')}`);
  
    cardDiv.innerHTML = `
      <div class="card-topo">
        <div class="detalhes">
          <h2 class="nome">${titan.nome}</h2>
          <span>#${titan.id.toString().padStart(3, '0')}</span>
        </div>
        <span class="tipo">${titan.nacionalidade}</span>
        <div class="card-imagem">
          <img src="${titan.imagem}" alt="${titan.nome}" />
        </div>
      </div>
      <div class="card-informacoes descricao">
        <div class="descricao">
          <h3>Habilidades</h3>
          <p><em>Portador(es):</em><strong> ${titan.portador}</strong></p>
          <p>${titan.habilidades}</p>
        </div>
        </div>
        <div class="saiba-mais"> 
          <a href="${titan.linkVideo}" target="_blank">Saiba Mais</a> 
        </div>
    `;
    return cardDiv;
  }
  
  function criarItemLista(titan) {
    const li = document.createElement("li");
    li.classList.add("titan");
    li.setAttribute("id", titan.nome.toLowerCase().replace(/\s/g, ''));
  
    li.innerHTML = `
      <img src="${titan.imagem}" alt="${titan.nome}" />
      <span>${titan.nome}</span>
    `;
  
    li.addEventListener('mouseover', () => {
      const cardId = `card-${titan.nome.toLowerCase().replace(/\s/g, '')}`;
      mostrarCard(cardId,titan.imagem);
    });
  
    li.addEventListener('mouseout', () => {
      const cardAtivo = document.querySelector('.card-titan.active');
      if (cardAtivo) {
          mostrarCard(cardAtivo.id);
      }
    });
  
    return li;
  }
  
  function mostrarCard(cardId) {
    const cards = document.querySelectorAll('.card-titan');
    cards.forEach(card => card.classList.remove('active'));
  
    const card = document.getElementById(cardId);
    if (card) {
      card.classList.add('active');
    }
  }
  
  titans.forEach(titan => {
    const cardTitan = criarCardTitan(titan);
    cardsTitanDiv.appendChild(cardTitan);
  
    const itemLista = criarItemLista(titan);
    listaTitans.appendChild(itemLista);
  });
  
  document.getElementById("card-titãdeataque").classList.add("active");
  document.getElementById("titãdeataque").classList.add("active");
