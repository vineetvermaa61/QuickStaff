import Image from "next/image";
import { useEffect, useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

const calculateAverageStarRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return 0;
  }
  // Calculate total star rating
  const totalStars = reviews.reduce((acc, curr) => acc + curr.star, 0);
  const averageStars = totalStars / reviews.length;
  return Math.round(averageStars * 100) / 100;
};



function BusinessDescription({ business }) {
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState("");

  useEffect(() => {
    if (business) {
      try {
        const fetchComments = async () => {
          const res = await GlobalApi.getAllComment(business.id);
          // console.log(res);
          const averageStarRating = calculateAverageStarRating(res?.reviews);
          console.log("Average star rating:", averageStarRating);
          setAllComment(res?.reviews);
        };
        fetchComments();
      } catch (error) {
        console.error("Error fetching comments:", error);
        toast("Error fetching comments. Please try again later.");
      }
    }
  }, [business]);

  const handleSubmit = async () => {
    if (!session) {
      toast("Please login first to comment!!");
      return;
    }

    const { user } = session;
    const data = {
      userName: user.name,
      userEmail: user.email,
      profilePhoto: user.image,
      star: rating,
      comment,
      businessId: business.id,
    };

    try {
      const res = await GlobalApi.addComment(data);
      console.log(res);
      toast("Added comment successfully.");
    } catch (error) {
      console.error("Error adding comment:", error);
      toast("Error adding comment. Please try again later.");
    }
  };

  return (
    business?.name && (
      <div>
        <h2 className="font-bold text-[25px] ">Description</h2>
        <p className="mt-4 text-lg text-gray-600">{business.about}</p>

        <h2 className="font-bold text-[25px] mt-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {business?.images?.map((item, index) => (
            <Image
              src={item?.url}
              key={index}
              alt="image"
              width={700}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>

        {/* Comment Section */}
        <section className="w-full rounded-lg border-2 border-purple-400 p-4 my-10 max-w-xl">
          <h3 className="font-os text-lg font-bold">Comments</h3>
          {/* Render all comments */}
          {Array.isArray(allComment) &&
            allComment?.map((comment, index) => (
              <div key={index} className="flex mt-4">
                <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={comment.profilePhoto}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="font-medium text-purple-800">
                    {comment.userName}
                  </div>
                  <div className="text-gray-600">
                    Posted on {comment.publishedAt.substring(0, 10)} , {"  "}
                    {comment.publishedAt.substring(11, 19)}
                  </div>
                  <div className="mt-2 text-purple-800">{comment.comment}</div>
                </div>
              </div>
            ))}

          {/* Comment form */}
          <form
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-purple-800 font-medium"
              >
                Rating
              </label>
              <ReactRating
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-purple-800 font-medium"
              >
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={comment}
                className="border-2 border-purple-300 p-2 w-full rounded focus:outline-purple-500"
                onChange={(e) => setComment(e.target.value)}
                required
                placeholder="Enter your comment here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white font-medium py-2 px-4 rounded hover:bg-purple-500"
              disabled={rating == 0 || !comment}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    )
  );
}

export default BusinessDescription;
