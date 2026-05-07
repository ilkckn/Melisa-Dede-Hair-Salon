const galleryData = [
  // ── WOMEN ──
  {
    id: 1,
    category: "women",
    alt: "Women's precision cut",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 2,
    category: "women",
    alt: "Women's blowdry styling",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 3,
    category: "women",
    alt: "Women's haircut result",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 4,
    category: "women",
    alt: "Women's short cut",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 5,
    category: "women",
    alt: "Women's wavy style",
    image:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=1200&h=800&fit=crop&q=80",
  },

  // ── MEN ──
  {
    id: 6,
    category: "men",
    alt: "Men's classic cut",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 7,
    category: "men",
    alt: "Men's fade cut",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 8,
    category: "men",
    alt: "Men's beard grooming",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 9,
    category: "men",
    alt: "Men's modern style",
    image:
      "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 10,
    category: "men",
    alt: "Men's textured cut",
    image:
      "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&h=800&fit=crop&q=80",
  },

  // ── COLOR ──
  {
    id: 11,
    category: "color",
    alt: "Balayage highlights",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 12,
    category: "color",
    alt: "Full color transformation",
    image:
      "https://images.unsplash.com/photo-1767470047526-8d369f210b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    category: "color",
    alt: "Blonde highlights",
    image:
      "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    category: "color",
    alt: "Ombre color",
    image:
      "https://images.unsplash.com/photo-1571291903893-c6152b2efc22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    category: "color",
    alt: "Color treatment",
    image:
      "https://images.unsplash.com/photo-1648157963892-fa90a04e278b?q=80&w=1642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // ── BRIDAL ──
  {
    id: 16,
    category: "bridal",
    alt: "Bridal updo",
    image:
      "https://images.unsplash.com/photo-1581674210501-c760093514e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    category: "bridal",
    alt: "Bridal waves",
    image:
      "https://images.unsplash.com/photo-1523264114838-feca761983c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    category: "bridal",
    alt: "Bridal braid",
    image:
      "https://images.unsplash.com/photo-1672788725446-c303ec2b318e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    category: "bridal",
    alt: "Bridal styling",
    image:
      "https://images.unsplash.com/photo-1672788709547-6d7f239972c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    category: "bridal",
    alt: "Bridal half updo",
    image:
      "https://images.unsplash.com/photo-1606038166690-581c8bcc0897?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // ── EXTRA ──
  {
    id: 21,
    category: "women",
    alt: "Women's long layers",
    image:
      "https://images.unsplash.com/photo-1735424080768-8730f9c8a0e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    category: "men",
    alt: "Men's scissor cut",
    image:
      "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 23,
    category: "color",
    alt: "Vivid color",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&h=800&fit=crop&q=80",
  },
];

export default galleryData;
