
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Not found</h2>
            <Link to='/'>Go bank to home</Link>

        </div>
    );
};

export default ErrorPage;