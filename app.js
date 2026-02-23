    const form = document.getElementById('generationForm');
    const result = document.getElementById('result');
    const pic = document.querySelector('.pic');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const birthYear = parseInt(document.getElementById('birthYear').value);
        let generation = birthYear >= 2013 ? 'Generation Alpha' :
                         birthYear >= 1997 ? 'Generation Z' :
                         birthYear >= 1981 ? 'Millennials' :
                         birthYear >= 1965 ? 'Generation X' :
                         birthYear >= 1946 ? 'Baby Boomers' : 
                         birthYear >= 1928 ? 'Silent Generation' :
                         birthYear < 1928 && birthYear >= 1901 ? 'Greatest Generation' : 'Unknown Generation';
        alert(`You belong to: ${generation}`)


        result.textContent = `You belong to: ${generation}`;
        pic.innerHTML = `<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsixtygram.com%2Fsixtygram_content%2Fuploads%2F2025%2F01%2FGeneration_timeline.svg_-2048x1280.png&f=1&nofb=1&ipt=7369aff5f9d04d0a2cef7760b9c23809e298afe9d455b031048f14b6301d0300" width="100%" alt="${generation}">`;
        form.reset();
    });