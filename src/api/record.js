export async function getRecords() {
  return await fetch(`${process.env.SERVER_URL}/record`, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
  });
}
