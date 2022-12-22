export async function getHomes(cityName) {
  let url = "http://localhost:3000/listings";
  if (cityName) {
    url += `?city=${cityName}`;
  }
  const response = await fetch(url);
  if (response.status !== 200) throw new Error("Could not fetch");
  const data = await response.json();
  return data;
}
