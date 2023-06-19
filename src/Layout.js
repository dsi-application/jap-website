import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeScreen from './screens/Home/HomeScreen';
import Etablissement from './components/Etablissement/Etablissement';
import CardMenu from './components/CardMenuSet/CardMenu';
import Sal2019 from './components/Sal2019/Sal2019';
import Organisation from './components/Organisation/Organisation';
import Video from './components/Video/Video';
import Acit1 from './components/Activities/Acit1';
import Acit2 from './components/Activities/Acit2';
import A7 from './components/Activities/A7';
import Pictogramme from './components/Pictogramme/Pictogramme';
import Acit3 from './components/Activities/Acit3';
import Acit4 from './components/Activities/Acit4';
import Acit5 from './components/Activities/Acit5';
import Activities from './components/Activities/Activities';
import Services from './components/Services/Services';
import Partners from './components/Partner/Partner';
import Works from './components/Works/Works';
import Loading from './loading';
import Footer1 from './components/Footer/Footer1';
import ListArticles from './components/Articles/ListArticles';


const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
  }, []);

  return (
    <>
      
      {isLoaded ? (
        <div className="loader-container">
          <Loading />
        </div>
      ) : (
        <div>
        <div 
        style={{
        //  backgroundImage:"url('/src/background-logo.png')",
        //  backgroundSize: 'cover',
        //  backgroundPosition: 'center',
         width: '100%',
         height: '120vh',
         position: 'fixed',
         zIndex:'-1',
         display: 'flex',
         overflow: 'hidden',
         justifyContent: 'center',
         alignItems: 'center',
         animation: 'water 5s ease-in-out infinite',
     }}
        
        >
        <img src="./background-logo.png" style={{
        //  backgroundImage:"url('/src/background-logo.png')",
        //  backgroundSize: 'cover',
        //  backgroundPosition: 'center',
         width: '100%',
         height: '120vh',}} alt="logo" />
 
        </div>
        <Router>
          <Header />
          <Switch>
            
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/etablissement" component={Etablissement} />
            <Route exact path="/cardMenu" component={CardMenu} />
            <Route exact path="/sal2019" component={Sal2019} />
            <Route exact path="/organisation" component={Organisation} />
            <Route exact path="/pictogramme" component={Pictogramme} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/acit1" component={Acit1} />
            <Route exact path="/acit2" component={Acit2} />
            <Route exact path="/acit3" component={Acit3} />
            <Route exact path="/acit4" component={Acit4} />
            <Route exact path="/acit5" component={Acit5} />
            <Route exact path="/a7" component={A7} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/articles" component={ListArticles} />
          </Switch>
          <Footer1 />
        </Router>
        </div>
  
      )}
   
    </>
  );
};

export default Layout;
