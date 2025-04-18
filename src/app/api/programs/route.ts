export async function GET() {
  const res = await fetch("https://cms.mantis-185.ru/api/programs", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
