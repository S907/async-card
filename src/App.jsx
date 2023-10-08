import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { data } from './services/api'
import CardOne from './components/CardOne';
import { Col, Container, Row } from 'react-bootstrap';
import SkeletonCard from './components/loader/SkeletonCard';
import SkeketonBoot from './components/loader/SkeketonBoot';



const App = ()=> {
  const [count, setCount] = useState(0);
  const [serverVal, setServValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[getPhoto, setPhoto]=useState([]);
  const [joinData, setJoinData]=useState([]);

  useEffect(() => {
    let ignore = false;
    setServValue([]);
    setIsLoading(true);
    fetch('http://localhost:3001/products')
    .then((res) => res.json())
    .then(data => {
      setServValue(data);
      // setIsLoading(false);
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then(data => {
        // for(let i=0; i<j; i++){
          //This does not work as fetch is asynchronous for loop works in synchronous condition 
        //   setPhoto(data[i].url);
        // }
        const first20Data= data.slice(0,20);
        setPhoto(first20Data);
        // // console.log('++++++server+++', {...first20Data, serverVal});
        // if(serverVal){
        //   //this joins data but i wanted to return an array of values
        //   const joinedData={...first20Data, serverVal}
        //   setJoinData(joinedData);
        // }
        if(serverVal && getPhoto){
          const cardsWithPhotos = serverVal.map((data)=>{ 
            console.log('++++daid++++',data.id );
              const photoApi = getPhoto.find(photo => photo.id == data.id);
              return { photo:photoApi, cardName:data}
          })
          console.log('+++++++cardphto+++',cardsWithPhotos);
          
          // This does not work as its filter
          // const cardsWithPhotos = serverVal.filter((data)=>{
          //   console.log('+++filterdata+++',data);
          //   const photoApi = getPhoto.find(photo => photo.id == data.id);
          //   return data.id == photoApi
          // })
          // setJoinData(cardsWithPhotos);
        }
        setIsLoading(false);
      })
    })
    return () => {
      ignore = true;
    };
  }, []);
  // console.log(serverVal);
  console.log('++++++joinVal++++++', joinData);
  // console.log('++++++phVal++++++', getPhoto);

  // useEffect(()=>{
  //   let ignore = false;
  //   setServValue([]);
  //   setIsLoading(true);
  //   fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json()).then(data => {
  //     // for(let i=0; i<j; i++){
  //     //   setPhoto(data[i].url);
  //     // }
  //     const first20Data= data.slice(0,20);
  //     setPhoto(first20Data);
  //     setIsLoading(false);
  //   });
  //   return () => {
  //     ignore = true;
  //   };
  // },[]);

  return (
    <>
      <div className="containerTwo">
        <h1>New App</h1>
        <h3>Total Value:::</h3>
      </div>
      <main>
        <section className='sec-one'>
          <div className="section1">
            <Container className="px-4 py-4 mx-5">
              <Row>
                {isLoading && Array(8).fill().map((item, index) => (
                  <SkeketonBoot />
                ))
                }
              </Row>
            </Container>
            <h3>Card Section</h3>
            <Container className="px-4 py-4 mx-5">
              <Row>
                {!isLoading && joinData.map((data) => {
                  return (
                    <CardOne desc={data.cardName.description} name={data.cardName.name} idVal={data.cardName.id} value={data.cardName.value} url={data.photo.url} />
                  )
                })}
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </>
  )
};

export default App;
