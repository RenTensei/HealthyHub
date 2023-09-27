import { RotatingLines } from 'react-loader-spinner';

export const Fetcher = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: '555',
        backgroundColor: 'rgba(5, 5, 5, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <RotatingLines
        strokeColor="#B6C3FF"
        strokeWidth="3"
        animationDuration="0.75"
        width="120"
      />
    </div>
  );
};
