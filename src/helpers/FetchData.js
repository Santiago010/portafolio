export const FetchData = async (name, email, message) => {
  const url = "https://receiver-email-portfolio.vercel.app/send-email";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
  const body = await res.json();
  return body;
};
