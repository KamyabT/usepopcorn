const ErrorMessage = ({ error }) => {
  return (
    <div className="error">
      <p>🚫{error}</p>
    </div>
  );
};

export default ErrorMessage;
