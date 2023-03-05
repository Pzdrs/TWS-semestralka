const blacklist = [
    'shit', 'fuck', 'cunt', 'dick', 'damn', 'die', 'rape'
]

const lengthLimits = [5, 9999];

function validate(form) {
    const message = form.querySelector('textarea[name="message"]').value;
    // Profanity filter
    for (const word of blacklist) {
        if (message.includes(word)) return false;
    }

    // Length filter
    if (message.length < lengthLimits[0] || message.length > lengthLimits[1]) return false;

    return true;
}