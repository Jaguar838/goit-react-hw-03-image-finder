import Loader from 'react-loader-spinner';
import css from './Spinner.module.scss';
const Spinner = () => (
    <div className={css.Spinner}>
        <Loader color="#3f51b5" size="23" type="Watch" />
    </div>
);

export default Spinner;
