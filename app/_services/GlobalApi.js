"server side";

const { gql, default: request } = require("graphql-request");

const MASTER_URL =
  //"https://api-ap-south-1.hygraph.com/v2/clvhpefg00bp007wcywvzlhgp/master"; // Aryan Master Branch
  // "https://api-ap-south-1.hygraph.com/v2/clvjb23c9000008jn5d4t3di1/master"; // Aryan New Branch
  // "https://api-ap-south-1.hygraph.com/v2/clvgpggqz030p07v0kcxs1fca/master";
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessByCategory = async (category) => {
  const query =
    gql`
    query MyQuery {
        businessLists(where: {category: 
            {name: "` +
    category +
    `"}}) {
          about
          address
          category {
            name
          }
          contactPerson
          email
          id
          name
          images {
            url
          }
        }
      }
      `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessById = async (id) => {
  const query =
    gql`
  query GetBusinessById {
    businessList(where: {id: "` +
    id +
    `"}) {
      about
      address
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createNewBooking = async (
  businessId,
  date,
  time,
  userEmail,
  userName
) => {
  const query =
    gql`
  query GetBusinessById {
    businessList(where: {id: "` +
    businessId +
    `"}) {
      about
      address
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `;
  const serviceProvider = await request(MASTER_URL, query);
  console.log(
    "findServiceProvider ---- : ",
    serviceProvider.businessList.email
  );
  // sendEmail(serviceProvider.businessList.email);

  const mutationQuery =
    gql`
  mutation CreateBooking {
    createBooking(
      data: 
         {bookingStatus: Booked, 
        businessList: {connect: {id: "` +
    businessId +
    `"}},
         date: "` +
    date +
    `", time: "` +
    time +
    `", 
         userEmail: "` +
    userEmail +
    `",
          userName: "` +
    userName +
    `"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const BusinessBookedSlot = async (businessId, date) => {
  const query =
    gql`
  query BusinessBookedSlot {
    bookings(where: {businessList: 
      {id: "` +
    businessId +
    `"}, date: "` +
    date +
    `"}) {
      date
      time
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const GetUserBookingHistory = async (userEmail) => {
  const query =
    gql`
  query GetUserBookingHistory {
    bookings(where: {userEmail: "` +
    userEmail +
    `"}
    orderBy: publishedAt_DESC) {
      businessList {
        name
        images {
          url
        }
        contactPerson
        address
      }
      date
      time
      id
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const deleteBooking = async (bookingId) => {
  const mutationQuery =
    gql`
 
  mutation MyMutation {
    deleteBooking(where: {id: "` +
    bookingId +
    `"}) {
      id
    }
  }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const createServiceProvider = async (
  name,
  email,
  address,
  phoneNumber,
  service,
  aboutYou,
  aadharFile,
  profilePhoto,
  servicePhoto
) => {
  const mutationQuery =
    gql`
    mutation ServiceProvider {
      createServiceProvider(
        data: {
          name: "` +
    name +
    `,
          email: "` +
    email +
    `",
          address: "` +
    address +
    `",
          phoneNumber: "` +
    phoneNumber +
    `",
          service: "` +
    service +
    `",
          aboutYou: "` +
    aboutYou +
    `",
          aadharFile: {create: {uploadUrl: "` +
    aadharFile +
    `"}},
          profilePhoto: {create: {uploadUrl: "` +
    profilePhoto +
    `"}},
          servicePhoto: {create: {uploadUrl: "` +
    servicePhoto +
    `"}}}
       ) {
        id
        aboutYou
        address
        email
        name
        phoneNumber
        service
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

// const createServiceProvider = async (
//   name,
//   email,
//   phoneNumber,
//   address,
//   service,
//   aboutYou,
//   aadharFile,
//   profilePhoto,
//   servicePhoto
// ) => {
//   const mutationQuery = gql`
//     mutation ServiceProvider {
//       createServiceProvider(
//         data: {
//           name: "${name}",
//           email: "${email}",
//           phoneNumber: "${phoneNumber}",
//           address: "${address}",
//           service: "${service}",
//           aboutYou: "${aboutYou}",
//           aadharFile: {create: {uploadUrl: "${aadharFile}"}},
//           profilePhoto: {create: {uploadUrl: "${profilePhoto}"}},
//           servicePhoto: {create: {uploadUrl: "${servicePhoto}"}}}
//       ) {
//         id
//         aboutYou
//         address
//         email
//         name
//         phoneNumber
//         service
//       }
//     }
//   `;
//   const result = await request(MASTER_URL, mutationQuery);
//   return result;
// };

const addComment = async (data) => {
  const reviewQuery =
    gql`
    mutation addReview {
      createReview(
        data: {
          comment: "` +
    data.comment +
    `"
          profilePhoto: "` +
    data.profilePhoto +
    `"
          star: ` +
    data.star +
    `
          userEmail: "` +
    data.userEmail +
    `"
          userName: "` +
    data.userName +
    `"
          businessList: {connect: {id: "` +
    data.businessId +
    `"}}        }
      ) {
        id
        userEmail
        userName
      }
      publishManyReviews(to: PUBLISHED) {
        count
      }
    }
  `;
  const result = await request(MASTER_URL, reviewQuery);
  return result;
};

const getAllComment = async (businessId) => {
  const allCommentQuery =
    gql`
    query getAllReview {
      reviews(where: { businessList: { id: "` +
    businessId +
    `" } }) {
        userName
        star
        publishedAt
        profilePhoto
        comment
      }
    }
  `;
  const result = await request(MASTER_URL, allCommentQuery);
  return result;
};


export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
  deleteBooking,
  createServiceProvider,
  addComment,
  getAllComment,
};
