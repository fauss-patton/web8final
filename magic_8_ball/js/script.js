function shake() {
    flip()
    var fortune=get_a_fortune()
    display_fortune(fortune)
}

function flip() {
    // we arent animating yet
}

function get_a_fortune() {
    let fortunes=["Signs point to yes", "It is certain", "It is decidedly so", "Without a doubt", "Yes definetly", "You may rely on it", "As i see it, yes", "Most likely", "Outlook good", "Yes", "Don't count on it", "My reply is no", "My sources say no", "Outlok not so good", "Very doubtful", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Reply hazy try again",]
    let random_index=randInt(fortunes.length)
    return fortunes[random_index]
}

function randInt(length) {
    let r=Math.random()
    let br=r*length
    let index=Math.floor(br)
    return index
}

function display_fortune(fortune) {
    alert(fortune)
}