const SUCCESS_CODE = 200;

export const submit = async (formData) => {
  const object = {};
  formData.forEach((value, key) => object[key] = value);
  const options = {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await window.fetch(
    '/api/contact/', options,
  )
  if (response.status !== SUCCESS_CODE) {
    alert();
  }
}

const alert = () => window.alert('Something went wrong. Please try again.');
