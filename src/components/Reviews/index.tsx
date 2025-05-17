import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/marquee";
import reviews from "@/data/home_reviews.json";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
                      img,
                      name,
                      username,
                      body,
                    }: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative max-w-72 h-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const HomeTestimonial = () => {
  return (
    <div
      className="relative flex pt-0 mt-0 mb-12 w-full flex-col items-center justify-center overflow-hidden dark:bg-total-black py-20 ">
      <h2 className="my-8 md:text-5xl xs:text-2xl text-slate-700 dark:text-slate-300 font-extrabold">User Testimonals</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent  dark:from-total-black dark:to-background"></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent dark:from-total-black dark:to-background"></div>
    </div>
  );
};

export default HomeTestimonial;
