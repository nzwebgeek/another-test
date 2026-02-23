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
        pic.innerHTML = `<img src="generations.png" width="100%" alt="${generation}">`;
        form.reset();
    });