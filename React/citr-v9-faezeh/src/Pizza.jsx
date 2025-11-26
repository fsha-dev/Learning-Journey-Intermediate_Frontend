export default function Pizza({ name, description, pic }) {
  return (
    <>
      <div className="pizza">
        <img src={pic ? pic : "https://picsum.photo/200"} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
