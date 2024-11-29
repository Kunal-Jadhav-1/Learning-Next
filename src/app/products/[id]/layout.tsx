export default function Product_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children} </h1>
      <div>
        <h2>Featured Layout</h2>
      </div>
    </div>
  );
}
