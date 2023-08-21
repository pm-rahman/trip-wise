import { CircleLoader } from 'react-spinners';

const Spinner = ({ size }) => {
    return <CircleLoader
        loading={true}
        size={size || 100}
        color="#36d7b7" />;
};

export default Spinner;