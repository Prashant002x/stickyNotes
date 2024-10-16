export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
    const offsetLeft = card.offsetLeft - mouseMoveDir.x;
    const offsetTop = card.offsetTop - mouseMoveDir.y;
 
    return {
        x: offsetLeft < 0 ? 0 : offsetLeft,
        y: offsetTop < 0 ? 0 : offsetTop,
    };
};


export const autoGrow = (textareaRef)=>{
    const {current} = textareaRef;
    current.style.height= "auto";
    current.style.height= current.scrollHeight + "px";
}

export const setZIndex = (selectedCard)=>{
    selectedCard.style.zIndex= 999;
    const allCards= document.getElementsByClassName("card");


    for( let card of allCards) {
        if(card!== selectedCard) {
            card.style.zIndex=998;
        }
    }
}

export const bodyParser = (body)=>{
    try {
       return  JSON.parse(body);
    } catch (error) {
        return body;
    }
}