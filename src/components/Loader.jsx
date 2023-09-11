import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

const Loader = ({ height, width, top }) => {
  return (
    <>
      <Oval
        height={height}
        width={width}
        color="#ffffff"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: top,
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffffff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <p style={{ margin: '0 auto', width: '70px', fontSize:'17px' }}>Loading...</p>
    </>
  );
};

Loader.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Loader;
