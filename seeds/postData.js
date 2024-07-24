const { Post } = require("../models");

const postData = [
  {
    title: "The Ultimate Guide to Morning Skincare Routine",
    content: "Starting your day with a proper skincare routine can make a significant difference in the health and appearance of your skin. Begin with a gentle cleanser to remove impurities and excess oil, followed by a hydrating toner to balance your skin's pH. Apply a vitamin C serum to brighten your complexion and protect against environmental damage, then use a lightweight, non-comedogenic moisturizer to keep your skin hydrated. Never skip sunscreen, even on cloudy days, to protect against harmful UV rays and prevent premature aging. By following these steps, you'll set a solid foundation for healthy, glowing skin all day long.",
    user_id: 1,
  },
  // add more dummy chess blog posts here
  {
    title: "Top 5 Natural Ingredients for Glowing Skin",
    content: "Incorporating natural ingredients into your skincare routine can enhance your skin's radiance. Aloe vera soothes and hydrates, honey attracts and retains moisture while fighting acne, turmeric's anti-inflammatory properties brighten the skin, rosehip oil improves texture and reduces scars, and green tea's antioxidants protect and reduce redness. These ingredients can be used directly or found in various skincare products, providing an easy way to achieve a glowing complexion.",
    user_id: 2,
  },
  {
    title: "How to Combat Acne: Effective Tips and Tricks",
    content: "Managing acne involves a consistent and gentle skincare routine. Cleanse your face twice daily with a gentle cleanser, use non-comedogenic products to prevent clogged pores, and apply spot treatments with benzoyl peroxide or salicylic acid to reduce inflammation. Hydrate with a lightweight, oil-free moisturizer and avoid touching your face to prevent the transfer of bacteria and oil. These tips can help you achieve clearer skin and manage breakouts effectively.",
    user_id: 3,
  },
  {
    title: "The Benefits of Using Face Masks Weekly",
    content: "Incorporating face masks into your weekly skincare routine offers numerous benefits, such as deep cleansing, intense hydration, and a brightening effect. Masks with ingredients like hyaluronic acid and vitamin C can penetrate deeper into your skin, providing targeted treatment for specific concerns such as acne or dullness. Using face masks also offers a relaxing self-care ritual, enhancing your overall well-being while promoting healthier, more radiant skin.",
    user_id: 4,
  },
  {
    title: "Understanding the Importance of Night Skincare Routine",
    content: "A nighttime skincare routine is essential for skin repair and rejuvenation. Start by removing makeup with a gentle remover, then cleanse your face to ensure a clean canvas for your treatments. Apply a hydrating toner, followed by a serum that addresses your specific concerns, such as retinol for fine lines or hyaluronic acid for hydration. Use a rich moisturizer to lock in moisture and an eye cream to reduce puffiness and dark circles. This routine helps your skin heal and regenerate, resulting in refreshed, glowing skin by morning.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
