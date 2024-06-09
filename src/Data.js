export const mountain =
  "https://i.ibb.co/k5s2c49/rohit-tandon-9wg5j-CEPBsw-unsplash.jpg";
export const bluryRoom = "https://i.ibb.co/FYpPDHM/blurry-bedroom.jpg";

export const icons = {
  click: "https://i.ibb.co/VNhmgG6/click.png",
  interface: "https://i.ibb.co/f432JYW/web-interface.png",
  rensponsiblity: "https://i.ibb.co/qCG5rvt/responsive.png",
  order: "https://i.postimg.cc/RqwGjFWb/order.png",
};


export const testimonialData = [
  {
    id: 1,
    name: "Alice Johnson",
    socialMedia: "@wanderlust_alice",
    text: "Our stay at the Ocean View Hotel was absolutely fantastic! The room was spacious, clean, and had a breathtaking view of the ocean. The staff was incredibly friendly and accommodating. We enjoyed every moment.",
    img: "https://i.ibb.co/0FzQ3Sb/portrait.png"
  },
  {
    id: 2,
    name: "Sophia Williams",
    socialMedia: "@safari_sophie",
    text: "My family and I had an amazing time at the Safari Oasis Resort. The safari-themed accommodations were unique and charming. The highlight of our trip was the guided safari tour, where we got up close and personal with the wildlife.",
    img: "https://i.ibb.co/0FzQ3Sb/portrait.png"
  },
  {
    id: 3,
    name: "David Lee",
    socialMedia: "@adventure_dave",
    text: "Staying at the Desert Oasis Resort was a dream come true! The luxurious tents provided a unique blend of comfort and adventure. We loved exploring the nearby dunes during the day and stargazing around the campfire at night.",
    img: "https://i.ibb.co/0FzQ3Sb/portrait.png"
  },
  {
    id: 4,
    name: "David Lee",
    socialMedia: "@adventure_dave",
    text: "Staying at the Desert Oasis Resort was a dream come true! The luxurious tents provided a unique blend of comfort and adventure. We loved exploring the nearby dunes during the day and stargazing around the campfire at night.",
    img: "https://i.ibb.co/0FzQ3Sb/portrait.png"
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    socialMedia: "@beach_bum_emily",
    text: "I had a wonderful time at the Paradise Beach Resort. The beachfront location was perfect for relaxing and soaking up the sun. The resort's amenities exceeded my expectations, and the staff was friendly and attentive.",
    img: "https://i.ibb.co/0FzQ3Sb/portrait.png"
  },
  {
    id: 6,
    name: "Daniel Chen",
    socialMedia: "@urban_explorer_dan",
    text: "My stay at the City Lights Hotel was fantastic! The modern design and central location made it easy to explore the city. The rooftop bar offered stunning views of the skyline, and breakfast was a nice touch.",
    img: "https://i.ibb.co/0FzQ3Sb/portrait.png"
  }
];

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}