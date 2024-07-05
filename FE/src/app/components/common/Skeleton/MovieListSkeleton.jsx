

const Skeleton = ({ width, height }) => {
    return (
      <div
        className={`skeleton rounded-md`}
        style={{ width: `${width}px`, height: `${height}px` }}
      ></div>
    );
  };

const MovieListSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {Array(10)
          .fill(0)
          .map((item, index) => (
            <Skeleton
              key={index}
              width={250}
              height={300}
            />
          ))}
      </div>
    </>
  );
};

export default MovieListSkeleton;