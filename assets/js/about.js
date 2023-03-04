const faq = [
    ['How much are you going to charge me?', 'I\'m not here to rip you off, just trying to make an honest living. The price will depend on the scale of the project.'],
    ['What is the best way of contacting you?', "I'm most active on <a href='mailto:petr.bohac@tul.cz'>email</a>, but you can also reach me on <a href='https://twitter.com/pycrs_' target='_blank'>twitter</a>."],
    ['What is your favorite color?', 'Blue.'],
    ['What is the meaning of life?', '42.'],
    ['What happens if I don\'t pay you?', 'I\'ll send my lawyers after you.'],
    ['What happens after you finish the project?', 'I\'ll be happy to help you with any future updates.'],
    ['Do you use GitHub Copilot?', 'You bet I do, in fact I\'m using it right now.', ['What do I use it for?', 'Mostly as an alternative to lorem ipsum.']],
]
const tools = [
    ['JetBrains products', 'I use <a href="https://www.jetbrains.com/?from=pycrs" target="_blank">JetBrains</a> products for all my projects.'],
    ['GitHub Copilot', 'I use <a href="https://copilot.github.com/" target="_blank">GitHub Copilot</a> for all my projects.'],
    ['GitHub', ''],
    ['WSL', 'I love having a full blown Linux environment on my Windows machine.'],
    ['Spotify', 'You can\'t be having 10h coding sessions without some good music.'],
    ['Docker', 'With Docker I can deploy and test my app in no time.', ['Portainer', 'Portainer is a great tool that I use as well for managing Docker containers.']],
]

render(document.querySelector('ol#top7tools'), tools, 'ol');
render(document.querySelector('ul#faq'), faq, 'ul');

function render(wrapper, content, nextTag) {
    for (const [_, [q, a, next]] of content.entries()) {
        let html = `
        <li>
            <h3>${q}</h3>
            <p>${a}</p>                      
        `
        if (next !== undefined) html += `
            <${nextTag}>
                <li>
                    <h4>${next[0]}</h4>
                    <p>${next[1]}</p>
                </li>
            </${nextTag}>
        `
        html += '</li>'
        wrapper.innerHTML += html;
    }
}