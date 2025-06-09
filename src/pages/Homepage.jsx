import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Portfolio</h1>

      <Link to="/form">Life of Riley Form</Link>
      <Link to="/tribute">Tribute Page</Link>
      <Link to="/product">Product Landing Page</Link>
      <Link to="/documentation">Technical Documentation Page</Link>
    </div>
  );
}

export default Homepage;
