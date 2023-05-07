import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary">Login with Google</Button>
                <Button variant="outline-dark">Login with GitHub</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;