// Busca todos os scroller que existem na página
const scrollers = document.querySelectorAll(".scroller");

// Se um usuário não tiver optado pelo movimento "reduce", adicionaremos a animação.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

//Função que realiza a animação
function addAnimation() {
    scrollers.forEach((scroller) => {
        // Adiciona data-animated="true" a cada `.scroller` na página
        scroller.setAttribute("data-animated", true);

        // Faz uma matriz a partir dos elementos dentro de `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // Duplica todos os elementos filhos do elemento com a classe ".scroller__inner"
        scrollerContent.forEach((item) => {
            /* 
                Isso clona o elemento atual referenciado por item. 
                O parâmetro true passado para cloneNode indica que o clone deve ser uma cópia profunda, 
                o que significa que ele também clonará todos os elementos filhos e seu conteúdo. 
            */
            const duplicatedItem = item.cloneNode(true);
            // Oculto tecnologias assistivas, como leitores de tela.
            duplicatedItem.setAttribute("aria-hidden", true);
            // Adiciona dentro do elemento com a classe ".scroller__inner"
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
