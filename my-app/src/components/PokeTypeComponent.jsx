export default function PokeTypeComponent({ type }) {
  const colorPicker = () => {
    const colours = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };
    switch (type) {
      case 'normal':
        return `bg-gradient-to-t from-slate-500 via-[#A8A77A] to-slate-500`;

      case 'fire':
        return `bg-gradient-to-t from-slate-500 via-[#EE8130] to-slate-500`;

      case 'water':
        return `bg-gradient-to-t from-slate-500 via-[#6390F0] to-slate-500`;

      case 'electric':
        return `bg-gradient-to-t from-slate-500 via-[#F7D02C] to-slate-500`;

      case 'grass':
        return `bg-gradient-to-t from-green-200 via-[#7AC74C] to-green-200`;

      case 'ice':
        return `bg-gradient-to-t from-slate-500 via-[#96D9D6] to-slate-500`;

      case 'fighting':
        return `bg-gradient-to-t from-slate-500 via-[#C22E28] to-slate-500`;

      case 'poison':
        return `bg-gradient-to-t from-slate-500 via-[#A33EA1] to-slate-500`;

      case 'ground':
        return `bg-gradient-to-t from-slate-500 via-[#E2BF65] to-slate-500`;

      case 'flying':
        return `bg-gradient-to-t from-slate-500 via-[#A98FF3] to-slate-500`;

      case 'psychic':
        return `bg-gradient-to-t from-slate-500 via-[#F95587] to-slate-500`;

      case 'bug':
        return `bg-gradient-to-t from-slate-500 via-[#A6B91A] to-slate-500`;

      case 'rock':
        return `bg-gradient-to-t from-slate-500 via-[#B6A136] to-slate-500`;

      case 'ghost':
        return `bg-gradient-to-t from-slate-500 via-[#735797] to-slate-500`;

      case 'dragon':
        return `bg-gradient-to-t from-slate-500 via-[#6F35FC] to-slate-500`;

      case 'dark':
        return `bg-gradient-to-t from-slate-500 via-[#705746] to-slate-500`;

      case 'steel':
        return `bg-gradient-to-t from-slate-500 via-[#B7B7CE] to-slate-500`;

      case 'fairy':
        return `bg-gradient-to-t from-slate-500 via-[#D685AD] to-slate-500`;
      default:
        return;
    }
  };
  console.log(colorPicker('grass'));
  return (
    <div
      className={`${colorPicker('grass')} rounded-2xl px-2 border border-white ring-1 ring-black`}
    >
      {type}
    </div>
  );
}
