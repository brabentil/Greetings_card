import PropTypes from 'prop-types';

export default function GreetingCard({ title, message }) {
    return (
      <div className="border p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{message}</p>
      </div>
    )
}

GreetingCard.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};