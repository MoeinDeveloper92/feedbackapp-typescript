import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sit
          omnis, numquam ducimus ut ipsam eum delectus enim, temporibus eius
          error. Nemo adipisci distinctio quos dolorum, cumque ab modi deleniti
          incidunt unde et consequuntur qui neque. Repudiandae molestiae iusto
          illo esse aliquam explicabo. Ab fugiat in, beatae perferendis
          explicabo nesciunt!
        </p>
        <p>Version 1.0.0</p>
        <Button version="secondary" isDisabled={false}>
          <Link to={'/'}> Home</Link>
        </Button>
      </div>
    </Card>
  );
};

export default About;
