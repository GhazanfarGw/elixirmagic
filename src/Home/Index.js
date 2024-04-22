import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Features from './Features';
import Transaction from './Transaction';
import Howsystem from './Howsystem';
import Instruction from './Instruction';
import Agency from './Agency';
import Footer from './Footer';
import Post from './Post';
import Footermessge from './Footermessge';
import FAQ from './FAQ';


function Index() {
  
  return (
    <>
    <Navbar/> 
    <Dashboard/>
    <Transaction/>
    <Howsystem/>
    <Instruction/>
    <Agency/>
    <Features/>
    <Post/>
    <Footermessge/>
    <FAQ/>
    <Footer/>
   </>
  );
}

export default Index;