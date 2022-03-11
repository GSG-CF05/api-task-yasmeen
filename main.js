let app = document.querySelector('#cards')

let container = document.createElement('div')
container.setAttribute('class' , 'container')
app.appendChild(container)


fetch('https://restcountries.com/v2/all')
    .then((res) => {
        return res.json()
    }).then(data => {
      data.forEach(countries => {
          let card = document.createElement('div')
          card.setAttribute('class' , 'card')
          container.appendChild(card)

          // let flags = document.createElement('img')
          // flags.textContent = countries.flag.src
          // card.appendChild(flags)

          let flags = document.createElement('img')
          flags.src =  countries.flag;
          card.appendChild(flags)

          let name = document.createElement('h1')
          name.textContent = countries.name
          card.appendChild(name)

          let capital = document.createElement('h5')
          capital.textContent = countries.capital
          card.appendChild(capital)

          let language = document.createElement('p')
          language.textContent = countries.borders
          card.appendChild(language)

      })

    });

// .catch(error => console.log('Something went wrong', error))