export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Let's start packing stuff 🥳</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((stuff) => stuff.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are good to go !!!"
          : `🧳You have ${numItems} items on your list,and you have already packed
        ${packedItems} items`}
      </em>
    </footer>
  );
}
