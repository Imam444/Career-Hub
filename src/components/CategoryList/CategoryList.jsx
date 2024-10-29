import icon1 from "../../assets/icons/accounts.png";
import icon2 from "../../assets/icons/creative.png";
import icon3 from "../../assets/icons/marketing.png";
import icon4 from "../../assets/icons/chip.png";

const CategoryList = () => {
  const jobs = [
    {
      id: 1,
      icon: icon1,
      title: "Account & Finance",
      available: "300 Jobs Available",
    },
    {
      id: 2,
      icon: icon2,
      title: "Creative Design",
      available: "100+ Jobs Available",
    },
    {
      id: 3,
      icon: icon3,
      title: "Marketing & Sales",
      available: "150 Jobs Available",
    },
    {
      id: 4,
      icon: icon4,
      title: "Engineering Job",
      available: "224 Jobs Available",
    },
  ];

  return (
    <div className="px-20">
      <div className="text-center mt-16">
        <h2 className="font-bold text-4xl">Job Category List</h2>
        <p className="my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex flex-col md:flex-row ">
        {jobs.map((job) => (
          <div key={job.id}>
            <div className="rounded w-60 h-40 m-4 p-8 bg-slate-50">
              <img src={job.icon} alt="#" />
              <h4 className="font-semibold"> {job.title} </h4>
              <p> {job.available} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
