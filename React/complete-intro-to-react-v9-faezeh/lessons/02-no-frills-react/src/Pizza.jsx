export default function Pizza({ name, description }) {
  return (
    <>
      <div className="pizza">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
