
import './App.css'
import Context from './components/Content'
import Header from './components/Header'
import data from './data';

function App() {

  const displayComponents = data.map((datas) => {
    return (
      <Context
        key={datas.id}
        datas={datas}
        // you can as well pass props with the spread operator {...datas}. you'd just have to change this {props.datas.img.alt} to this {props.img.alt} in the child component
        // img={datas.img}
        // title={datas.title}
        // country={datas.country}
        // googleMapslink={datas.googleMapsLink}
        // dates={datas.dates}
        // text={datas.text}
      />
    );
  })

 

  return (
    <>
      <Header />
      <main>{displayComponents}</main>
    </>
  );
}

export default App
