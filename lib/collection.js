// export async function getAllTokenInCollection() {
//     const query =
//       `{
//         collectionByHandle(handle: "${collection}") {
//           id
//           title
//           products(first: 250) {
//             edges {
//               node {
//                 id
//                 title
//                 description
//                 handle
//                 images(first: 250) {
//                   edges {
//                     node {
//                       id
//                       originalSrc
//                       height
//                       width     
//                       altText             
//                     }
//                   }
//                 }
//                 variants(first: 250) {
//                   edges {
//                     node {
//                       id
//                       title
//                       price                
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }`
//     ;


    
// //   const response = await callShopify(query);

//   const allProducts = response.data.collectionByHandle.products.edges
//     ? response.data.collectionByHandle.products.edges
//     : [];

//   return allProducts;

// }