import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/css/style4.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Details = () => {
  return (
    <>
    <div className='text-black flex items-center justify-center p-20'>
      <div className='w-1/2 items-center justify-center flex'>
        <img src="/images/pdp.png" alt="" className=' bg-gray-300 rounded-full w-2/3'/>
      </div>
      <div className='w-1/2 text-justify p-20'>
        <div>
          <p>Bonjour,</p>
          <p>je suis <span><span>Safidy</span>Rakotonirina</span>,</p>
          <p><span>developpeur front-end</span>passionné.</p>
          <p>Je maîtrise plusieurs langages de programmation, dont <span>HTML</span>, <span >CSS</span>, <span>JavaScript</span>, <span>ReactJs</span> et <span>PHP</span>.</p>
          <p>Toujours curieux et motivé, j’aime découvrir de nouvelles technologies et m’investir pleinement dans le plaisir d’apprendre et de les maîtriser.</p>
        </div>
        <div>
        </div>
          <button className='bg-blue-700 text-white mt-3'>Mon CV <FontAwesomeIcon icon={faDownload}/> </button>
          <button className='bg-blue-700 text-white ml-4'>Me contacter</button>
          <br />
      </div>
    </div>
    </>
  );
}