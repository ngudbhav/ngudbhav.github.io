const SUCCESS_CODE = 200;

export const contactSubmit = async (formData) => {
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

export const shopperMerchants = (event, data) => {
  const query = event.target.value;
  const input = normalize(query);
  return data.allMerchantsJson.nodes.filter(m => m.name.toLowerCase().includes(input));
}

export const shopper = (inputQuery, data) => {
  const input = normalize(inputQuery);
  return data.allMerchantsJson.nodes.find(m => m.name.toLowerCase().includes(input));
};

const normalize = (str) => str.toLowerCase().replace(/^https?:\/\//, "").replace(/\/$/, "");

const alert = () => window.alert('Something went wrong. Please try again.');
