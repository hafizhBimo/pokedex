import pokeball from '../assets/pokeball.png';
import PokeTypeList from './PokeTypeList';

export default function PokeDetail({ detailData }) {
  console.log(detailData?.types, '<<<<<<<<<');
  return (
    <div className=' grid grid-cols-2'>
      <div className='row-span-3 justify-self-center'>
        <img width={350} src={detailData?.sprites?.back_default} />
      </div>
      <div className='flex-col'>
        <div className=' flex items-center'>
        <img style={{ width: '30px', height: 'fit-content' }} src={pokeball} />
        <p className=' font-bold text-xl'>{detailData?.name}</p>
        </div>
        <div className=''>
          <PokeTypeList dataTypeList={detailData?.types} />
        </div>
      </div>
      <div className=' bg-red-400'>hehe</div>
      <div className=' bg-yellow-300'>mhehe</div>
    </div>
  );
}
