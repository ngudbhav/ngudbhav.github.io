export const submit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data);
}
