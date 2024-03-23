import account from "../../assets/icons/accounts.png";

const Category = ({ job }) => {
  const { logo, category_name, availability } = job;

  return (
    <div className="card bg-[#f9f9ff] mb-10">
      <div className="card-body">
        <div className="bg-[#efecff] flex flex-col justify-center items-center p-4 w-16 rounded-lg">
          <img className="w-10" src={account} alt="" />
        </div>
        <h2 className="card-title">{category_name}</h2>
        <p className="text-base font-medium text-[#757575]">{availability}</p>
      </div>
    </div>
  );
};

export default Category;
