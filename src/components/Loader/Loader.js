import { MutatingDots } from 'react-loader-spinner';
//--------------------------------------------------------//
export const Loader = () => {
  return (
    <div>
      <MutatingDots
        wrapperStyle={{
          dispay: 'flex',
          justifyContent: 'center',
          marginTop: 200,
          color: '#00BFFF',
        }}
      />
    </div>
  );
};
