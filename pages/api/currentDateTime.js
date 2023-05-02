export default function handler(req, res) {
  const method = req.method;
  if (method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const now = new Date();
  const data = {
    year: now.getFullYear(),
    month: now.getMonth() + 1, // javascript month starts from 0
    day: now.getDate(),
    minute: now.getMinutes(),
    seconds: now.getSeconds(),
    milliSeconds: now.getMilliseconds(),
    dateTime: now, //NextJs will serialize to a string
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
    dayOfWeek: now.getDay(),
  };

  res.status(200).json(data);
}
