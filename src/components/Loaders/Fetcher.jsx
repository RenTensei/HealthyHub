import { InfinitySpin } from 'react-loader-spinner';

export const Fetcher = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: '555',
        backgroundColor: 'rgba(5, 5, 5, 0.6)',
        // opacity: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <div style={{ transform: 'scale(1.5)' }}>
        <InfinitySpin color="#45FFBC" ariaLabel="fetching" />
      </div>
    </div>
  );
};
