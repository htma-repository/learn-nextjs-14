export default function Food({
  params,
}: Readonly<{ params: { foodId: string } }>) {
  return (
    <section>
      <h1>{params.foodId} Page</h1>
    </section>
  );
}
