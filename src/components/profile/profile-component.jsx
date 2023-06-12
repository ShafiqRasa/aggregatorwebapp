import { StarIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utils/joiner-class.utils";

const reviews = [
  {
    id: 1,
    title: "This is the best white t-shirt out there",
    rating: 5,
    content: `
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: "Mark Edwards",
    avatarSrc:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const UserProfile = () => {
  return (
    <div className="bg-white  mx-auto ">
      <div className="space-y-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex gap-4 flex-col md:flex-row flex-start"
          >
            <div className="order-2 mt-6  sm:mt-0">
              <h3 className="text-sm font-medium text-gray-900">
                {review.title} dd
              </h3>
              <p className="sr-only">{review.rating} out of 5 stars</p>
            </div>

            <div className="order-1 flex items-center sm:flex-col sm:items-start">
              <img
                src={review.avatarSrc}
                alt={`${review.author}.`}
                className="h-12 w-12 rounded-full"
              />

              <div className="ml-4 sm:ml-0 sm:mt-4">
                <p className="text-sm font-medium text-gray-900">
                  {review.author}
                </p>
                <div className="mt-2 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
