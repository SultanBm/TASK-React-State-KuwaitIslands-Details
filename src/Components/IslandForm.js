export default function IslandForm({ island }) {
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" />
      <input
        type="tel"
        id="telNo"
        name="telNo"
        placeholder="Type Phone Number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        maxLength={8}
        minLength={8}
        required
      />
      <button className="book" onClick={() => {}}>
        Book for today!
      </button>
    </div>
  );
}
