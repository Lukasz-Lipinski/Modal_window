export default function Button({ children, handleClick, className }) {
  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
