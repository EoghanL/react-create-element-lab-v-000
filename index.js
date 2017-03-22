//Code React element here
let counter = 0;

const liGenerator = function(text){
  return React.createElement('li', { key: counter++ }, `${text}`)
}

const Title = React.createElement('h1', { key: counter++ }, 'An Awesome Person');
const Tagline = React.createElement('p' , { key: counter++ }, 'Who is learning React');
const Interests = React.createElement('ul', { key: counter++ }, [
    liGenerator("JavaScript"),
    liGenerator("React"),
    liGenerator("Movies"),
    liGenerator("Ice cream")
])

const meInReact = React.createElement('div', { className: 'me' }, [ Title, Tagline, Interests ]);


ReactDOM.render(
  meInReact,
  document.getElementById('main')
)
