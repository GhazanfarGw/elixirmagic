import CIA from './Agency SVG/Cia';
import FIB from './Agency SVG/Fbi';
import FIN from './Agency SVG/Fin';
import NASE from './Agency SVG/Nasa';
import MIG from './Agency SVG/Mig';
import SIG from './Agency SVG/Sig';
import MIT from './Agency SVG/Mitlo';
import Mossad from "./Agency SVG/Mossad";
import Stemma from "./Agency SVG/Stemma";
import Zealand from "./Agency SVG/Zealand";
import Sis from "./Agency SVG/Sis";
import Gru from "./Agency SVG/Gru";
import Arabia from "./Agency SVG/Arabia";
import Seal from "./Agency SVG/Seal";
import Escudo from './Agency SVG/Escudo';
import Canadian from './Agency SVG/Canadian';
import Chain from './Agency SVG/Chain';
import Fran from './Agency SVG/Fran';
import Ind from './Agency SVG/Ind';
import Interpol from './Agency SVG/Interpol';
import Iran from './Agency SVG/Iran';
import Irs from './Agency SVG/Irs';
import Hm from './Agency SVG/Hm';
import SEc from './Agency SVG/SEc';

function Agency() {
  return (

    <>
    <div data-aos="zoom-in-up" data-aos-delay="300" className='grid-cols-4 px-5 mx-auto justify-center text-center items-center block md:hidden lg:hidden pt-20 pb-20'>
      <h1 className='text-3xl text-[#dfc660] justify-center text-center mx-auto pt-3'>
        Protect your transaction from.
      </h1>
      <div className='w-80 flex items-center justify-center mx-auto gap-x-2'>
        <CIA/>
        <FIB/>
        <FIN/>
        <Seal/>
        <Escudo/>
      </div>
      <div className='w-80 flex items-center justify-center h-0 mx-auto gap-x-0 pt-5'>
        <Ind/>
        <MIG/>
        <MIT/>
        <NASE/>
        <Chain/>
      </div>
      <div className='w-80 flex items-center justify-center mx-auto gap-x-3 pt-5'>
        <Stemma/>
        <Sis/>
        <Gru/>
        <Fran/>
        <Mossad/>
      </div>
      <div className='flex items-center justify-center h-28 mx-auto'>
        <Irs/>
        <SEc/>
        <Iran/>
        <Interpol/>
      </div>
      <div className='flex items-center justify-center h-0 mx-auto gap-x-1 pt-3'>
        <Canadian/>
        <Hm/>
        <SIG/>
        <Zealand/>
      </div>
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="300" className='pt-20 hidden md:block lg:block px-5 md:px-10'>
      <h1 className='justify-center text-center mx-auto py-10 max-w-xl md:text-5xl text-3xl text-[#dfc660]'>
        Privacy of your bitcoin transactions
      </h1>
      <div className='flex justify-center text-center mx-auto gap-5 mt-10'>
        <CIA/>
        <FIB/>
        <FIN/>
        <NASE/>
        <Seal/>
        <Escudo/>
        <Ind/>
        <Chain/>
      </div>
      <div className="flex justify-center text-center mx-auto gap-5 pt-10">
        <MIG/>
        <MIT/>
        <Mossad/>
        <Fran/>
        <Sis/>
        <Stemma/>
        <Gru/>
        <Irs/>
        <SEc/>
      </div>
      <div className="flex justify-center text-center mx-auto">
        <Zealand/>
        <SIG/>
        <Canadian/>
        <Hm/>
        <Interpol/>
        <Iran/>
        <Arabia/>
      </div>
    </div>
    </>
  )
}

export default Agency
